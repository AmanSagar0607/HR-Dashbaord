"use client"

import { useState } from "react"
import { format, isToday } from "date-fns"
import { Pin, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface Announcement {
  id: string
  title: string
  timestamp: Date
  isPinned?: boolean
}

interface AnnouncementCardProps {
  date: Date
  announcements: Announcement[]
  onSeeAll: () => void
}

export function AnnouncementCard({ date, announcements, onSeeAll }: AnnouncementCardProps) {
  const [pinnedAnnouncements, setPinnedAnnouncements] = useState<Record<string, boolean>>({})
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const togglePin = (id: string) => {
    setPinnedAnnouncements(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const viewDetails = (announcement: Announcement) => {
    setSelectedAnnouncement(announcement)
    setDialogOpen(true)
  }

  const formatTimestamp = (timestamp: Date) => {
    const date = new Date(timestamp)
    const timeFormatted = format(date, "HH:mm a, dd MMM")

    return isToday(date) ? `Today ${timeFormatted}` : timeFormatted
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-medium">Announcement</CardTitle>
          <Button variant="ghost" size="sm" className="text-sm text-muted-foreground">
            {format(date, "dd MMM yyyy")}
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="border-b last:border-0">
              <div className="flex items-center justify-between p-4">
                <div className="space-y-1">
                  <p className="font-medium">{announcement.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatTimestamp(announcement.timestamp)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => togglePin(announcement.id)}
                  >
                    <Pin
                      className={`h-5 w-5 rotate-30 transition-transform ${
                        pinnedAnnouncements[announcement.id] || announcement.isPinned
                          ? "fill-gray-500 text-gray-500"
                          : "text-muted-foreground"
                      }`}
                    />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => viewDetails(announcement)}>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Read</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
          <div className="p-4 text-center">
            <Button
              variant="ghost"
              className="w-full text-red-500 hover:text-red-600"
              onClick={onSeeAll}
            >
              See All Announcements
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Announcement Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Announcement Details</DialogTitle>
            <DialogDescription>
              {selectedAnnouncement && (
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{selectedAnnouncement.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {format(selectedAnnouncement.timestamp, "dd MMM yyyy, HH:mm a")}
                  </p>
                  <div className="mt-4">
                    <p>Additional details would appear here.</p>
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

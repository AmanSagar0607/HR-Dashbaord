// "use client"

// import { format } from "date-fns"
// import { MoreHorizontal } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog"
// import { useState } from "react"

// interface ScheduleItem {
//   id: string
//   title: string
//   time: Date
// }

// interface ScheduleCardProps {
//   date: Date
//   priorityItems: ScheduleItem[]
//   otherItems: ScheduleItem[]
//   onCreateNew: () => void
// }

// export function ScheduleCard({ 
//   date, 
//   priorityItems, 
//   otherItems, 
//   onCreateNew 
// }: ScheduleCardProps) {
//   const [selectedItem, setSelectedItem] = useState<ScheduleItem | null>(null)
//   const [dialogOpen, setDialogOpen] = useState(false)

//   const viewDetails = (item: ScheduleItem) => {
//     setSelectedItem(item)
//     setDialogOpen(true)
//   }

//   return (
//     <>
//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between pb-2">
//           <CardTitle className="text-xl font-medium">Upcoming Schedule</CardTitle>
//           <Button variant="ghost" size="sm" className="text-sm text-muted-foreground">
//             {format(date, "dd MMM yyyy")}
//           </Button>
//         </CardHeader>
//         <CardContent className="p-0">
//           {priorityItems.length > 0 && (
//             <div className="px-4 pt-4">
//               <h4 className="mb-2 text-sm font-medium">Priority</h4>
//               {priorityItems.map((item) => (
//                 <div 
//                   key={item.id}
//                   className="mb-4 rounded-md border p-3"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="font-medium">{item.title}</p>
//                       <p className="text-xs text-muted-foreground">
//                         Today - {format(item.time, "HH:mm a")}
//                       </p>
//                     </div>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon" className="h-8 w-8">
//                           <MoreHorizontal className="h-5 w-5" />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem onClick={() => viewDetails(item)}>View Details</DropdownMenuItem>
//                         <DropdownMenuItem>Edit</DropdownMenuItem>
//                         <DropdownMenuItem>Delete</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
          
//           {otherItems.length > 0 && (
//             <div className="px-4 pt-4">
//               <h4 className="mb-2 text-sm font-medium">Other</h4>
//               {otherItems.map((item) => (
//                 <div 
//                   key={item.id}
//                   className="mb-4 rounded-md border p-3"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="font-medium">{item.title}</p>
//                       <p className="text-xs text-muted-foreground">
//                         Today - {format(item.time, "HH:mm a")}
//                       </p>
//                     </div>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon" className="h-8 w-8">
//                           <MoreHorizontal className="h-5 w-5" />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem onClick={() => viewDetails(item)}>View Details</DropdownMenuItem>
//                         <DropdownMenuItem>Edit</DropdownMenuItem>
//                         <DropdownMenuItem>Delete</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
          
//           <div className="p-4 text-center">
//             <Button 
//               variant="ghost" 
//               className="w-full text-red-500 hover:text-red-600"
//               onClick={onCreateNew}
//             >
//               Create a New Schedule
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Schedule Item Details Dialog */}
//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Schedule Details</DialogTitle>
//             <DialogDescription>
//               {selectedItem && (
//                 <div className="mt-4">
//                   <h3 className="text-lg font-medium">{selectedItem.title}</h3>
//                   <p className="mt-2 text-sm text-muted-foreground">
//                     {format(selectedItem.time, "dd MMM yyyy, HH:mm a")}
//                   </p>
//                   <div className="mt-4">
//                     <p>Location: Conference Room A</p>
//                     <p className="mt-2">Participants: HR Team, Department Managers</p>
//                     <p className="mt-2">Additional details would appear here.</p>
//                   </div>
//                 </div>
//               )}
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </>
//   )
// }


"use client"

import { format } from "date-fns"
import { MoreHorizontal } from "lucide-react"
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
import { useState } from "react"

interface ScheduleItem {
  id: string
  title: string
  time: Date
}

interface ScheduleCardProps {
  date: Date
  priorityItems: ScheduleItem[]
  otherItems: ScheduleItem[]
  onCreateNew: () => void
}

export function ScheduleCard({ 
  date, 
  priorityItems, 
  otherItems, 
  onCreateNew 
}: ScheduleCardProps) {
  const [selectedItem, setSelectedItem] = useState<ScheduleItem | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const viewDetails = (item: ScheduleItem) => {
    setSelectedItem(item)
    setDialogOpen(true)
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-medium">Upcoming Schedule</CardTitle>
          <Button variant="ghost" size="sm" className="text-sm text-muted-foreground">
            {format(date, "dd MMM yyyy")}
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          {priorityItems.length > 0 && (
            <div className="px-4 pt-4">
              <h4 className="mb-2 text-sm font-medium">Priority</h4>
              {priorityItems.map((item) => (
                <div 
                  key={item.id}
                  className="mb-4 rounded-md border p-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        Today - {format(item.time, "HH:mm a")}
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => viewDetails(item)}>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {otherItems.length > 0 && (
            <div className="px-4 pt-4">
              <h4 className="mb-2 text-sm font-medium">Other</h4>
              {otherItems.map((item) => (
                <div 
                  key={item.id}
                  className="mb-4 rounded-md border p-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        Today - {format(item.time, "HH:mm a")}
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => viewDetails(item)}>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="p-4 text-center">
            <Button 
              variant="ghost" 
              className="w-full text-red-500 hover:text-red-600"
              onClick={onCreateNew}
            >
              Create a New Schedule
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Schedule Item Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Schedule Details</DialogTitle>
            <DialogDescription>
              {selectedItem && (
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{selectedItem.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {format(selectedItem.time, "dd MMM yyyy, HH:mm a")}
                  </p>
                  <div className="mt-4">
                    <p>Location: Conference Room A</p>
                    <p className="mt-2">Participants: HR Team, Department Managers</p>
                    <p className="mt-2">Additional details would appear here.</p>
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
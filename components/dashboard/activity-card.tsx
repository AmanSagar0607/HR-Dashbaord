// "use client"

// import { format } from "date-fns"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"

// interface ActivityCardProps {
//   timestamp: Date
//   title: string
//   description: string
//   activityCount: number
//   onSeeAll: () => void
// }

// export function ActivityCard({ 
//   timestamp, 
//   title, 
//   description, 
//   activityCount, 
//   onSeeAll 
// }: ActivityCardProps) {
//   return (
//     <Card className="bg-[#1a1f36] text-white">
//       <CardContent className="p-6">
//         <p className="text-xs text-gray-400">
//           {format(timestamp, "HH:mm a, EEE dd MMM yyyy")}
//         </p>
//         <h3 className="mt-2 text-xl font-semibold">{title}</h3>
//         <p className="mt-2 text-sm text-gray-300">{description}</p>
//         <p className="mt-4 text-sm">Today you makes {activityCount} Activity</p>
//         <Button 
//           className="mt-4 w-full bg-red-500 hover:bg-red-600"
//           onClick={onSeeAll}
//         >
//           See All Activity
//         </Button>
//       </CardContent>
//     </Card>
//   )
// }


"use client"

import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ActivityCardProps {
  timestamp: Date
  title: string
  description: string
  activityCount: number
  onSeeAll: () => void
}

export function ActivityCard({ 
  timestamp, 
  title, 
  description, 
  activityCount, 
  onSeeAll 
}: ActivityCardProps) {
  return (
    <Card className="bg-[#1a1f36] text-white dark:bg-[#1a1f36]/90">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Recently Activity</h3>
        <p className="text-xs text-gray-400">
          {format(timestamp, "HH:mm a, EEE dd MMM yyyy")}
        </p>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <p className="mt-4 text-sm">Today you makes {activityCount} Activity</p>
        <Button 
          className="mt-4 w-full bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white"
          onClick={onSeeAll}
        >
          See All Activity
        </Button>
      </CardContent>
    </Card>
  )
}
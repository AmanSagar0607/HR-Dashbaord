// "use client"

// import { useEffect, useState } from "react"
// import { Header } from "@/components/header"
// import { Sidebar } from "@/components/sidebar"
// import { StatCard } from "@/components/dashboard/stat-card"
// import { TrendCard } from "@/components/dashboard/trend-card"
// import { AnnouncementCard } from "@/components/dashboard/announcement-card"
// import { ActivityCard } from "@/components/dashboard/activity-card"
// import { ScheduleCard } from "@/components/dashboard/schedule-card"
// import { useToast } from "@/hooks/use-toast"

// // Sample data for charts
// const totalEmployeesData = [
//   { name: "Jan", value: 200 },
//   { name: "Feb", value: 205 },
//   { name: "Mar", value: 208 },
//   { name: "Apr", value: 210 },
//   { name: "May", value: 215 },
//   { name: "Jun", value: 216 },
// ]

// const talentRequestData = [
//   { name: "Jan", value: 10 },
//   { name: "Feb", value: 12 },
//   { name: "Mar", value: 14 },
//   { name: "Apr", value: 15 },
//   { name: "May", value: 15 },
//   { name: "Jun", value: 16 },
// ]

// export default function Home() {
//   const { toast } = useToast()
//   // Use client-side state initialization to avoid hydration mismatch
//   const [currentDate, setCurrentDate] = useState<Date | null>(null)
//   const [announcements, setAnnouncements] = useState<any[]>([])
//   const [priorityScheduleItems, setPriorityScheduleItems] = useState<any[]>([])
//   const [otherScheduleItems, setOtherScheduleItems] = useState<any[]>([])

//   // Initialize data on the client side to avoid hydration mismatches
//   useEffect(() => {
//     // Set the current date
//     setCurrentDate(new Date(2021, 8, 13)) // Sep 13, 2021

//     // Sample announcements
//     setAnnouncements([
//       {
//         id: "1",
//         title: "Outing schedule for every departement",
//         timestamp: new Date(2021, 8, 13, 10, 55), // Fixed timestamp to avoid "minutes ago" calculation
//       },
//       {
//         id: "2",
//         title: "Meeting HR Department",
//         timestamp: new Date(2021, 8, 12, 12, 30), // Sep 12, 2021, 12:30 PM
//         isStarred: true,
//       },
//       {
//         id: "3",
//         title: "IT Department need two more talents for UX/UI Designer position",
//         timestamp: new Date(2021, 8, 12, 9, 15), // Sep 12, 2021, 9:15 AM
//       },
//     ])

//     // Sample schedule items
//     setPriorityScheduleItems([
//       {
//         id: "1",
//         title: "Review candidate applications",
//         time: new Date(2021, 8, 13, 11, 30), // Sep 13, 2021, 11:30 AM
//       },
//     ])

//     setOtherScheduleItems([
//       {
//         id: "2",
//         title: "Interview with candidates",
//         time: new Date(2021, 8, 13, 10, 30), // Sep 13, 2021, 10:30 AM
//       },
//       {
//         id: "3",
//         title: "Short meeting with product designer from IT Departement",
//         time: new Date(2021, 8, 13, 9, 15), // Sep 13, 2021, 9:15 AM
//       },
//     ])
//   }, [])

//   const handleSeeAllAnnouncements = () => {
//     toast({
//       title: "Viewing all announcements",
//       description: "This would navigate to the announcements page",
//     })
//   }

//   const handleSeeAllActivity = () => {
//     toast({
//       title: "Viewing all activity",
//       description: "This would navigate to the activity page",
//     })
//   }

//   const handleCreateNewSchedule = () => {
//     toast({
//       title: "Create new schedule",
//       description: "This would open a form to create a new schedule",
//     })
//   }

//   // Show loading state until client-side data is ready
//   if (!currentDate) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-background">
//         <p>Loading...</p>
//       </div>
//     )
//   }

//   return (
//     <div className="flex min-h-screen bg-background">
//       <Sidebar />
//       <div className="flex-1">
//         <Header />
//         <main className="flex-1 space-y-6 p-6 lg:p-8">
//           <h1 className="text-3xl font-bold ">Dashboard</h1>
          
//           {/* Stats Row */}
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             <StatCard 
//               title="Available Position" 
//               value="24" 
//               subtitle="4 Urgently needed"
//               className="bg-red-50 text-[#ff5151] dark:bg-red-900/10"
//             />
//             <StatCard 
//               title="Job Open" 
//               value="10" 
//               subtitle="4 Active hiring"
//               className="bg-blue-50 text-[#3786f1] dark:bg-blue-900/10"
//             />
//             <StatCard 
//               title="New Employees" 
//               value="24" 
//               subtitle="4 Department"
//               className="bg-purple-50 text-[#ee61cf] dark:bg-purple-900/10"
//             />
//           </div>
          
          
//           {/* Trend Cards */}
//           <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//             <TrendCard 
//               title="Total Employees" 
//               value="216" 
//               trend="+2%" 
//               trendValue="+2% Past month"
//               data={totalEmployeesData}
//               breakdown={[
//                 { label: "120 Men", value: "" },
//                 { label: "96 Women", value: "" },
//               ]}
//             />
//             <TrendCard 
//               title="Talent Request" 
//               value="16" 
//               trend="+5%" 
//               trendValue="+5% Past month"
//               data={talentRequestData}
//               breakdown={[
//                 { label: "6 Men", value: "" },
//                 { label: "10 Women", value: "" },
//               ]}
//             />
//           </div>
          
//           {/* Announcements and Activity */}
//           <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//             <AnnouncementCard 
//               date={currentDate}
//               announcements={announcements}
//               onSeeAll={handleSeeAllAnnouncements}
//             />
//             <div className="grid grid-cols-1 gap-6">
//               <ActivityCard 
//                 timestamp={new Date(2021, 8, 10, 10, 40)} // Sep 10, 2021, 10:40 AM
//                 title="You Posted a New Job"
//                 description="Kindly check the requirements and terms of work and make sure everything is right."
//                 activityCount={12}
//                 onSeeAll={handleSeeAllActivity}
//               />
//               <ScheduleCard 
//                 date={currentDate}
//                 priorityItems={priorityScheduleItems}
//                 otherItems={otherScheduleItems}
//                 onCreateNew={handleCreateNewSchedule}
//               />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { StatCard } from "@/components/dashboard/stat-card"
import { TrendCard } from "@/components/dashboard/trend-card"
import { AnnouncementCard } from "@/components/dashboard/announcement-card"
import { ActivityCard } from "@/components/dashboard/activity-card"
import { ScheduleCard } from "@/components/dashboard/schedule-card"
import { useToast } from "@/hooks/use-toast"

// Sample data for charts
const totalEmployeesData = [
  { name: "Jan", value: 200 },
  { name: "Feb", value: 205 },
  { name: "Mar", value: 208 },
  { name: "Apr", value: 210 },
  { name: "May", value: 215 },
  { name: "Jun", value: 216 },
]

const talentRequestData = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 12 },
  { name: "Mar", value: 14 },
  { name: "Apr", value: 15 },
  { name: "May", value: 15 },
  { name: "Jun", value: 16 },
]

export default function Home() {
  const { toast } = useToast()
  // Use client-side state initialization to avoid hydration mismatch
  const [currentDate, setCurrentDate] = useState<Date | null>(null)
  const [announcements, setAnnouncements] = useState<any[]>([])
  const [priorityScheduleItems, setPriorityScheduleItems] = useState<any[]>([])
  const [otherScheduleItems, setOtherScheduleItems] = useState<any[]>([])

  // Initialize data on the client side to avoid hydration mismatches
  useEffect(() => {
    // Set the current date
    setCurrentDate(new Date(2021, 8, 13)) // Sep 13, 2021

    // Sample announcements
    setAnnouncements([
      {
        id: "1",
        title: "Outing schedule for every departement",
        timestamp: new Date(2021, 8, 13, 10, 55), // Fixed timestamp to avoid "minutes ago" calculation
      },
      {
        id: "2",
        title: "Meeting HR Department",
        timestamp: new Date(2021, 8, 12, 12, 30), // Sep 12, 2021, 12:30 PM
        isStarred: true,
      },
      {
        id: "3",
        title: "IT Department need two more talents for UX/UI Designer position",
        timestamp: new Date(2021, 8, 12, 9, 15), // Sep 12, 2021, 9:15 AM
      },
    ])

    // Sample schedule items
    setPriorityScheduleItems([
      {
        id: "1",
        title: "Review candidate applications",
        time: new Date(2021, 8, 13, 11, 30), // Sep 13, 2021, 11:30 AM
      },
    ])

    setOtherScheduleItems([
      {
        id: "2",
        title: "Interview with candidates",
        time: new Date(2021, 8, 13, 10, 30), // Sep 13, 2021, 10:30 AM
      },
      {
        id: "3",
        title: "Short meeting with product designer from IT Departement",
        time: new Date(2021, 8, 13, 9, 15), // Sep 13, 2021, 9:15 AM
      },
    ])
  }, [])

  const handleSeeAllAnnouncements = () => {
    toast({
      title: "Viewing all announcements",
      description: "This would navigate to the announcements page",
    })
  }

  const handleSeeAllActivity = () => {
    toast({
      title: "Viewing all activity",
      description: "This would navigate to the activity page",
    })
  }

  const handleCreateNewSchedule = () => {
    toast({
      title: "Create new schedule",
      description: "This would open a form to create a new schedule",
    })
  }

  // Show loading state until client-side data is ready
  if (!currentDate) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="flex-1 p-6 lg:p-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column (2/3 width on large screens) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <StatCard 
                  title="Available Position" 
                  value="24" 
                  subtitle="4 Urgently needed"
                  className="bg-red-50 text-[#ff5151] dark:bg-red-900/10"
                />
                <StatCard 
                  title="Job Open" 
                  value="10" 
                  subtitle="4 Active hiring"
                  className="bg-blue-50 text-[#3786f1] dark:bg-blue-900/10"
                />
                <StatCard 
                  title="New Employees" 
                  value="24" 
                  subtitle="4 Department"
                  className="bg-purple-50 text-[#ee61cf] dark:bg-purple-900/10"
                />
              </div>
              
              {/* Trend Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TrendCard 
                  title="Total Employees" 
                  value="216" 
                  trend="+2%" 
                  trendValue="+2% Past month"
                  data={totalEmployeesData}
                  breakdown={[
                    { label: "120 Men", value: "" },
                    { label: "96 Women", value: "" },
                  ]}
                />
                <TrendCard 
                  title="Talent Request" 
                  value="16" 
                  trend="+5%" 
                  trendValue="+5% Past month"
                  data={talentRequestData}
                  breakdown={[
                    { label: "6 Men", value: "" },
                    { label: "10 Women", value: "" },
                  ]}
                />
              </div>
              
              {/* Announcements */}
              <AnnouncementCard 
                date={currentDate}
                announcements={announcements}
                onSeeAll={handleSeeAllAnnouncements}
              />
            </div>
            
            {/* Right Column (1/3 width on large screens) */}
            <div className="space-y-6">
              <ActivityCard 
                timestamp={new Date(2021, 8, 10, 10, 40)} // Sep 10, 2021, 10:40 AM
                title="You Posted a New Job"
                description="Kindly check the requirements and terms of work and make sure everything is right."
                activityCount={12}
                onSeeAll={handleSeeAllActivity}
              />
              <ScheduleCard 
                date={currentDate}
                priorityItems={priorityScheduleItems}
                otherItems={otherScheduleItems}
                onCreateNew={handleCreateNewSchedule}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
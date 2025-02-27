"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  UserRound, 
  Building2, 
  HeadphonesIcon, 
  Settings
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarContentProps {
  onNavClick?: () => void
}

export function SidebarContent({ onNavClick }: SidebarContentProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/",
      active: pathname === "/",
      color: "text-[#ff5151] dark:text-[#ff5151]",
      activeColor: "text-[#ff5151] dark:text-[#ff5151]",
    },
    {
      label: "Recruitment",
      icon: Users,
      href: "/recruitment",
      active: pathname === "/recruitment",
      color: "text-red-500 dark:text-red-400",
      activeColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      label: "Schedule",
      icon: Calendar,
      href: "/schedule",
      active: pathname === "/schedule",
      color: "text-red-500 dark:text-red-400",
      activeColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      label: "Employee",
      icon: UserRound,
      href: "/employee",
      active: pathname === "/employee",
    },
    {
      label: "Department",
      icon: Building2,
      href: "/department",
      active: pathname === "/department",
    },
  ]

  const otherRoutes = [
    {
      label: "Support",
      icon: HeadphonesIcon,
      href: "/support",
      active: pathname === "/support",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      active: pathname === "/settings",
    },
  ]

  return (
    <div className="flex h-full w-full flex-col space-y-4 py-4">
      <div className="px-6 py-2">
        <h2 className="text-2xl font-bold">WeHR</h2>
      </div>
      <div className="px-3 py-2">
        <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">
          MAIN MENU
        </h3>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={onNavClick}
            >
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2",
                  route.active && route.color ? route.activeColor : "",
                  route.active && "font-semibold"
                )}
              >
                <route.icon className={cn("h-5 w-5", route.active && route.color ? route.color : "")} />
                {route.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
        <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">
          OTHER
        </h3>
        <div className="space-y-1">
          {otherRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={onNavClick}
            >
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2",
                  route.active && "font-semibold"
                )}
              >
                <route.icon className="h-5 w-5" />
                {route.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("hidden h-screen w-64 flex-col border-r bg-background lg:flex", className)}>
      <SidebarContent />
    </div>
  )
}
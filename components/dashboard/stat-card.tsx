import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  subtitle: string
  className?: string
  children?: React.ReactNode
}

export function StatCard({ title, value, subtitle, className, children }: StatCardProps) {
  return (
    <div className={cn("rounded-lg p-6", className)}>
      <h3 className="text-lg font-medium text-[#121843] dark:text-white">{title}</h3>
      <p className="mt-2 text-4xl font-bold text-[#121843] dark:text-white">{value}</p>
      <p className="mt-1 text-sm">{subtitle}</p>
      {children}
    </div>
  )
}
"use client"

import { cn } from "@/lib/utils"
import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts"

interface TrendCardProps {
  title: string
  value: string | number
  trend: string
  trendValue: string
  data: any[]
  breakdown?: { label: string; value: string | number }[]
  className?: string
}

export function TrendCard({ 
  title, 
  value, 
  trend, 
  trendValue, 
  data, 
  breakdown,
  className 
}: TrendCardProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-6", className)}>
      <div className="grid grid-cols-2 gap-4">
        {/* Left Side - Total Employees & Breakdown */}
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="mt-2 text-4xl font-bold">{value}</p>
          {breakdown && (
            <div className="mt-2 space-y-1">
              {breakdown.map((item, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  {item.label} {item.value}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Right Side - Trend & Graph */}
        <div className="flex flex-col items-end">
          <div className="flex flex-col items-end">
            <div className="flex items-center text-xs font-medium text-red-500">
              {trend}
              <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 12L12 5L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-xs text-muted-foreground">Past month</p>
          </div>

          {/* Graph */}
          <div className="mt-4 h-[80px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <XAxis 
                  dataKey="name" 
                  hide 
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  hide 
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Value
                              </span>
                              <span className="font-bold text-muted-foreground">
                                {payload[0].value}
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff6b6b" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ff6b6b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#ff6b6b"
                  strokeWidth={2}
                  fill="url(#colorUv)"
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Trend Value */}
          <div className="mt-2">
            <div className="inline-block rounded-md bg-red-50 px-2 py-1 text-xs text-red-500">
              {trendValue}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

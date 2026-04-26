"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { MargenPorLinea } from "@/app/store/slices/dataSlice"

export const description = "A bar chart"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

interface ChartBarDefaultProps {
  data: MargenPorLinea[]
}

export function ChartBarDefault({ data }: ChartBarDefaultProps) {
  const top5Data = [...data].sort((a, b) => b.MARGEN_TOTAL - a.MARGEN_TOTAL).slice(0, 5)


  return (
    <Card size="default" className="w-full flex flex-col md:col-span-2 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Margen</CardTitle>
        <CardDescription className="text-2xl">por Línea</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={top5Data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="nombre_linea"
              interval={0}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="MARGEN_TOTAL" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium text-muted-foreground">
          Top 5 líneas que generan mayor margen
        </div>
      </CardFooter>
    </Card>
  )
}

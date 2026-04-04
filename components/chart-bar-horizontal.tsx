"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

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
import { MargenPorSucursal } from "@/app/store/slices/dataSlice"

export const description = "A horizontal bar chart margen por sucursal"

const chartConfig = {
  desktop: {
    label: "Sucursal",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

interface ChartBarMultipleProps{
    data: MargenPorSucursal[]
}

export function ChartBarHorizontal({data}: ChartBarMultipleProps) {
  return (
    <Card size="default" className="col-span-3 w-full">
      <CardHeader>
        <CardTitle  className="text-3xl font-bold">Margen</CardTitle>
        <CardDescription className="text-2xl">por sucursal</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              left: 24,
            }}
          >
            <XAxis type="number" dataKey="MARGEN_TOTAL" />
            <YAxis
              dataKey="nombre_sucursal"
              type="category"
              width={120}
              interval={0}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="MARGEN_TOTAL" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium text-muted-foreground">
            Comparativa de margenes por cada sucursal
        </div>
      </CardFooter>
    </Card>
  )
}

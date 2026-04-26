"use client"
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
import { TopClienteMargen } from "@/app/store/slices/dataSlice"

export const description = "A horizontal bar chart top clientes margen"

const chartConfig = {
  desktop: {
    label: "Cliente",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

interface ChartBarClientesProps{
    data: TopClienteMargen[]
}

export function ChartBarClientes({data}: ChartBarClientesProps) {
  return (
    <Card size="default" className="w-full flex flex-col md:col-span-2 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Top 10 Clientes</CardTitle>
        <CardDescription className="text-2xl">por Margen Total</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={chartConfig} className="h-full min-h-[300px] aspect-auto">
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              left: 50,
            }}
          >
            <XAxis type="number" dataKey="MARGEN_TOTAL" hide />
            <YAxis
              dataKey="nombre_cliente"
              type="category"
              width={120}
              interval={0}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.length > 15 ? value.substring(0, 15) + "..." : value}
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
            Los 10 clientes que generan mayor margen
        </div>
      </CardFooter>
    </Card>
  )
}

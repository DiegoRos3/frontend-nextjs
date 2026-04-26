"use client"

import { Cell, Pie, PieChart } from "recharts"

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
import { ImportePorSucursal } from "@/app/store/slices/dataSlice"

export const description = "A donut chart for importe por sucursal"

interface ChartPieSucursalProps {
  data: ImportePorSucursal[]
}

const COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
]

export function ChartPieSucursal({ data }: ChartPieSucursalProps) {
  // Generate a dynamic config for the legend/tooltip if needed
  const chartConfig = data.reduce((acc, curr, index) => {
    acc[curr.nombre_sucursal] = {
      label: curr.nombre_sucursal,
      color: COLORS[index % COLORS.length],
    }
    return acc
  }, {} as Record<string, { label: string; color: string }>) satisfies ChartConfig

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-2xl font-bold">Importe por Sucursal</CardTitle>
        <CardDescription>Distribución de ventas por sucursal</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="IMPORTE_TOTAL"
              nameKey="nombre_sucursal"
              innerRadius={60}
              strokeWidth={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm pt-6">
        <div className="leading-none text-muted-foreground">
          Mostrando el importe total generado por cada sucursal
        </div>
      </CardFooter>
    </Card>
  )
}

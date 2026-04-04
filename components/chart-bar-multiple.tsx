"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
import { ImporteMargenCuatrimestre } from "@/app/store/slices/dataSlice"

export const description = "A multiple bar chart para importe y margen por cuatrimestre"

const chartConfig = {
    IMPORTE_TOTAL: {
        label: "Importe Total (MXN) ",
        color: "var(--chart-1)",
    },
    MARGEN_TOTAL: {
        label: "Margen Total (MXN) ",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

interface ChartBarMultipleProps {
    data: ImporteMargenCuatrimestre[]
}

export function ChartBarMultiple({ data }: ChartBarMultipleProps) {
    return (
        <Card size="default" className="mx-auto w-full">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">Importe y Margen</CardTitle>
                <CardDescription className="text-2xl">Por Cuatrimestre</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={data}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="CUATRIMESTRE"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => `Q${value}`}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="IMPORTE_TOTAL" fill="var(--color-IMPORTE_TOTAL)" radius={4} />
                        <Bar dataKey="MARGEN_TOTAL" fill="var(--color-MARGEN_TOTAL)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium text-muted-foreground">
                    Comparativa de Importe vs Margen por cuatrimestre
                </div>
            </CardFooter>
        </Card>
    )
}

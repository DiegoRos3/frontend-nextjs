'use client'

import { AppHeader } from "@/components/app-header";
import KpiCard from "@/components/kpi-card";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ChartBarMultiple } from "@/components/chart-bar-multiple";

export default function Graficas() {

    const dashboardData = useAppSelector((state) => state.dashboardData.data);
    const dispatch = useAppDispatch();

    if (dashboardData.importe_margen_cuatrimestre.length === 0) {
        return (
            <>
                <AppHeader title="Graficas" />
                <div className="p-8 max-w-4xl mx-auto space-y-12 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        No se pudieron analizar tus datos
                    </h1>
                    <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
                        Intenta subir de nuevo tu archivo.
                    </p>
                </div>
            </>
        )
    }

    return (
        <>
            <AppHeader title="Graficas" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 p-6">
                <KpiCard nombreDato="Importe Total" valor={dashboardData.importe_total} />
                <KpiCard nombreDato="Ganancia Bruta" valor={dashboardData.ganancia_bruta} />
                <KpiCard nombreDato="Kilos Vendidos" valor={dashboardData.kilos_vendidos} />
                <ChartBarMultiple data={dashboardData.importe_margen_cuatrimestre} />
            </div>
        </>
    )
}
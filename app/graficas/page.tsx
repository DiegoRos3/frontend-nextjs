'use client'

import { AppHeader } from "@/components/app-header";
import KpiCard from "@/components/kpi-card";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function Graficas() {

    const dashboardData = useAppSelector((state) => state.dashboardData.data);
    const dispatch = useAppDispatch();

    return (
        <>
            <AppHeader title="Graficas" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 p-6">
                    <KpiCard nombreDato="awa" valor={dashboardData.importe_total}/>
                    <KpiCard nombreDato="owo" valor={dashboardData.ganancia_bruta}/>
                    <KpiCard nombreDato="uwu" valor={dashboardData.kilos_vendidos}/>
            </div>
        </>
    )
}
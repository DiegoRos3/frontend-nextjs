import { AppHeader } from "@/components/app-header";
import KpiCard from "@/components/kpi-card";

export default function Graficas() {
    return (
        <>
            <AppHeader title="Graficas" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 p-6">
                    <KpiCard nombreDato="awa" valor="126 no se que"/>
                    <KpiCard nombreDato="owo" valor="Una feria"/>
                    <KpiCard nombreDato="uwu" valor="Ingrese el valor ヾ(•ω•`)o"/>
            </div>
        </>
    )
}
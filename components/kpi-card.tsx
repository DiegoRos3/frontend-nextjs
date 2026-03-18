import { ChartNoAxesCombined } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type KpiCradProps = {
    nombreDato: string,
    valor: number
}

export default function KpiCard(datos: KpiCradProps){
    return (
        <Card size="default" className="mx-auto w-full max-w-sm sm:grid-cols-1">
            <CardHeader className="flex justify-items-start gap-3">
                <CardTitle className="text-3xl">{datos.nombreDato}</CardTitle>
                <ChartNoAxesCombined size={25} className="bg-emerald-600/20 text-emerald-600 dark:bg-emerald-600/20 dark:text-emerald-600 rounded-md"/>
            </CardHeader>
            <CardContent>
                <p>{datos.valor}</p>
            </CardContent>
        </Card>
    )
    
}
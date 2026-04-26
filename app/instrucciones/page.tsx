import { AppHeader } from "@/components/app-header";

export default function Instrucciones() {
    return (
        <>
            <AppHeader title="Instrucciones" />
            <div className="p-4 text-center space-y-8">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl" style={{ padding: "20px" }}>Guía de Uso</h1>
                <ol className="text-xl text-muted-foreground mx-auto max-w-2xl" style={{ textAlign: "left", listStyleType: "decimal" }}>
                    <li className="p-1.5">Ingresa a la página principal.</li>
                    <li className="p-1">Sube tus datos para analizar en formato excel.</li>
                    <li className="p-1">Espera a que se generen las gráficas.</li>
                    <li className="p-1">Visualiza los resultados.</li>
                </ol>
            </div>
        </>
    )
}
import { AppHeader } from "@/components/app-header";
import { FileUpload } from "@/components/file-upload";

export default function Home() {
  return (
    <>
      <AppHeader title="Pagina principal" />
      <div className="p-8 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Sube tus datos para analizar
          </h1>
          <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
            Soporta archivos CSV y Excel. Simplemente arrastra y suelta para generar gráficas instantáneas.
          </p>
        </div>
        
        <FileUpload />
      </div>
    </>
  );
}

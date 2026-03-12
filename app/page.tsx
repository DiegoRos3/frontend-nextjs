import { AppHeader } from "@/components/app-header";

export default function Home() {
  return (
    <>
      <AppHeader title="Pagina principal" />
      <div className="p-4">
        <h1 className="text-3xl font-bold underline">Contenido Principal</h1>
      </div>
    </>
  );
}

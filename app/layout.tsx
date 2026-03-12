import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DataPapus",
  description: "Aplicacion para el analisis de datos de cvs que los despliega en graficas",
  icons: {
    icon: "/Icono.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en" className={cn("dark font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 px-4 border-b border-sidebar-border/50">
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="-ml-12" />
                  <div className="h-4 w-[1px] bg-sidebar-border mx-2" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Dashboard</span>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground mr-4">
                  <span>Home</span>
                  <span>/</span>
                  <span className="text-foreground">Dashboard</span>
                </div>
              </header>
              <main className="p-4">
                {children}
              </main>
            </SidebarInset>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}

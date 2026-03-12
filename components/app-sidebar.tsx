import Image from "next/image"
import { Home, BarChart2, BookText } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="flex flex-row items-center gap-3 p-4">
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                    <Image src="/Icono.svg" alt="Logo" width={50} height={50} />
                </div>
                <div className="flex flex-col">
                    <span className="truncate font-bold text-base">DataPapus</span>
                    <span className="truncate text-xs text-muted-foreground">Analizador de Datos</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip="Home">
                                <a href="/">
                                    <Home className="size-5" />
                                    <span>Pagina principal</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip="Graficas">
                                <a href="/graficas">
                                    <BarChart2 className="size-5" />
                                    <span>Graficas</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip="Instrucciones">
                                <a href="/instrucciones">
                                    <BookText className="size-5" />
                                    <span>Instrucciones</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
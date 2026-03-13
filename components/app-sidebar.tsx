import Image from "next/image"
import Link from "next/link"
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
    SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="flex flex-row items-center gap-3 p-4 transition-all group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:justify-center">
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg text-sidebar-primary-foreground group-data-[collapsible=icon]:hidden">
                    <Image src="/Icono.svg" alt="Logo" width={50} height={50} />
                </div>
                <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                    <span className="truncate font-bold text-base">DataPapus</span>
                    <span className="truncate text-xs text-muted-foreground">Analizador de Datos</span>
                </div>
                <SidebarTrigger className="ml-auto hidden md:flex group-data-[collapsible=icon]:ml-0" />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip="Home">
                                <Link href="/">
                                    <Home className="size-5" />
                                    <span>Pagina principal</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip="Graficas">
                                <Link href="/graficas">
                                    <BarChart2 className="size-5" />
                                    <span>Graficas</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip="Instrucciones">
                                <Link href="/instrucciones">
                                    <BookText className="size-5" />
                                    <span>Instrucciones</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
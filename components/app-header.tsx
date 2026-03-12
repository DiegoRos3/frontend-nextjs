import { SidebarTrigger } from "@/components/ui/sidebar"

interface AppHeaderProps {
    title: string
}

export function AppHeader({ title }: AppHeaderProps) {
    return (
        <header className="relative flex h-16 shrink-0 items-center px-4 border-b border-sidebar-border/50 bg-background/50 backdrop-blur-md sticky top-0 z-20">
            {/* Contenedor del trigger con prioridad de clic */}
            <div className="flex items-center justify-center min-w-8 relative z-50">
                <SidebarTrigger
                    className="
                        md:absolute md:-left-3.5 md:top-1/2 md:-translate-y-1/2 
                        h-8 w-8 rounded-md border border-sidebar-border 
                        bg-background shadow-md 
                        transition-all duration-200
                        hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
                        active:scale-95
                        pointer-events-auto
                        flex items-center justify-center
                    "
                />
            </div>

            <div className="flex items-center gap-2 md:ml-6">
                <span className="text-sm font-semibold tracking-tight">{title}</span>
            </div>
        </header>
    )
}

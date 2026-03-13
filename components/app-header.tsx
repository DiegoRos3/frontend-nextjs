import { SidebarTrigger } from "@/components/ui/sidebar"

interface AppHeaderProps {
    title: string
}

export function AppHeader({ title }: AppHeaderProps) {
    return (
        <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 px-4 border-b border-sidebar-border/50 bg-background/50 backdrop-blur-md">
            <SidebarTrigger className="md:hidden -ml-1" />
            <div className="flex items-center gap-2 ml-2">
                <span className="text-sm font-semibold tracking-tight">{title}</span>
            </div>
        </header>
    )
}

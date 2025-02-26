import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "./header";
import { AppSidebar } from "./app-sidebar";

export default function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-col w-full">
                <Header></Header>
                {children}
            </div>
        </SidebarProvider>
    );
}

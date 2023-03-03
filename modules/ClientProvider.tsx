'use client'
import { ContextProvider } from "@/store/context";
function ClientProvider({children}: { children: React.ReactNode }) {
    return (
        <ContextProvider>
            {children}
        </ContextProvider>
    )
}

export default ClientProvider;

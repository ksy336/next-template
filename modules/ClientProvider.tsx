'use client'
import React from 'react';
import AntdThemeProvider from "@/modules/AntdThemeProvider";
import {ThemeProvider} from "next-themes";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
function ClientProvider({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider enableSystem={false} attribute="class">
            <AntdThemeProvider>
                {children}
            </AntdThemeProvider>
        </ThemeProvider>
    )
}

export default ClientProvider;

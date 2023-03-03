import localFont from "next/font/local";
import '@/src/styles/global.scss';
import {Metadata} from "next";
import ClientProvider from "@/modules/ClientProvider";
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";


const gilroy = localFont({
    src: [
        {
            path: './../public/fonts/Gilroy-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: './../public/fonts/Gilroy-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: './../public/fonts/Gilroy-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: './../public/fonts/Gilroy-Medium.woff',
            weight: '500',
            style: 'normal',
        },
    ],
})

export const metadata: Metadata = {
    title: 'template',
    description: 'description template',
    icons: {
        icon: '/favicon.png'
    }
};
export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <MainLayout>

        </MainLayout>
            <ClientProvider>
                {children}
            </ClientProvider>
        </body>
        </html>
    )
}

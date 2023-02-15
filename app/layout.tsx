import localFont from "@next/font/local";
import '@/src/styles/global.scss';
import ClientProdider from "@/modules/ClientProdider";
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

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>
        <body>
        <main className={gilroy.className}>
            <ClientProdider>
                {children}
            </ClientProdider>
        </main>
        </body>
        </html>
    )
}

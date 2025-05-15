"use client"

import { usePathname } from "next/navigation"
import Footer from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Define as páginas onde queres esconder a navbar (exemplo "/")
  const hideNavbarPages = ["/"] 

  const showNavbar = !hideNavbarPages.includes(pathname)

  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen relative">
        {/* Main content com padding-bottom para não ficar atrás da navbar */}
        <main className="flex-grow pb-24">{children}</main>

        {/* Footer fica acima da navbar com z-index */}
        <Footer className="relative z-20" />

        {/* Navbar fixa no fundo, só aparece em páginas permitidas */}
        {showNavbar && (
          <div className="fixed bottom-0 left-0 w-full z-10">
            <BottomNavigation activeTab={pathname.replace("/", "") || "home"} />
          </div>
        )}
      </body>
    </html>
  )
}

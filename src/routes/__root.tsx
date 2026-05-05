import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/HeaderComponent'
import { Footer } from '@/components/FooterComponent'
import InfoAside from '@/components/InfoAsideComponent'

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <main className="py-20 grid gap-6 lg:grid-cols-[1fr_2fr] lg:px-20">
        <div className="w-full">
          <InfoAside />
        </div>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  ),
})
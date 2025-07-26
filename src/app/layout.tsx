import '@/styles/globals.css'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import { Header } from '@/components/HeaderComponent'
import { Footer } from '@/components/FooterComponent'
import { ThemeProvider } from '@/components/ThemeProvider'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Francisco Borges',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header>
            <Header />
          </header>

          <main>
            {children}
          </main>

          <Script defer src="https://umami.fborges.dev/script.js" data-website-id="7cfe6ec7-2f53-4c2c-94ef-6fd51374a8a3" />

          <Footer />
        </ThemeProvider>

      </body>
    </html>
  )
}
import '@/styles/globals.css'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import { Header } from '@/components/HeaderComponent'
import { Footer } from '@/components/FooterComponent'
import { ThemeProvider } from '@/components/ThemeProvider'
import Script from 'next/script'
import InfoAside from '@/components/InfoAsideComponent';

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

          {/* Anything after this can use peer-checked: */}
          <Header />

          <main className='py-20 grid gap-6 lg:grid-cols-[1fr_2fr] lg:px-20'>
            <div className='w-full'>
              {/* LEFT PART */}
              <InfoAside />
            </div>
            {children}
          </main>

          <Script defer src="https://umami.fborges.dev/script.js" data-website-id="7cfe6ec7-2f53-4c2c-94ef-6fd51374a8a3" />

          <Footer />
        </ThemeProvider>

      </body>
    </html>
  )
}
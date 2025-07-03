import type { Metadata } from 'next'
import { UniformContext } from "@uniformdev/canvas-next-rsc";
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <main className="main">
          <UniformContext>{children}</UniformContext>
        </main>
      </body>
    </html>
  )
}

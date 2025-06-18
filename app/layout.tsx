import type { Metadata } from 'next'
import './globals.css'
import { UniformContext } from "@uniformdev/canvas-next-rsc";

export const metadata: Metadata = {
  title: 'Modern Agency Website',
  description: 'Professional web solutions for your business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <UniformContext>{children}</UniformContext>
      </body>
    </html>
  )
}

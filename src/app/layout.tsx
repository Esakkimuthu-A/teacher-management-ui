import './globals.css'
import MainLayout from '@/components/MainLayout'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Teacher Management',
  description: 'Modern UI for teacher management',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}

import './globals.css'
import Analytics from '@/components/Analytics';

export const metadata = {
  title: 'Anthropoc',
  description: 'Domain for sale.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Analytics />
      <body>{children}</body>
    </html>
  )
}

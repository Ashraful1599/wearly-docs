import './globals.css'

export const metadata = {
  title: 'Wearly Theme Documentation',
  description: 'Professional documentation site for Shopify Wearly theme',
  icons: {
    icon: [
      { url: '/wearly-favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.webp', type: 'image/webp' }
    ],
    shortcut: ['/wearly-favicon.svg'],
    apple: '/wearly-favicon.svg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

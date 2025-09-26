import './globals.css'

export const metadata = {
  title: 'Wearly Theme Documentation',
  description: 'Professional documentation site for Shopify Wearly theme',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
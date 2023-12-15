import "./globals.css"

import { Sora } from "next/font/google"

export const metadata = {
  title: "Gregory.dev | Developpeur Web",
  description:
    "Développeur Web | Transformant des idées en expériences numériques exceptionnelles",
}

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={sora.variable}>
      <body className="bg-zinc-950 text-white-blue antialiased">
        {children}
      </body>
    </html>
  )
}

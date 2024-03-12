import "./globals.css"

import { Sora } from "next/font/google"

export const metadata = {
  title:
    "Développeur Web | Sites web sur-mesure et SEO à Marseille/Aix-en-Provence",
  description:
    "Créez votre site web unique et performant avec un développeur web passionné à Marseille/Aix-en-Provence. SEO, responsive design et + !",
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
      <GoogleAnalytics gaId="G-SXZXXLMC1Z" />
    </html>
  )
}

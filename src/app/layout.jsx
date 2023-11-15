/** @format */

// components
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import NavContextProvider from "./Context/NavContext"

import "./globals.css"
import { Alex_Brush, Montserrat } from "next/font/google"

const alexBrush = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-alexBrush",
})

const montSerrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montSerrat",
})

export const metadata = {
  title: "Musical App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <NavContextProvider>
      <html lang='en'>
        <body
          className={`${alexBrush.variable} ${montSerrat.variable} relative overflow-x-hidden`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </NavContextProvider>
  )
}
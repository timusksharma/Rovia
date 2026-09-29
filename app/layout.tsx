import "@fontsource-variable/manrope";
import "@fontsource-variable/playfair-display";
import "./globals.css";
import type { Metadata } from "next";
import { BookingProvider } from "./store";
import type { CSSProperties } from "react";

export const metadata:Metadata={title:{default:"Rovia — Go further. Travel better.",template:"%s | Rovia"},description:"A premium intercity travel experience for modern India."};
export default function RootLayout({children}:{children:React.ReactNode}){
  const prefix=process.env.GITHUB_ACTIONS==="true"?"/Rovia":"";
  return <html lang="en"><body style={{"--hero":`url('${prefix}/images/rovia-hero.png')`} as CSSProperties}><BookingProvider>{children}</BookingProvider></body></html>
}

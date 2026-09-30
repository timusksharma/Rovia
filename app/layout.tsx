import "@fontsource-variable/manrope";
import "./globals.css";
import type { Metadata } from "next";
import { OperationsProvider } from "./lib/store";

export const metadata: Metadata = {
  title: { default: "Rovia Logistics — Operations Control Tower", template: "%s | Rovia Logistics" },
  description: "A live logistics operations control tower for modern Indian supply chains.",
  openGraph: {
    title: "Rovia Logistics — Operations Control Tower",
    description: "A live logistics operations control tower for modern Indian supply chains.",
  },
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><OperationsProvider>{children}</OperationsProvider></body></html>
}

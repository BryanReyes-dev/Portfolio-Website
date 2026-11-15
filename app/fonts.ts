
import {
  Mali,
  M_PLUS_1,
  Space_Grotesk,
  Manrope,
  Geist_Mono,
} from "next/font/google";


export const mali = Mali({
  variable: "--font-mali",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  preload: false,
  
});

export const mPlus1 = M_PLUS_1({
  variable: "--font-m-plus-1",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
});

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  preload: true,
});

export const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  preload: false,
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});
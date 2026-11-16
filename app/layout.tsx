
import type { Metadata, Viewport } from "next";
import { FloatingNav } from "@/components/ui/floating-nav";
import {
  mali,
  mPlus1,
  spaceGrotesk,
  manrope,
  geistMono,
} from "./fonts";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Bryan Reyes | Developer Portfolio",
    template: "%s | Bryan Reyes",
  },
  description:
    "Portfolio of Bryan Reyes, showcasing software projects, web applications, and development work.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
    
      lang="en"
      data-theme="dark"
      data-font-body="m-plus-1"
      data-font-heading="space-grotesk"
      className={cn(mali.variable, mPlus1.variable, spaceGrotesk.variable, manrope.variable, geistMono.variable, "font-sans", inter.variable)}
    >
    
      <body className="min-h-dvh flex flex-col font-sans antialiased">
        <FloatingNav
          
          links={[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Skills", href: "#skills" },
          ]}
          cta={{ label: "Contact", href: "#contact" }}
          secondary={null}
        />
        {children}
      </body>
    </html>
  );
}
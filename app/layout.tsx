import type { Metadata, Viewport } from "next";
import { FloatingNav } from "@/components/ui/floating-nav";
import { SiteBackground } from "@/components/site-background";
import { ThemeEditor } from "@/components/theme/theme-editor";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import {
  geistMono,
  mali,
  manrope,
  mPlus1,
  spaceGrotesk,
} from "./fonts";
import "./globals.css";

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
      className={cn(
        mali.variable,
        mPlus1.variable,
        spaceGrotesk.variable,
        manrope.variable,
        geistMono.variable
      )}
    >
      <body className="relative isolate flex min-h-dvh flex-col bg-background font-sans text-foreground antialiased">
        <SiteBackground />

        <ThemeProvider>
          <div className="relative z-10 flex min-h-dvh flex-col">
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
          </div>
          <ThemeEditor />
        </ThemeProvider>
      </body>
    </html>
  );
}

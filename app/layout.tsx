
import type { Metadata, Viewport } from "next";
import {
  mali,
  mPlus1,
  spaceGrotesk,
  manrope,
  geistMono,
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
      className={`${mali.variable} ${mPlus1.variable} ${spaceGrotesk.variable} ${manrope.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

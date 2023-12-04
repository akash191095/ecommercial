import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";

import type { Metadata } from "next";
import TabbedNavigation from "@/components/TabbedNavigation";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  title: "Ecommercial",
  description: "Shop your heart out!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container">
        <ThemeRegistry options={{ key: "mui" }}>
          <TabbedNavigation />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}

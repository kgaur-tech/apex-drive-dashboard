import "./globals.css";
import "./overrides.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Apex Drive", description: "Precision productivity" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }

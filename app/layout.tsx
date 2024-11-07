import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}

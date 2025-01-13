import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Forcythe - Your Partner in Scalable Business Growth | Digital Solutions ",
  description: "Forcythe",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-dark-blue`}>
        {children}
      </body>
    </html>
  );
}

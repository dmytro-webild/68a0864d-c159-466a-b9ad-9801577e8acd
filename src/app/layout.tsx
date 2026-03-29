import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: '2K Restaurant | Authentic Ugandan Dining in Kampala',
  description: 'Experience authentic Halal local Ugandan cuisine in Kampala. Dine-in, group events, and private dining. Reserve your table at 2K Restaurant on Hoima Road.',
  keywords: ["restaurant Kampala, Ugandan food, Halal food Kampala, 2K Restaurant Hoima Road, local dining"],
  openGraph: {
    "title": "2K Restaurant | Authentic Ugandan Dining",
    "description": "Authentic Halal Ugandan cuisine on Hoima Road. Reserve your table today.",
    "siteName": "2K Restaurant"
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

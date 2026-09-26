import type { Metadata } from "next";
import {
  Space_Grotesk,
  Fraunces,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "@/styles/globals.css";
import { SITE_NAME, SITE_URL, organizationJsonLd } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/shared/Footer";
import CursorFollower from "@/components/layout/CursorFollower";
import ScrollProgress from "@/components/ui/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Discover What's Next`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "SHOPNEXA is a product discovery platform curating the most interesting, trending and useful products across tech, fashion, beauty, home, fitness and lifestyle.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <ScrollProgress />
        <CursorFollower />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

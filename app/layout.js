/**
 * RootLayout — loads the Programme typefaces (Hanken Grotesk, IBM Plex Mono),
 * the design-system stylesheet, applies a stored theme before first paint,
 * and wraps every route in the site header and footer.
 */
import { Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Header } from "./components/site/Header";
import { Footer } from "./components/site/Footer";
import { themeInitScript } from "./components/site/theme";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Dr David Kram AM | Conductor",
    template: "%s | Dr David Kram AM",
  },
  description:
    "Dr David Kram AM, conductor, artistic director and Senior Fellow at The University of Melbourne.",
};

export default function RootLayout({ children }) {
  return (
    // Font variables sit on <html> so the :root tokens in typography.css can resolve them.
    // suppressHydrationWarning: themeInitScript may set data-theme on <html> before React hydrates.
    <html lang="en" className={`${hanken.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1 pb-(--footer-trigger)">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

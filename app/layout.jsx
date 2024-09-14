import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "William De Azevedo",
  description: "Développeur Front-end Javascript React",
  openGraph: {
    title: "William De Azevedo - Portfolio",
    description:
      "Développeur Front-end Javascript React | Explorez mes projets et compétences",
    url: "https://williamdeazevedo.fr/",
    siteName: "Portfolio de William De Azevedo",
    images: [
      {
        url: "https://williamdeazevedo.fr/william-de-azevedo-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "William De Azevedo - Développeur Front-end",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "William De Azevedo - Développeur Front-end",
    description: "Explorez mon portfolio de développeur Javascript / React",
    images: ["https://williamdeazevedo.fr/og-image.jpg"],
    creator: "@Williamdazevedo",
  },
  other: {
    "linkedin:author": "https://www.linkedin.com/in/william-de-azevedo/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/data/company";
import { locations } from "@/data/locations";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: company.title,
    template: `%s — ${company.name}`,
  },
  description: company.description,
  keywords: [...company.keywords],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: company.url,
    title: company.title,
    description: company.description,
    siteName: company.name,
  },
  robots: { index: true, follow: true },
};

// "@type": "LocalBusiness" passt generisch. Für bessere Suchmaschinen-
// Ergebnisse ggf. durch einen spezifischeren schema.org-Typ ersetzen,
// z.B. "GeneralContractor" (Bau), "AutomotiveBusiness" (Kfz),
// "HVACBusiness" (Heizung/Sanitär), "Electrician", "RoofingContractor".
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.legalName,
  url: company.url,
  foundingDate: String(company.foundedYear),
  email: company.email,
  areaServed: company.region,
  location: locations.map((loc) => ({
    "@type": "Place",
    name: loc.city,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.street,
      postalCode: loc.zip,
      addressLocality: loc.place,
      addressCountry: "DE",
    },
  })),
  contactPoint: locations.map((loc) => ({
    "@type": "ContactPoint",
    telephone: loc.phone,
    email: loc.email,
    contactType: "customer service",
    areaServed: loc.city,
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-bg text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionConfig reducedMotion="user">
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}

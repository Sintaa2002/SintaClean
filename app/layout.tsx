import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Šinta Clean',
    template: '%s | Šinta Clean',
  },
  description: 'Nudimo dubinsko čišćenje tkaninastog namještaja, automobila, madraca. Održavamo stubišta zgrada i zajedničkih prostorija. Održavamo zelene površine, kosimo travu, te režemo živicu.',
  metadataBase: new URL('https://sintaclean.hr'),
  icons: {
    icon: [
      { url: '/photos/favicon.ico', sizes: '32x32' },
      { url: '/photos/sintaclean-ciscenje-zagreb.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/photos/sintaclean-ciscenje-zagreb-apple.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  keywords: [
    'dubinsko čišćenje Zagreb',
    'dubinsko ciscenje Zaprešić',
    'dubinsko ciscenje Samobor',
    'dubinsko ciscenje Zagrebacka zupanija',
    'dubinsko čišćenje',
    'dubinsko ciscenje',
    'čišćenje kauča',
    'dubinsko ciscenje kauc',
    'čišćenje tepiha',
    'dubinsko ciscenje tepiha',
    'čišćenje madraca',
    'dubinsko ciscenje madraca',
    'košnja trave',
    'kosnja trave',
    'održavanje ureda',
    'odrzavanje ureda',
    'čišćenje ureda',
    'ciscenje ureda',
    'čišćenje radijatora',
    'ciscenje radijatora',
    'održavanje stubišta',
    'odrzavanje stambenog stubista',
    'dubinsko čišćenje automobila',
    'ciscenje automobila',
    'mrlje',
    'Zagreb',
    'Zaprešić',
    'Samobor',
    'Zagrebačka županija',],
  openGraph: {
    title: 'Dubinsko čišćenje namještaja, održavanje ureda, stubišta zgrada u Zagreb, Zaprešić, Samobor, Zagrebačka županija',
    description: 'Nudimo dubinsko čišćenje tkaninastog namještaja, automobila, madraca. Održavamo stubišta zgrada i zajedničkih prostorija. Održavamo zelene površine, kosimo travu, te režemo živicu.',
    url: 'https://sintaclean.hr',
    siteName: 'Šinta Clean',
    images: [
      {
        url: 'https://sintaclean.hr/photos/sintaclean-ciscenje-zagreb.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'hr_HR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const schema = {
    "@context": "https://sintaclean.hr",
    "@type": "Servis za čišćenje",
    name: "Čišćenje Zagreb",
    description: "Profesionalne usluge dubinskog čišćenja i održavanja poslovnih prostora u Zagrebu i Zagrebačkoj županiji",
    areaServed: ["Zagreb", "Samobor", "Zaprešić", "Zagrebačka županija"],
    address: {
      "@type": "Kupljenska 79",
      addressLocality: "Zaprešić",
      addressCountry: "HR"
    },
    telephone: "+3850957407610"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


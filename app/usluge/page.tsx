import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import UslugeCards from "@/components/UslugeCards";
import {HeroUsluge} from "@/components/HeroSection";
import {UslugeCTA} from "@/components/CallToAction";
import {WorkFlow, WhyUs} from "@/components/WorkFlowCards";

export const metadata = {
  title: "Usluge profesionalnog čišćenja u Zagrebu i okolici",
  description: 'Nudimo profesionalno dubinsko čišćenje namještaja, tepiha i madraca, čišćenje automobila te održavanje ureda i stubišta zgrada. Također pružamo usluge košnje i uređenja zelenih površina. Brzi dolazak, povoljne cijene i vrhunska kvaliteta u Zagrebu, Zaprešiću i Samoboru.',
  keywords: [
    "čišćenje poslovnih prostora",
    "čišćenje autiju",
    "dubinsko čišćenje namještaja",
    "održavanje objekata",
    "košnja trave",
    "čišćenje stubišta",
  ],
  alternates: {
    canonical: "https://sintaclean.hr",
  },
  openGraph: {
    title: "Usluge dubinskog čišćenja Zagreb | Šinta Clean",
    description:
      "Profesionalne usluge dubinskog čišćenja namještaja i poslovnih prostora u Zagrebu.",
    url: "https://sintaclean.hr",
    siteName: "Šinta Clean",
    type: "website",
  }
};

export default function ServicesPage() {
  return (
    <main className="bg-gray-50 text-gray-800 overflow-x-hidden">

      <header className="absolute top-0 left-0 w-full z-20 p-4 pb-0">
        <div className="container mx-auto flex justify-between items-center">
          <NavBar iconColor="blue-500"/>
        </div>
      </header>

      <HeroUsluge />

      <UslugeCards />

      <WorkFlow/>

      <WhyUs />

      <UslugeCTA />

      <Footer />
    </main>
  )

}




import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {HeroPocetna} from "@/components/HeroSection";
import {TextBlock1, TextBlock2} from "@/components/TextBlockPocetna";
import {RezervacijaCiscenje, RezervacijaTrava, NajamAparata} from "@/components/CallToAction";
import Services from "@/components/ServicesCards";
import './globals.css';

export const metadata = {
  title: "Dubinsko čišćenje Zagreb i okolica",
  description: "Profesionalno dubinsko čišćenje namještaja i održavanje stubišta stambenih zgrada na području Zagreba i okolice (Zaprešić, Samobor). Brzo, temeljito i pouzdano čišćenje.",
  keywords: [
    "usluge čišćenja Zagreb",
    "usluge čišćenja Zaprešić",
    "usluge čišćenja Samobor",
    "profesionalno čišćenje",
    "održavanje objekata",
    "najam opreme za čišćenje",
  ],
  alternates: {
    canonical: "https://sintaclean.hr",
  },
  openGraph: {
    title: "Šinta Clean",
    description:
      "Profesionalne usluge dubinskog čišćenja namještaja i poslovnih prostora u Zagrebu.",
    url: "https://sintaclean.hr",
    siteName: "ŠINTA CLEAN",
    type: "website",
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      <header className="absolute top-0 left-0 w-full z-20 p-4 pb-0">
        <div className="container mx-auto flex justify-between items-center">
          <NavBar iconColor="blue-500"/>
        </div>
      </header>

      <HeroPocetna />

      <div className="mt-16 md:mr-10 md:ml-10">
        <Services />
      </div>

      <section id="onama" className="bg-white pb-10 md:py-10">
        <TextBlock1 />
      </section>

      <RezervacijaCiscenje />

      <section id="onama" className="bg-white pb-10 md:py-10">
        <TextBlock2 />
      </section>

      <RezervacijaTrava />

      <section id="onama" className="mt-0">
        <NajamAparata />
      </section>

      <Footer />

    </main>
  );
}

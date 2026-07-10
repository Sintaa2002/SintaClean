import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import MapEmbed from "@/components/Map";
import JourneySteps from "@/components/JourneySteps";
import ContactSideBar from "@/components/ContactSideBar";
import WhatsAppMsg from "@/components/WhatsAppMsg";

export const metadata = {
  title: "Kontakt",
  description: 'Kontaktiraj nas za rezervaciju termina profesionalnog čišćenja namještaja, tepiha i vozila u Zagrebu, Zaprešiću i Samoboru. Brz odgovor i povoljne cijene.',
  alternates: {
    canonical: "https://sintaclean.hr",
  },
  openGraph: {
    title: "Kontakt | Šinta Clean",
    description:
      "Kontaktiraj nas za rezervaciju termina profesionalnog čišćenja u Zagrebu i okolici. Brz odgovor i povoljne cijene.",
    url: "https://sintaclean.hr",
    siteName: "Šinta Clean",
    type: "website",
  }
};

export default function Kontakt() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

    <div className="flex flex-col items-center relative">

      <div className="absolute top-0 left-0 w-full h-[500px] inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 opacity-95 rounded-b-[4rem] md:rounded-b-[15rem] z-0"></div>
      {/*bg-gradient-to-r from-blue-500 to-blue-400 opacity-90*/}

      <header className="relative top-0 left-0 w-full z-20 p-4 pb-0">
        <div className="container mx-auto flex justify-between items-center">
          <NavBar bgColor="" iconColor="white"/>
        </div>
      </header>

      <WhatsAppMsg />

      <section className="w-full py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">

          <div className="flex flex-col w-full md:w-2/3 gap-3 md:gap-20">
            <ContactInfo />
            <ContactForm />
            <MapEmbed />
          </div>

          <div className="hidden md:flex md:flex-col w-1/3 justify-center mt-25 gap-20">
            <JourneySteps />
            <ContactSideBar/>
          </div>
        </div>

          {/*<div className="container mx-auto px-4 mt-8">
            <MapEmbed />
          </div>*/}
      </section>
    </div>

    <Footer />

    </main>
  );
}





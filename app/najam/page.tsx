import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppMsg from "@/components/WhatsAppMsg";
import {NajamAparati} from "@/components/NajamCards";
import NajamSlideIn from "@/components/NajamSlideIn";

export const metadata = {
  title: "Najam aparata za čišćenje Zagreb",
  description: 'Najam profesionalnih aparata za čišćenje u Zagrebu i okolici. Fleksibilan najam vrhunske opreme za učinkovito i temeljito čišćenje.',
  alternates: {
    canonical: "https://sintaclean.hr",
  },
  openGraph: {
    title: "Najam aparata za čišćenje Zagreb | Šinta Clean",
    description:
      "Najam profesionalnih aparata za čišćenje u Zagrebu i okolici. Fleksibilan najam vrhunske opreme za učinkovito i temeljito čišćenje.",
    url: "https://sintaclean.hr",
    siteName: "Šinta Clean",
    type: "website",
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      <div className="absolute top-0 left-0 w-full h-[500px] inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 opacity-95 rounded-b-[4rem] md:rounded-b-[15rem] z-0"></div>

      <header className="relative top-0 left-0 w-full z-20 p-4 pb-0">
        <div className="container mx-auto flex justify-between items-center">
          <NavBar bgColor="" iconColor="white"/>
        </div>
      </header>

      <WhatsAppMsg />

      <NajamSlideIn/>

      <NajamAparati/>

      <Footer />
    </main>
  );
}


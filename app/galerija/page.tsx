import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GalerijaRadovi from "@/components/GalerijaRadovi";
import GalerijaSlideIn from "@/components/GalerijaSlideIn";
import WhatsAppMsg from "@/components/WhatsAppMsg";

export const metadata = {
  title: "Galerija radova",
  description: 'Galerija naših radova čišćenja u Zagrebu i okolici. Pogledajte rezultate profesionalnog čišćenja vrhunskom opremom i uvjerite se u kvalitetu usluge.',
  alternates: {
    canonical: "https://sintaclean.hr",
  },
  openGraph: {
    title: "Galerija radova | Šinta Clean",
    description:
      "Prije i poslije rezultati profesionalnog čišćenja u Zagrebu i okolici. Pogledajte kvalitetu Šinta Clean tima kroz stvarne primjere.",
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

      <GalerijaSlideIn />

      <section className="relative mx-auto pt-4 md:pt-8 px-4">
        <div id="ponuda" className="mt-25 md:mt-15 pb-10">
            <GalerijaRadovi />
        </div>
      </section>

      <Footer />
    </main>
  );
}
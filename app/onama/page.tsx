import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AboutUsCTA } from "@/components/CallToAction";
import { AboutUs, Stats, NaseUsluge } from "@/components/AboutUs";

export const metadata = {
  title: "O nama - Dubinsko čišćenje i održavanje Zgareb",
  description: 'Šinta Clean nudi profesionalno dubinsko čišćenje i održavanje ureda u Zagrebu i okolici. Kvalitetna usluga, moderna oprema i rezultati čišćenja.',
  alternates: {
    canonical: "https://sintaclean.hr",
  },
  openGraph: {
    title: "O nama | Dubinsko čišćenje i održavanje - Sinta Clean Zagreb",
    description:
      "Sinta Clean pruža profesionalno dubinsko čišćenje i održavanje prostora u Zagrebu i okolici. Moderna oprema, pouzdana usluga i vrhunski rezultati.",
    url: "https://sintaclean.hr",
    siteName: "Šinta Clean",
    type: "website",
  }
};

export default function Onama() {
  return (
    <div className="relative bg-gray-50 text-gray-800 overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-[500px] inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 opacity-95 rounded-b-[4rem] md:rounded-b-[15rem] z-0"></div>

      <header className="relative top-0 left-0 w-full z-20 p-4 pb-0">
        <div className="container mx-auto flex justify-between items-center">
          <NavBar bgColor="" iconColor="white"/>
        </div>
      </header>

     <section className="relative z-10 pt-26 pb-48 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Profesionalna čistoća.
            <span className="block text-sky-300 font-light">
              Vidljiva razlika.
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-200">
            Vrhunska tehnologija, ekološka rješenja i profesionalni
            pristup za besprijekorno čist prostor.
          </p>
        </div>
      </section>

      <AboutUs />

      <Stats />

      <NaseUsluge />
      
      <AboutUsCTA />
      
      <Footer />
    </div>
  );
}
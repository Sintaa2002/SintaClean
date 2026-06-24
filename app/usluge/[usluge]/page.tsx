import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { services } from "@/components/Services";
import { notFound } from "next/navigation";
import Image from "next/image";
import {HeroPojedinacneUsluge} from "@/components/HeroSection";
import { PojedinacneCTA } from "@/components/CallToAction";
import type { Metadata } from "next";


export async function generateMetadata(
  { params }: { params: Promise<{ usluge: string }> }
): Promise<Metadata> {
  const { usluge } = await params;

  const service = services.find((s) => s.usluge === usluge);

  if (!service) {
    return {
      title: "Servis za čišćenje Zagreb, Zaprešić, Samobor",
    };
  }

  return {
    title: service.title,
    description: service.titleDesc,
  };
}



export default async function ServicePage({
  params,
}: {
  params: Promise<{ usluge: string }>;
}) {
  const { usluge } = await params;

  const service = services.find((s) => s.usluge === usluge);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white">
      <header className="absolute top-0 left-0 w-full z-20 p-4 pb-0">
        <div className="container mx-auto flex justify-between items-center">
          <NavBar iconColor="blue-500"/>
        </div>
      </header>

      <HeroPojedinacneUsluge urlImg={service.heroImg} urlImgMob={service.heroImgMob} title={service.title} titleDesc={service.titleDesc} />

    {/* FLOATING TRUST BAR */}
      <section className="relative -mt-10 z-20">

        <div className="container mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-xl border shadow-xl rounded-2xl py-6 px-8 grid md:grid-cols-3 text-center gap-6">

            <div>
              <p className="text-2xl font-bold text-gray-900">Brzi dolazak</p>
              <p className="text-sm text-gray-500">U dogovorenom terminu</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-500">Zadovoljstvo klijenata</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">5★</p>
              <p className="text-sm text-gray-500">Prosječna ocjena</p>
            </div>
          </div>
        </div>
      </section>


      {/* OPIS */}
      <section className="bg-gray-50 py-15">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-black font-bold mb-6">
              {service.subTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
          <Image src={service.image} alt={service.alt} fill className="object-cover object-center md:object-right"/>
        </div>
        </div>
      </section>

      {/* GALERIJA */}
      {service.gallery?.length > 0 && (

      <section className="container mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Naši radovi
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {service.gallery.map((img,index)=>(

            <Image key={index} src={img} alt="Galerija" width={500} height={400} className=" rounded-2xl object-cover h-80 hover:scale-105 transition"/>

          ))}
        </div>
      </section>
      )}

      {/* VIDEO */}
      {service.video && (

      <section className="container mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold mb-8">
          Pogledajte uslugu
        </h2>
        <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
          <iframe src={service.video} className="w-full h-full" allowFullScreen/>
        </div>
      </section>
       )}

      <PojedinacneCTA />

      <Footer />
    </main>
  );
}
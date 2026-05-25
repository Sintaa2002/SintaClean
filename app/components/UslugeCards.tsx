"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaCouch, FaLeaf, FaBroom} from "react-icons/fa";


type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ReactElement;
  badges: string[];
  gallery: string[];
  video: string;
};

const services: Service[] = [
  {
    title: "Dubinsko čišćenje namještaja, tepiha, madraca...",
    description:
      "Profesionalno dubinsko čišćenje kutnih garnitura, tepiha, madraca, auto-sjedala te svih tapiciranih površina uz korištenje visokokvalitetnih sredstava i moderne opreme. Uklanjamo tvrdokorne mrlje, neugodne mirise, grinje i alergene, vraćajući svježinu i higijenu vašem prostoru. Brza, pouzdana i detaljna usluga prilagođena vašim potrebama.",
    image: "/photos/dubinsko-ciscenje-namjestaja-zagreb-zapresic.webp",
    alt: "Dubinsko čišćenje tapeciranog namještaja Zagreb, Zaprešić, Samobor",
    icon: <FaCouch className="text-blue-500" />,
    badges: ["Eco-friendly", "Kvalitetno"],
    gallery: [],
    video: ""
  },
  {
    title: "Održavanje zgrada",
    description:
      "Održavanje stubišta, rukohvata, prozora i zajedničkih prostora uključuje čišćenje svih površina, uklanjanje prašine i mrlja te redovitu dezinfekciju kontaktnih mjesta. Naš tim osigurava uredne, higijenski i sigurne zajedničke prostore prilagođene potrebama stanara i korisnika.",
    image: "/photos/ciscenje-stambenog-stubista-zagreb.webp",
    alt: "Održavanje i čišćenje stambenih stubišta i prostorija Zagreb, Zaprešić, Samobor",
    icon: <FaLeaf className="text-green-500" />,
    badges: ["Periodično", "Profesionalno"],
    gallery: [],
    video: ""
  },
  {
    title: "Čišćenje i održavanje ureda",
    description:
      "Redovito čišćenje i održavanje uredskih prostora uključuje detaljno usisavanje i pranje podova, brisanje prašine s radnih površina, stolica, ormara i uredske opreme, čišćenje i dezinfekciju tipkovnica, telefona i drugih često korištenih predmeta, te higijensko održavanje kuhinjskih i sanitarnih prostora. Posebna pažnja posvećuje se dezinfekciji površina visokog kontakta kako bi se osigurala čista, uredna i sigurna radna sredina za sve zaposlenike.",
    image: "/photos/ciscenje-ureda-zapresic-zagreb.webp",
    alt: "Profesionalno čišćenje poslovnih ureda Zagreb, Zaprešić, Samobor",
    icon: <FaBroom className="text-yellow-500" />,
    badges: ["Periodično", "Profesionalno"],
    gallery: [],
    video: ""
  },
  {
    title: "Održavanje zelenih površina",
    description:
      "Redovito održavanje travnjaka i okućnice uključuje košnju trave, orezivanje grmlja i živica, te uklanjanje lišća i otpada s površina. Posebna pažnja posvećuje se njegovanju biljaka, pravovremenom zalijevanju i prihrani tla, kako bi travnjaci i vrtne površine ostali zdravi i uredni tijekom cijele godine. Cjelokupna briga o okućnici osigurava estetski ugodan izgled, urednost i funkcionalnost svih zelenih površina, prilagođeno sezonskim potrebama i klimatskim uvjetima.",
    image: "/photos/kosnja-trave-zagreb.webp",
    alt: "Održavanje zelenih površina, košnja trave, obrezivanje Zagreb, Zaprešić, Samobor",
    icon: <FaLeaf className="text-green-500" />,
    badges: ["Sezonsko", "Brzo"],
    gallery: [],
    video: ""
  },
  {
    title: "Dubinsko čišćenje automobila",
    description:
      "Profesionalno dubinsko pranje sjedala, tapeciranih površina i svih vrsta podnih obloga u vozilu, uključujući detaljno uklanjanje prašine, mrlja i nečistoća iz teško dostupnih dijelova. Ovaj tretman osigurava dugotrajan osjećaj čistoće, svježinu u unutrašnjosti automobila. Posebna pažnja posvećuje se očuvanju materijala, pravilnoj dezinfekciji i korištenju kvalitetnih sredstava koja čuvaju boje i teksture unutrašnjosti.",
    image: "/photos/dubinsko-ciscenje-automobila.webp",
    alt: "Dubinkso i kemijsko čišćenje automobila Zagreb, Zaprešić, Samobor",
    icon: <FaBroom className="text-yellow-500" />,
    badges: ["Temeljito", "Profesionalno"],
    gallery: [],
    video: ""
  },
      {
    title: "Čišćenje radijatora",
    description:
      "Profesionalno čišćenje radijatora uključuje uklanjanje prašine, prljavštine i neugodnih naslaga koje se nakupljaju između rešetki i unutar radijatora. Postupak se provodi pažljivo, često uz korištenje vruće pare i odgovarajućih sredstava, kako bi se osigurala učinkovita dezinfekcija i uklanjanje bakterija. Redovito čišćenje radijatora poboljšava cirkulaciju zraka, povećava učinkovitost grijanja i doprinosi zdravijem i higijenski čistom prostoru.",
    image: "/photos/ciscenje-dezinfekcija-klime-radijatora.webp",
    alt: "Čišćenje i dezinfekcija radijatora Zagreb, Zaprešić, Samobor",
    icon: <FaCouch className="text-blue-500" />,
    badges: ["Učinkovito", "Dezinfekcija"],
    gallery: [],
    video: ""
  }
];

export default function UslugeCards(){
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    useEffect(() => {
      document.body.classList.toggle("overflow-hidden", !!selectedService);

      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    }, [selectedService]);

    return(
      <>
        <section className="py-20 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Naše usluge
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  onClick={() => setSelectedService(service)}
                  className="cursor-pointer group relative rounded-[28px] bg-white overflow-hidden
                            shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]
                            hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.35)] active:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.35)]
                            transition-all duration-300 md:duration-500 hover:-translate-y-3 active:-translate-y-3"
                >
                    {/* IMAGE */}
                    <div className="relative h-56 md:h-72 overflow-hidden">
                    <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                        <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 animate-[shine_1.2s_ease]" />
                    </div>
                    </div>

                    {/* CONTENT */}
                    <div className="relative p-7 space-y-4">
                    {/* Title */}
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 text-2xl">
                        {service.icon}
                        </div>
                        <h2 className="text-lg font-semibold leading-snug">
                        {service.title}
                        </h2>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {service.description}
                    </p>

                    {/* BADGES */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {service.badges.map((badge, i) => (
                        <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full
                                    bg-gradient-to-r from-blue-50 to-indigo-50
                                    text-blue-700 font-medium"
                        >
                            {badge}
                        </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-6">
                      <span
                        className="inline-flex items-center gap-2 rounded-full
                                    bg-blue-600 px-5 py-2 text-sm font-semibold text-white
                                    shadow-lg shadow-blue-600/30
                                    group-hover:bg-blue-700 transition"
                        >
                        Zatraži ponudu
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                    </div>

                    {/* Gradient border */}
                    <span className="pointer-events-none absolute inset-0 rounded-[28px]
                                    ring-1 ring-black/5
                                    group-hover:ring-blue-500/40 transition" />
                </div>
                ))}
            </div>
            </div>
        </section>

        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center
                      bg-black/70 backdrop-blur-sm px-4 animate-fadeInUsluge"
            onClick={() => setSelectedService(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden
                        bg-white backdrop-blur-xl shadow-2xl
                        animate-[fadeIn_0.3s_ease]"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-50 bg-white/90 backdrop-blur-md
                          rounded-full w-10 h-10 flex items-center justify-center
                          shadow-lg hover:scale-110 transition"
              >
                ✕
              </button>

              {/* IMAGE */}
              <div className="hidden md:block relative h-80">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-8 space-y-5">
                <h3 className="text-2xl font-bold">
                  {selectedService.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {selectedService.description}
                </p>

                {/* BADGES */}
                <div className="flex gap-2 flex-wrap">
                  {selectedService.badges.map((b: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* GALLERY */}
                {selectedService.gallery && (
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {selectedService.gallery.map((img: string, i: number) => (
                      <div key={i} className="relative h-32 rounded-xl overflow-hidden">
                        <Image src={img} alt="" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                {/* VIDEO */}
                {selectedService.video && (
                  <video controls className="w-full rounded-xl mt-2">
                    <source src={selectedService.video} type="video/mp4" />
                  </video>
                )}

                <div className="group pt-6 flex justify-end">
                  <a href="/pages/kontakt"
                     className="inline-flex items-center gap-2 rounded-full
                                    bg-blue-600 px-5 py-2 text-sm font-semibold text-white
                                    shadow-lg shadow-blue-600/30
                                    hover:bg-blue-700 hover:-translate-y-1 transition duration-300
                                    active:scale-110 active:shadow-xl"
                  >
                    Zatraži ponudu
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}
      </>
    );
}


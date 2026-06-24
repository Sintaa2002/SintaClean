import Image from "next/image";
import { FaCouch, FaLeaf, FaBroom} from "react-icons/fa";
import {services} from "@/components/Services";

type Service = {
  usluge: string;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  heroImg: string;
  alt: string;
  icon: string;
  badges: string[];
  gallery: string[];
  video: string;
};

function getIcon(name: string) { // Funkcija sada očekuje točan tip
  switch (name) {
    case "couch": return <FaCouch className="text-blue-500" />;
    case "leaf": return <FaLeaf className="text-green-500"/>;
    case "broom": return <FaBroom className="text-yellow-500"/>;
  }
}

export default function UslugeCards(){
    
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
                  className="cursor-pointer group relative rounded-[28px] bg-white overflow-hidden
                            shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]
                            hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.35)] active:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.35)]
                            transition-all duration-300 md:duration-500 hover:-translate-y-3 active:-translate-y-3"
                >
                  <a href={`/usluge/${service.usluge}`} key={service.usluge}>
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
                        {getIcon(service.icon)}
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
                </a>
                </div>
                ))}
            </div>
            </div>
        </section>

        
      </>
    );
}


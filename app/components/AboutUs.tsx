import { CheckCircle, Sparkles, Leaf, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function AboutUs(){
return(      
    <section className="relative z-10 -mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 bg-white/80 backdrop-blur-2xl p-12 rounded-[2.5rem] shadow-2xl border border-white/40">

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <Sparkles className="text-sky-500" />
                Tko smo?
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-slate-700">
                Specijalizirani smo za profesionalno kemijsko i dubinsko
                čišćenje svih tkaninastih površina te održavanje zelenih
                prostora.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Koristimo ekološki prihvatljiva sredstva i napredne metode
                uklanjanja mrlja, alergena i neugodnih mirisa za dugotrajan
                rezultat.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/photos/cleaningTeam.jpg"
                alt="Profesionalno čišćenje"
                width={600}
                height={400}
                className="object-cover h-full w-full scale-105"
              />
            </div>
          </div>
        </div>
    </section>
    );
}

export function Stats(){
    return(      
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
            {[
                { icon: ShieldCheck, title: "100%", desc: "Pouzdanost" },
                { icon: Leaf, title: "Eco", desc: "Prihvatljiva sredstva" },
                { icon: Sparkles, title: "500+", desc: "Zadovoljnih klijenata" },
            ].map(({ icon: Icon, title, desc }) => (
                <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
                >
                <Icon className="mx-auto text-blue-600 mb-4" size={40} />
                <h3 className="text-3xl font-bold">{title}</h3>
                <p className="text-gray-600 mt-2">{desc}</p>
                </div>
            ))}
            </div>
        </section>
    );
}

export function NaseUsluge(){
    return(      
       <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-600">
            Naše usluge
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Kemijsko čišćenje",
              "Održavanje ureda",
              "Održavanje zgrada",
              "Zelene površine",
              "Najam aparata",
              "Pranje stakala",
            ].map((service) => (
              <div
                key={service}
                className="group flex items-center gap-4 bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <CheckCircle
                  className="text-blue-600 group-hover:scale-110 transition"
                  size={28}
                />
                <span className="text-lg font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
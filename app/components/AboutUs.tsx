import { CheckCircle, Sparkles, Leaf, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function AboutUs(){
return(      
    <section className="relative z-10 -mt-12 md:-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:mt-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 bg-white/80 backdrop-blur-2xl p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] shadow-2xl border border-white/40">

          {/* Tekstualni sadržaj */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 sm:mb-6 flex items-center gap-3">
              <Sparkles className="text-sky-500 shrink-0" />
              Tko smo mi?
            </h2>
            
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700">
              <p>
                Mi smo tim koji vjeruje da prostor u kojem boravite, bilo da je to vaš kauč, ured u kojem radite ili stubište zgrade kroz koje 
                prolazite svaki dan, zaslužuje vrhunsku čistoću. Specijalizirani smo za <strong>dubinsko čišćenje 
                namještaja i tkanina</strong> te redovito <strong>održavanje ureda i stambenih zgrada</strong>. Uz sve to, 
                rado ćemo se pobrinuti i za zelene kutke oko vašeg objekta.
              </p>
              <p>
                Znamo koliko je teško boriti se s tvrdokornim mrljama, alergenima ili pronaći pouzdanu agenciju 
                koja će stubište zgrade i urede održavati točno onako kako ste zamislili. Zato mi dolazimo s najmodernijim strojevima 
                i ekološkim sredstvima koja su potpuno sigurna za djecu i kućne ljubimce, ali neumoljiva prema prljavštini.
              </p>
              <p className="font-medium text-slate-900">
                Naš cilj nije samo površno očistiti prostor, već mu vratiti onu pravu, ugodnu svježinu koju možete 
                osjetiti čim zakoračite kroz vrata. Pedantni smo, držimo se dogovora i tu smo da vam olakšamo svakodnevicu na području Zagreba.
              </p>
            </div>
          </div>

          {/* Kontejner za sliku/logo */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl min-h-[250px] sm:min-h-[350px] md:min-h-[450px] aspect-video md:aspect-square">
            <Image
              src="/photos/sintaclean-ciscenje-zagreb.webp"
              alt="Profesionalno čišćenje Zagreb, Zaprešić, Samobor"
              fill
              className="object-cover rounded-2xl sm:rounded-3xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                { icon: ShieldCheck, title: "100%", desc: "Sigurnost i pouzdanost" },
                { icon: Leaf, title: "Eko", desc: "Sigurno za djecu i ljubimce" },
                { icon: Sparkles, title: "Bez mrlja", desc: "I dugotrajna svježina" },
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
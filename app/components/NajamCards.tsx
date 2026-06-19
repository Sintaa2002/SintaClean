import Link from "next/link";
import Image from "next/image";

  const aparati = [
    {
      id: 1,
      title: "Dubinski usisavač Sabrina",
      details: "za čišćenje tkaninastih površina(uz sredstvo za čišćenje), jedan od najsnažnijih aparata na tržištu - snaga 1500W, usisna snaga 300 mbar",
      image: "/photos/najam-aparata-dubinsko-zagreb.webp",
      alt: "Aparat za dubinsko čišćenje za najam u Zagrebu, Zaprešiću i Samoboru",
      prices: [
        { days: 1, price: 30 },
        { days: 2, price: 45 },
        { days: 3, price: 60 },
      ]
    },
        {
      id: 2,
      title: "Parni čistač - Karcher sc3 Deluxe",
      details: "čišćenje vrućom vodenom parom koja uklanja tvrdokornu prljavštinu, maksimalni tlak pare 3,5 bara, vrijeme zagrijavanja vode 30 sekundi",
      image: "/photos/najam-parni-cistac-karcher-zagreb.webp",
      alt: "Aparat za parno čišćenje za najam u Zagrebu, Zaprešiću i Samoboru",
      prices: [
        { days: 1, price: 25 },
        { days: 2, price: 35 },
        { days: 3, price: 50 },
      ],
    },
    {
      id: 3,
      title: "Šamponirka - Wirbel C43",
      details: "idealna je za temeljito pranje tvrdih podova, dubinsko šamponiranje tepiha i poliranje površina. Snažna, stabilna i jednostavna za rukovanje",
      image: "/photos/najam-samponirka-zagreb.webp",
      alt: "",
      prices: [
        { days: 1, price: 60 },
        { days: 2, price: 75 },
        { days: 3, price: 120 },
      ],
    },
    {
      id: 4,
      title: "Čistač podova - CleanFix Ra 431e",
      details: "industrijski uređaj za pranje podova, ima rotirajuću četku širine 43cm s pritiskom od oko 34 kg što pridonosi uklanjanju tvrdokorne prljavštine",
      image: "/photos/iznajmljivanje-aparata-za-pranje-podova-zagreb.webp",
      alt: "",
      prices: [
        { days: 1, price: 85 },
        { days: 2, price: 140 },
        { days: 3, price: 180 },
      ],
    },
    {
      id: 5,
      title: "Mokro/suhi usisavač",
      details: "profesionalni usisavač ukupne snage 2600W s inox rezervoarom od 62 litre, obavlja mokro usisavanje tekućina ili krupno/sitnog otpada",
      image: "/photos/najam-strojeva-ciscenje-zagreb.webp",
      alt: "",
      prices: [
        { days: 1, price: 35 },
        { days: 2, price: 55 },
        { days: 3, price: 75 },
      ],
    },
    {
      id: 6,
      title: "Aku bušilica",
      details: "savršen dodatak za detaljno dubinsko čišćenje doma ili automobila. Set uključuje bušilicu sa četkama različitih oblika koje olakšavaju ribanje tkanine, sjedala...",
      image: "/photos/iznajmljivanje-aparata-za-podove-zagreb.webp",
      alt: "",
      prices: [
        { days: 1, price: 10 },
        { days: 2, price: 15 },
        { days: 3, price: 20 },
      ],
    }
  ];



export function NajamAparati() {
  return (
    <section id="ponuda" className="py-25 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aparati.map((service) => (
              <Link
                key={service.id}
                href="/kontakt"
                className="group relative border border-blue-200 bg-white rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                          active:shadow-2xl active:-translate-y-2"
              >
                {/* IMAGE */}
                <div className="relative h-77 md:h-70 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-contain scale-105 transition-transform duration-500 group-hover:scale-125"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/20 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-lg">
                    <div className="text-2xl text-black">{service.title}</div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {service.details}
                  </p>

                  {/* BADGES */}
                  <div className="flex flex-wrap inline-flex gap-2 pt-2">
                    {service.prices.map((najam, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-blue-300 text-white font-medium"
                      >
                        {najam.days} {najam.days === 1 ? "dan" : "dana"} - {najam.price}€
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <span className="inline-flex items-center text-sm font-semibold bg-blue-600 rounded-full text-white p-2 group-hover:gap-2 transition-all
                    shadow-lg shadow-blue-600/30
                                    hover:bg-blue-700 hover:-translate-y-1 transition duration-300
                                    active:scale-110 active:shadow-xl">
                      Rezerviraj →
                    </span>
                  </div>
                </div>

                {/* Click overlay (UX boost) */}
                <span className="absolute inset-0 rounded-3xl ring-1 ring-black/5 group-hover:ring-blue-500/40 transition" />
              </Link>
            ))}
          </div>
        </div>
    </section>

  );
}
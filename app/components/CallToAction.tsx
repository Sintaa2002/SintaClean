import Image from 'next/image';
import { IoIosMail } from "react-icons/io";

export function RezervacijaCiscenje(){
   return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-center">
      <Image
        src="/photos/hand7.jpeg"
        alt="Profesionalno dubinsko čišćenje tapeciranog namještaja Zagreb, Zaprešić, Samobor"
        fill
        style={{ objectFit: "cover" }}
        className="hidden md:block object-cover"
        priority
      />

      <Image
        src="/photos/hand10.jpeg"
        alt="Profesionalno dubinsko čišćenje tapeciranog namještaja Zagreb, Zaprešić, Samobor"
        fill
        style={{ objectFit: "cover" }}
        className="block md:hidden object-cover"
        priority
      />

      {/* Tamni overlay za bolju čitljivost teksta */}
       <div className="absolute inset-0 bg-black/60"></div>

      {/* Sadržaj preko slike */}
      <div className="relative z-10 text-white px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Rezerviraj svoje čišćenje
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Brzo, pouzdano i kvalitetno čišćenje BEZ plaćanja unaprijed!
        </p>
        <a href="pages/kontakt" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition inline-flex items-center
                active:scale-105 active:shadow-xl">
          <IoIosMail size={28} className="mr-2" />
          Rezerviraj
        </a>
      </div>
    </section>
  );
}

export function RezervacijaTrava(){
   return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-center">
      <Image
        src="/photos/trava3.jpg"
        alt="Održavanje travnjaka i zelenih površina Zagreb, Zaprešić, Samobor"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Tamni overlay za bolju čitljivost teksta */}
       <div className="absolute inset-0 bg-black/60"></div>

      {/* Sadržaj preko slike */}
      <div className="relative z-10 text-white px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Rezerviraj održavanje travnjaka!
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Dogovori svoj termin i neka ti travnjak zablista.
        </p>
        <a href="pages/kontakt" className="bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition inline-flex items-center
                active:scale-105 active:shadow-xl">
          <IoIosMail size={28} className="mr-2" />
          Rezerviraj
        </a>
      </div>
    </section>
  );
}

export function NajamAparata(){
   return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-center">
       <Image
        src="/photos/najam4.jpeg"
        alt="Najam aparata za čišćenje Zagreb, Zaprešić, Samobor"
        fill
        style={{ objectFit: "cover" }}
        className="hidden md:block object-cover"
        priority
      />

      <Image
        src="/photos/najam4Mob.jpeg"
        alt="Najam aparata za čišćenje Zagreb, Zaprešić, Samobor"
        fill
        style={{ objectFit: "cover" }}
        className="block md:hidden object-cover"
        priority
      />

      {/* Tamni overlay za bolju čitljivost teksta */}
       <div className="absolute inset-0 bg-black/60"></div>

      {/* Sadržaj preko slike */}
      <div className="relative z-10 text-white px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Nudimo vam najam aparata za čišćenje!
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Izaberi što ti treba i baci se na čišćenje.
        </p>
        <a href="pages/najam" className="border-2 border-yellow-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition inline-flex items-center
                active:bg-yellow-600 transition-colors">
                  <IoIosMail size={28} className="mr-2" />
          Iznajmi
        </a>
      </div>
    </section>
  );
}

export function UslugeCTA(){
    return(
        <section className="relative py-28 text-center bg-gradient-to-br from-blue-600 to-blue-500 text-white overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/20 blur-3xl rounded-full" />

            <div className="relative max-w-3xl mx-auto px-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Spremni za čisti prostor?
                </h3>

                <p className="text-blue-100 mb-10 text-lg">
                Javite nam se i dogovorite termin već danas.
                </p>

                <a
                href="/pages/kontakt"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-xl hover:scale-105 transition
                  active:scale-105 active:shadow-xl"
                >
                Kontaktiraj nas →
                </a>
            </div>
        </section>
    );
}

export function AboutUsCTA(){
    return(
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 text-center">
        <h3 className="text-4xl font-bold mb-4">
          Spremni za savršeno čist prostor?
        </h3>
        <p className="text-lg mb-10 opacity-90">
          Javite nam se i dogovorite profesionalnu uslugu već danas.
        </p>
        <a
          href="/pages/kontakt"
          className="inline-block px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition"
        >
          Kontaktirajte nas
        </a>
      </section>
    );
}
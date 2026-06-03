import Image from 'next/image';

export function HeroPocetna() {
  return (
    <section className="relative w-full min-h-[80vh]">

      <Image
        src="/photos/ciscenje-zagreb-zapresic-samobor.webp"
        alt="Servis za čišćenje u Zagrebu, Zaprešiću i Samoboru"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
          ŠINTA CLEAN
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Čistoća počinje s nama
        </p>
        <a href="/usluge" className="bg-gradient-to-br from-blue-600 to-transparent active:from-transparent active:to-blue-500 hover:from-transparent hover:to-blue-600 transition-all duration-300 ease-in-out 
                                text-white font-semibold mt-10 py-3 px-8 rounded-lg shadow-md transform hover:-translate-y-1 hover:shadow-lg">
          Usluge
        </a>
      </div>

      {/*<div className="text-blue-800 absolute left-1/2 -translate-x-1/2 -bottom-21 md:-bottom-24 bg-white rounded-xl shadow-lg p-8 flex flex-col 
                      items-center justify-center text-center w-80 md:w-200 md:h-50 border-b-4 border-blue-600">
        <h3 className="text-xl font-semibold mb-4 text-center animate-bounce" style={{ animationDuration: '1s' }}>
          Kontaktirajte nas odmah i saznajte više!
        </h3>

        <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
          <IoIosMail size={30} className="text-white mr-2" />
          Pošaljite upit
        </button>
      </div>*/}
   <div className="absolute left-1/2 -translate-x-1/2 -bottom-25 md:-bottom-25 bg-gradient-to-br from-blue-50 to-white 
                    text-center rounded-2xl shadow-lg w-80 md:w-200 p-8 md:p-12 mt-10 max-w-3xl mx-auto">
       <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 " style={{ animationDuration: '1s' }}>
        Kontaktirajte nas odmah i saznajte više!
      </h2>
        <a href="/kontakt" className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition 
                transform hover:-translate-y-1 hover:shadow-lg active:shadow-xl">
          Kontaktirajte nas
        </a>
      <div className="absolute inset-0 -z-10 blur-2xl bg-gradient-to-r from-blue-300/20 via-purple-300/20 to-transparent rounded-2xl" />
    </div>

    </section>
  );
}

export function HeroUsluge(){
  return(
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/photos/sintacelan-usluge-zagreb-zapresic-samobor.webp"
          alt="Čišćenje Zagreb, Zaprešić i Samobor"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="hidden md:block object-cover"
          priority
          fetchPriority="high"
        />

        <Image
          src="/photos/sintacelan-usluge-zagreb-zapresic-samobor-mob.webp"
          alt="Čišćenje Zagreb, Zaprešić i Samobor"
          fill
          style={{ objectFit: "cover" }}
          className="block md:hidden object-cover"
          priority
        />

        {/* Light blur overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Decorative blur shapes 
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-200/50 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[380px] h-[380px] bg-blue-300/40 rounded-full blur-3xl" />*/}

        <div className="relative z-10 text-center text-white pt-26 max-w-3xl space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight animate-fadeIn">
            Profesionalne usluge čišćenja
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Pouzdano čišćenje i održavanje prostora uz kvalitetnu i brzu uslugu.
          </p>
          <a
            href="/kontakt"
            className="inline-block mt-6 px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:scale-105 transition hover:shadow-lg active:shadow-xl  
                      active:scale-105 active:shadow-xl"
          >
            Kontaktiraj nas
          </a>
        </div>
      </section>
  );
}
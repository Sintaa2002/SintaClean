import { VscWorkspaceTrusted} from "react-icons/vsc";

export function TextBlock1() {
  return (
    <section className="px-6 pt-16 pb-3 md:pb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Lijevi dio – hero card / feature box */}
        <div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight mb-6 text-left md:text-left">
            Profesionalan servis za dubinsko čišćenje u Zagrebu
          </h2>
          <p className="text-gray-700 text-lg md:text-xl text-left md:text-left">
            Tražite profesionalnu uslugu dubinskog čišćenja tapeciranog namještaja? 
            Prepustite to profesionalcima. Provjerite cijene i dostupnost.
            Specijalizirani smo za kemijsko i dubinsko čišćenje tapeciranog namještaja, sa
            garancijom kvalitete i brzine.
          </p>

          <div className="md:hidden flex flex-wrap mt-7">
            <a href="/pages/usluge" className="border border-blue-600 text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition
            active:bg-blue-600 active:text-white transition-colors">
              Pogledajte naše usluge
            </a>
          </div>
        </div>

        {/* Desni dio – tekst */}
        <div className="hidden md:flex justify-center md:justify-end">
          <div className="w-full max-w-sm h-80 bg-gradient-to-br from-blue-500 to-blue-400 rounded-3xl shadow-xl flex flex-col items-center justify-center text-white p-6 transform hover:scale-105 transition duration-300">
            <VscWorkspaceTrusted className="w-16 h-16 mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Profesionalno dubinsko čišćenje
            </h3>
            <p className="text-center text-sm md:text-base mb-4">
              Usluge dostupne na području Zagreba, Zaprešića, Samobora i šire.
            </p>
            <a href="/pages/kontakt" className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-xl hover:bg-blue-100 transition">
              Provjeri dostupnost
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TextBlock2() {
  return (
    <section className="px-6 pt-13 pb-3 md:pb-18">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Ikona + vizual */}
        <div className="hidden md:flex justify-center md:justify-start">
          <div className="w-full max-w-sm h-80 bg-gradient-to-br from-green-700 to-green-700 rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6">
            <VscWorkspaceTrusted className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-center">
              Pouzdana i profesionalna usluga
            </h3>
            <p className="text-sm text-center">
              Od održavanja zgrada do kemijskog čišćenja tapeciranog namještaja.
            </p>
          </div>
        </div>

        {/* Tekst */}
        <div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight mb-6">
            Održavanje objekata bez brige
          </h2>

          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Nudimo kompletno održavanje stambenih zgrada, ureda, poslovnih
            prostora i zelenih površina. Specijalizirani smo za profesionalno
            kemijsko i dubinsko čišćenje tapeciranog namještaja.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/pages/galerija" className="bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition
                      active:scale-105 active:shadow-xl">
              Pogledaj galeriju
            </a>
            <a href="/pages/kontakt" className="border border-green-600 text-green-700 font-semibold px-3 md:px-6 py-3 rounded-xl hover:bg-green-600 hover:text-white 
                    active:bg-green-600 active:text-white transition-colors">
              Kontaktiraj nas
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
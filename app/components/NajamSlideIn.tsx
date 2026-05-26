"use client";
export default function NajamSlideIn()
{
    return(
        <section className="relative mx-auto pt-4 md:pt-8 px-5">
            <div className="container mx-auto animate-slideIn">
                
                {/* HERO CARD */}
                <div className="relative max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl mt-3 md:mt-0 p-8 md:p-9 shadow-xl">
                
                <h1 className="text-2xl md:text-5xl font-extrabold text-white leading-tight">
                    Najam aparata Zagreb
                </h1>

                <p className="hidden md:block mt-0 text-white/80 text-lg mt-3">
                    Profesionalni aparati za čišćenje kratkoročni i dugoročni najam — brzo, pouzdano i bez komplikacija.
                    Kontaktirajte nas za najam više od 3 dana!
                </p>

                <p className="md:hidden mt-0 text-white/80 text-lg mt-2">
                    Najam profesionalnih aparata za čišćenje.
                    Kontaktirajte nas za više informacija!
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                    <button
                    className="px-6 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition"
                    onClick={() => {
                        const ponuda = document.getElementById('ponuda');
                        if (ponuda) {
                        ponuda.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    >
                    Pogledaj ponudu
                    </button>

                <a
                    href="/pages/kontakt"
                    className="inline-block px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition"
                >
                    Kontaktiraj nas
                </a>
                </div>
                </div>

            </div>
        </section>
    );
}
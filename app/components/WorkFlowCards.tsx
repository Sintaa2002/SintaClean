import { FaClock, FaCheckCircle, FaShieldAlt, FaLeaf } from "react-icons/fa";

const workflow = [
  { step: 1, title: "Analiza prostora", icon: <FaClock className="text-blue-500" />, desc: "Procjena potreba i odabir prave metode čišćenja." },
  { step: 2, title: "Čišćenje", icon: <FaCheckCircle className="text-green-500" />, desc: "Primjena ekoloških sredstava i profesionalnih tehnika." },
  { step: 3, title: "Kontrola kvalitete", icon: <FaShieldAlt className="text-yellow-500" />, desc: "Provjera rezultata i zadovoljstvo klijenta." },
];

export function WorkFlow(){
    return(
        <section className="relative pb-30 pt-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
  
            {/* Decorative blur */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/40 blur-3xl rounded-full" />

            <div className="relative max-w-6xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Kako radimo
                </h3>

                <div className="grid md:grid-cols-3 gap-10">
                {workflow.map((step) => (
                    <div
                    key={step.step}
                    className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                    {/* Step number */}
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold shadow-lg">
                        {step.step}
                    </span>

                    {/* Icon */}
                    <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                        {step.icon}
                    </div>

                    <h4 className="font-semibold text-xl mb-2">
                        {step.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        {step.desc}
                    </p>

                    {/* Hover ring */}
                    <span className="absolute inset-0 rounded-3xl ring-1 ring-black/5 group-hover:ring-blue-500/30 transition" />
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}

export function WhyUs(){
    return(
        <section className="pb-30 md:pt-10 bg-white">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Zašto odabrati nas
                </h3>

                <div className="grid md:grid-cols-3 gap-10">
                
                {[
                    {
                    icon: <FaLeaf className="text-green-500" />,
                    title: "Profesionalno čišćenje",
                    desc: "Pružamo temeljito čišćenje i dugotrajan osjećaj svježine u prostoru."
                    },
                    {
                    icon: <FaClock className="text-blue-500" />,
                    title: "Brza realizacija",
                    desc: "Poštujemo dogovorene rokove i brzo djelujemo."
                    },
                    {
                    icon: <FaShieldAlt className="text-yellow-500" />,
                    title: "Pouzdan tim",
                    desc: "Iskusan i profesionalan tim s fokusom na kvalitetu."
                    }
                ].map((item, idx) => (
                    <div
                    key={idx}
                    className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                    <div className="mx-auto mb-5 w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-2xl transition group-hover:scale-110">
                        {item.icon}
                    </div>

                    <h4 className="font-semibold text-xl mb-3">
                        {item.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
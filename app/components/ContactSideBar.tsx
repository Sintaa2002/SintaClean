import { Phone, Mail, Clock, CheckCircle, Sparkles } from "lucide-react";

export default function ContactSideBar() {
  return (
    <div className="space-y-8 ml-15">

      {/* ===== BRZI KONTAKT ===== */}
      <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-6">

        {/* subtle gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-amber-50 opacity-70 pointer-events-none" />

        <h3 className="relative text-2xl font-semibold mb-6 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-500" />
          Brzi kontakt
        </h3>

        <div className="relative space-y-5 text-gray-800">

          {/* PHONE */}
          <a
            href="tel:+385957407610"
            className="group flex items-center gap-4 rounded-2xl p-3 transition hover:bg-blue-50"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:scale-105 transition">
              <Phone />
            </div>
            <div>
              <p className="text-sm text-gray-500">Nazovi odmah</p>
              <p className="font-semibold text-lg">+385 95 740 7610</p>
            </div>
          </a>

          {/* MAIL */}
          <a
            href="mailto:sintic.usluge@gmail.com?subject=Upit%20s%20weba"
            className="group flex items-center gap-4 rounded-2xl p-3 transition hover:bg-amber-50"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600 group-hover:scale-105 transition">
              <Mail />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">sintic.usluge@gmail.com</p>
            </div>
          </a>

          {/* TIME */}
          <div className="flex items-center gap-4 rounded-2xl p-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <Clock />
            </div>
            <div>
              <p className="text-sm text-gray-500">Dostupnost</p>
              <p className="font-medium">Fleksibilno • po dogovoru</p>
            </div>
          </div>

        </div>
      </div>

      {/* ===== ZAŠTO BAŠ MI ===== */}
      <div className="rounded-3xl bg-white shadow-[0_15px_35px_rgba(0,0,0,0.10)] p-6">
        <h3 className="text-xl font-semibold mb-5">Zašto baš mi?</h3>

        <ul className="space-y-4">
          {[
            "Brzi dolazak",
            "Profesionalna oprema",
            "Pouzdana i kvalitetna usluga",
            "Zagreb i okolica",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
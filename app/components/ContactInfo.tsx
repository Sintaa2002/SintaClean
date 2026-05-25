"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="flex px-2 md:px-0 py-0 md:py-5 justify-center lg:justify-start z-1">
      <div className="bg-yellow-600 text-white rounded-xl p-10 shadow-lg max-w-3xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">

          {/* Lokacija */}
          <motion.div
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            
          >
          <div className="flex flex-col items-center space-y-2">
            <MapPin className="w-7 h-7 text-white" />
            <h3 className="hidden md:block  text-small md:text-lg font-semibold">Lokacija</h3>
            <p>Zagreb i okolica</p>
          </div>
          </motion.div>

          {/* Telefon */}
          <motion.div
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            
          >
          <div className="flex flex-col items-center space-y-2">
            <Phone className="w-7 h-7 text-white" />
            <h3 className="hidden md:block  text-small md:text-lg font-semibold">Telefon</h3>
            <p>+385 95 740 7610</p>
          </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            animate={{ opacity: 1, y: 0 }}
          >
          <div className="flex flex-col col-span-1 md:col-span-1 items-center space-y-2">
            <Mail className="w-7 h-7 text-white" />
            <h3 className="hidden md:block text-small md:text-lg font-semibold">Email</h3>
            <p>sintic.usluge@gmail.com</p>
          </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mt-6 flex flex-col gap-4 md:hidden">
              <a
                href="tel:+385957407610"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-white to-gray-100 p-[2px] shadow-lg"
              >
                <div className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-yellow-700 font-semibold text-lg transition group-hover:bg-gray-50 group-hover:scale-[1.02] active:scale-105">
                  <Mail className="w-6 h-6 text-yellow-600" />
                  Nazovi odmah
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          section div[motion-div] {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
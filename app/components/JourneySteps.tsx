"use client";
import { motion } from "framer-motion";
import React from "react";
import { ArrowDown, CalendarPlus2, BrushCleaning } from "lucide-react";
import { Phone } from "lucide-react";

export default function JourneySteps() {
  const steps = [
    { text: "Poziv", delay: 0 },
    { text: "Dogovor", delay: 0.3 },
    { text: "Čišćenje", delay: 0.6 },
  ];
  const icons = [<Phone />, <CalendarPlus2 />, <BrushCleaning />];
 return (
    <div className="relative flex flex-col items-center justify-start py-8 space-y-10">
      {/* Animirana linija u pozadini */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-400 via-orange-500 to-rose-400 opacity-75 z-0" />{/*from-cyan-400 via-blue-400 to-transparent opacity-60*/}

      {steps.map((step, index) => (
      <div key={index} className="relative z-10 flex flex-col items-center">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: step.delay, duration: 0.8, type: "spring" }}
          className="relative z-10 flex flex-col items-center"
          style={{ transform: "translateZ(0)" }} 
        >
          {/* Kartica */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex backdrop-blur-md bg-white/20 border border-white/30 shadow-xl rounded-2xl px-8 py-4 text-center text-black-300 font-semibold items-center justify-center gap-3 w-56 z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(20,184,166,0.2))",
                boxShadow:
                  "0 8px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
                transform: "translateZ(0)",
              }}
            >
              <span className="text-black-300">{step.text}</span>
               {React.cloneElement(icons[index], { className: "w-6 h-6 text-black", })}
            </motion.div>

          {/* Točkice i strelica */}
          {index < steps.length - 1 && (
            <div className="flex flex-col items-center mt-3 space-y-1 z-10">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: step.delay + 0.5,
                }}
                className="w-2 h-2 rounded-full bg-orange-500"
              />
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: step.delay + 0.8,
                }}
                className="w-2 h-2 rounded-full bg-orange-500"
              />
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: step.delay + 1.1,
                }}
                className="w-2 h-2 rounded-full bg-orange-500"
              />
              <ArrowDown className="text-orange-400 mt-1" size={26} />
            </div>
          )}

          {index === steps.length - 1 && (
            <div className="h-16 w-[2px] bg-gradient-to-b from-amber-400 via-orange-500 to-rose-400 opacity-75 z-0"></div>
          )}
           {/* Finish zastavica */}
            {index === steps.length - 1 && (
              <motion.div
                className="mt-6 text-3xl"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: step.delay + 1.4, ease: "easeInOut" }}
              >
                🏁
              </motion.div>
            )}
        </motion.div>
      </div>
      ))}
    </div>
  );
}
"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function BeforeAfterSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // %

   {/* useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
        setPosition((p) => (p < 80 ? p + 1 : p));
        i++;
        if (i > 50) clearInterval(interval);
        }, 10);
        return () => clearInterval(interval); // cleanup
    }, []);
    */}
    
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x =
      "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;

    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl aspect-square overflow-hidden rounded-xl shadow-xl select-none"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
      onTouchMove={handleMove}
    >

      <Image src={after} className="absolute inset-0 w-full h-full object-cover" alt={"Servis za čišćenje Zagreb, rezultati prije - poslije"} fill  />

      <Image
        src={before}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
        alt="Servis za čišćenje Zaprešić - Samobor, rezultati prije - poslije"
        fill 
        />

      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white z-10"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="absolute touch-pan-x select-none top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-ew-resize"
        style={{ left: `calc(${position}% - 20px)` }}
        onMouseDown={handleMove}
        onTouchStart={handleMove}
      >
        ⇆
      </div>

      {/* BEFORE label */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-black/60 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-lg">
          PRIJE
        </span>
      </div>

      {/* AFTER label */}
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-black/60 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-lg">
          POSLIJE
        </span>
      </div>

    </div>
  );
}

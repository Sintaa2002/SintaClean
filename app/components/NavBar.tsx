"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavBarProps {
  bgColor?: string; // opcionalno, default je transparent
  iconColor: string;
}


export default function NavBar({ bgColor = "bg-transparent", iconColor= "dfsd"}: NavBarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  console.log("PATHNAME:", pathname);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <nav className={`${bgColor} shadow-md w-full mx-auto text-white`}>
        <div className="flex justify-between items-center p-4 ">
              <Link  href="/"  aria-label="Logo Šinta Clean"><Image src="/photos/sintaclean-servis-za-ciscenje-zagreb.webp" alt="Šinta Clean - servis za čišćenje i održavanje, Zagreb, Zaprešić i Samobor" width={135} height={55}/></Link>

            <div className="hidden md:flex flex-row items-end text-sm text-gray-700 gap-15">
                <div className="flex items-center text-gray-700">
                    <MdOutlinePhoneInTalk size={40} className={`text-${iconColor} mr-3`} />

                    <div className="flex flex-col justify-center text-white">
                        <span className="text-sm font-medium">Nazovite nas</span>
                        <span className="text-base font-semibold text-xl">095 740 7610</span>
                    </div>
                </div>

                <div className="flex items-center text-gray-700">
                    <IoIosMail size={40} className={`text-${iconColor} mr-3`} />
                    <div className="flex flex-col justify-center text-white">
                        <span className="text-sm font-medium">Pošaljite mail</span>
                        <span className="text-base font-semibold text-l">info@sintaclean.hr</span>
                    </div>
                </div>
            </div>

            <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            >
            {open ? <X size={24} /> : <Menu size={24} />}
            </button>

      </div>
        <div className="hidden md:flex container mx-auto flex p-4 md:justify-center">
            <ul className="hidden md:flex gap-6 text-white font-bold text-xl">
            <li>
                <Link href="/" onClick={() => setOpen(false)} className={`${pathname === "/" ? "border-b-2 border-yellow-600" : ""}`}>Početna</Link>
            </li>
            <li>
                <Link href="/usluge" onClick={() => setOpen(false)} className={`${pathname === "/usluge" ? "border-b-2 border-yellow-600" : ""}`}>Usluge</Link>
            </li>
            <li>
                <Link href="/kontakt" onClick={() => setOpen(false)} className={`${pathname === "/kontakt" ? "border-b-2 border-yellow-600" : ""}`}>Kontakt</Link>
            </li>
            <li>
                <Link href="/najam" onClick={() => setOpen(false)} className={`${pathname === "/najam" ? "border-b-2 border-yellow-600" : ""}`}>Najam</Link>
            </li>
            <li>
                <Link href="/galerija" onClick={() => setOpen(false)} className={`${pathname === "/galerija" ? "border-b-2 border-yellow-600" : ""}`}>Galerija</Link>
            </li>
            <li>
                <Link href="/onama" onClick={() => setOpen(false)} className={`${pathname === "/onama" ? "border-b-2 border-yellow-600" : ""}`}>O nama</Link>
            </li>
            </ul>
        </div>

{/* Mobilni meni */}
{open && (
  <div
    className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-sm transition-opacity duration-300"
    onClick={() => setOpen(false)}
  >
    
    {/* MOBILE MENU DRAWER */}
    <div
      className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl p-6
                 flex flex-col gap-6
                 animate-slideIn"
      onClick={(e) => e.stopPropagation()}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        {/*<p className="text-2xl font-bold text-slate-900">
          ŠINTA CLEAN
        </p>*/}
    <div className="relative flex items-center justify-center">
      {/* veća, raspršena mrlja */}
      <div className="absolute w-40 h-16 bg-black/80 blur-2xl rounded-[50%_40%_60%_50%] rotate-12"></div>
      <div className="absolute w-36 h-12 bg-black/90 blur-2xl rounded-[60%_50%_50%_60%] -rotate-6"></div>

      {/* logo */}
      <Link href="/">
        <Image
          src="/photos/sintaclean-servis-za-ciscenje-zagreb.webp"
          alt="ŠINTA CLEAN- servis za čišćenje i održavanje, Zagreb, Zaprešić i Samobor"
          className="relative h-16 w-auto"
          width={135} height={55}
        />
      </Link >
    </div>

        <button
          className="text-3xl font-light text-slate-700 hover:text-black transition"
          onClick={() => setOpen(false)}
        >
          &times;
        </button>
      </div>

      {/* NAVIGATION */}
      <ul className="flex flex-col gap-5 mt-4">
        {[
          { name: "Početna", href: "/" },
          { name: "Usluge", href: "/usluge" },
          { name: "Kontakt", href: "/kontakt" },
          { name: "Najam", href: "/najam" },
          { name: "Galerija", href: "/galerija" },
          { name: "O nama", href: "/onama" },
        ].map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-black hover:text-sky-600 transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* FOOTER / CONTACT */}
      <div className="mt-auto border-t pt-4 text-sm text-slate-600 space-y-1">
        <p>
          Email:{" "}
          <Link 
            href="mailto:info@sintaclean.hr"
            className="hover:underline"
          >
            info@sintaclean.hr
          </Link>
        </p>
        <p>
          Tel:{" "}
          <Link 
            href="tel:+385957407610"
            className="hover:underline"
          >
            095 740 7610
          </Link>
        </p>
      </div>
    </div>
  </div>
)}

    </nav>
  );
}
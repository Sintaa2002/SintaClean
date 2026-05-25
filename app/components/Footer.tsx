import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";

export default function Kontakti() {
  return (
    <footer className="bg-gray-100 text-white py-10">
    <div className="text-black max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left items-start justify-items-center">

        {/* 🔹 1. Stupac — Izbornik */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Izbornik</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Početna</a></li>
            <li><a href="/pages/usluge" className="hover:text-blue-400 transition">Usluge</a></li>
            <li><a href="/pages/kontakt" className="hover:text-blue-400 transition">Kontakt</a></li>
            <li><a href="/pages/najam" className="hover:text-blue-400 transition">Najam</a></li>
            <li><a href="/pages/galerija" className="hover:text-blue-400 transition">Galerija</a></li>
            <li><a href="/pages/onama" className="hover:text-blue-400 transition">O nama</a></li>
          </ul>
        </div>

        {/* 🔹 2. Stupac — Društvene mreže */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-4 md:mr-10">Pratite nas</h3>
          <div className="flex space-x-6 text-2xl md:mr-10">
            <a href="https://www.instagram.com/sintaclean.hr" target="_blank" className="hover:text-pink-500 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* 🔹 3. Stupac — Kontakt */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Javi se</h3>
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex items-center space-x-3">
              <IoCall className="text-blue-400 text-2xl" />
              <span>+385 95 740 7610</span>
            </div>
            <div className="flex items-center space-x-3">
              <IoMail className="text-blue-400 text-2xl" />
              <span>sintic.usluge@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Donji copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} ŠINTA CLEAN Sva prava pridržana. | vl.Mateo Šintić
      </div>
    </footer>
  );
}
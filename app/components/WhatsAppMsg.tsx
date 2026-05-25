import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppMsg(){
    return(
     <a
        href="https://wa.me/385957407610"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-5 right-5 z-15 flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full hover:scale-105 active:scale-95 transition-all duration-200"
       >
        <FaWhatsapp size={26} /> Poruka
     </a>
    );
}
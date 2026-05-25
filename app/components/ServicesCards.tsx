"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaDroplet, FaHouseChimney } from "react-icons/fa6";
import { GiGrass } from "react-icons/gi";
import { LuCar } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { MdOutlineCleaningServices } from "react-icons/md";
import { Building } from "lucide-react";

export default function Usluge() {
  return (
    <section id="usluge" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold mb-2 mt-20 text-center">
        Usluge koje vam nudimo
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        className="pb-32"
        breakpoints={{
          0: { slidesPerView: 1 }, // mobiteli
          768: { slidesPerView: 2 }, // vodoravno
          1024: { slidesPerView: 3 }, // desktop
        }}
      >

        <SwiperSlide>
          <div className="p-6 bg-white rounded-xl shadow text-center mx-2 my-10">
            <div className="bg-blue-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <Building className="text-white w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold mb-2 p-2.5 md:p-6">Održavanje stambenih stubišta</h4>
            <p>
              Redovito čišćenje i održavanje stubišta u stambenim zgradama. Pranje podova, prozora i dezinfekcija rukohvata za uredne zajedničke prostore.
            </p>
            <a href="pages/kontakt" className=" inline-flex items-center bg-blue-700 text-white font-bold px-2 py-1 rounded-lg 
                                                hover:bg-blue-500 transition flex items-center mx-auto mt-4 active:scale-105 active:shadow-xl">
                <IoIosMail size={30} className="text-white mr-2" />
                   Javi nam se
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-6 bg-white rounded-xl shadow text-center mx-2 my-10">
            <div className="bg-blue-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <Building className="text-white w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold mb-2 p-6">Održavanje ureda</h4>
            <p>
              Profesionalno čišćenje i održavanje ureda, poslovnih prostora i zajedničkih prostorija. Osiguravamo čist, uredan i zdrav prostor za vas i vaše zaposlenike.
            </p>
            <a href="pages/kontakt" className="inline-flex items-center bg-blue-700 text-white font-bold px-2 py-1 rounded-lg 
            hover:bg-blue-500 transition flex items-center mx-auto mt-4 active:scale-105 active:shadow-xl">
                <IoIosMail size={30} className="text-white mr-2" />
                   Iznajmi
            </a>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="p-6 bg-white rounded-xl shadow text-center mx-2 my-10">
            <div className="bg-blue-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <FaDroplet className="text-white w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold mb-2 p-6">Dubinsko čišćenje</h4>
            <p>
              Profesionalno dubinsko čišćenje tapeciranog namještaja i tepiha. Uklanjamo tvrdokorne mrlje i neugodne mirise, vraćajući svježinu prostoru.
            </p>
            <a href="pages/kontakt" className="inline-flex items-center bg-blue-700 text-white font-bold px-2 py-1 rounded-lg 
            hover:bg-blue-500 transition flex items-center mx-auto mt-4 active:scale-105 active:shadow-xl">
                <IoIosMail size={30} className="text-white mr-2" />
                   Rezerviraj
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-6 bg-white rounded-xl shadow text-center mx-2 my-10">
            <div className="bg-green-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <GiGrass className="text-white w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold mb-2 p-6">Zelene površine</h4>
            <p>
              Košnja trave, podrezivanje živice i uklanjanje korova za zdrav i uredan travnjak i okoliš. Usluge dostupne u Zagrebu, Zaprešiću, Samoboru i šire.
            </p>
            <a href="pages/kontakt" className="inline-flex items-center bg-green-700 text-white font-bold px-2 py-1 rounded-lg 
            hover:bg-green-500 transition flex items-center mx-auto mt-4 active:scale-105 active:shadow-xl">
                <IoIosMail size={30} className="text-white mr-2" />
                   Rezerviraj
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-6 bg-white rounded-xl shadow text-center mx-2 my-10">
            <div className="bg-blue-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <LuCar className="text-white w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold mb-2 p-6">Čišćenje automobila</h4>
            <p>
              Temeljito dubinsko čišćenje unutrašnjosti i vanjskih dijelova vozila. Brzo i profesionalno, bez kompromisa na kvaliteti.
            </p>
            <a href="pages/kontakt" className="inline-flex items-center bg-blue-700 text-white font-bold px-2 py-1 rounded-lg 
            hover:bg-blue-500 transition flex items-center mx-auto mt-4 active:scale-105 active:shadow-xl">
                <IoIosMail size={30} className="text-white mr-2" />
                   Rezerviraj
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-6 bg-white rounded-xl shadow text-center mx-2 my-10">
            <div className="bg-blue-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <FaHouseChimney className="text-white w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold mb-2 p-6">Čišćenje radijatora</h4>
            <p>
              Čišćenje i dezinfekcija radijatora te teško dostupnih mjesta. Uklanjamo nečistoće pomoću vruće visokotlaćne pare za zdraviji zrak u vašem domu.
            </p>
            <a href="pages/kontakt" className="inline-flex items-center bg-blue-700 text-white font-bold px-2 py-1 rounded-lg 
            hover:bg-blue-500 transition flex items-center mx-auto mt-4 active:scale-105 active:shadow-xl">
                <IoIosMail size={30} className="text-white mr-2" />
                   Rezerviraj
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 bg-white rounded-xl shadow text-center mx-2 my-10">
            <div className="bg-green-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <MdOutlineCleaningServices className="text-white w-12 h-12" />
            </div>
            <h4 className="text-xl font-bold mb-2 p-6">Najam aparata</h4>
            <p>
              Profesionalni aparati za čišćenje dostupni za najam. Idealan izbor za one koji žele sami obaviti dubinsko čišćenje sa profesionalnom opremom.
            </p>
            <a href="pages/najam" className="inline-flex items-center bg-green-700 text-white font-bold px-2 py-1 rounded-lg 
            hover:bg-green-500 transition flex items-center mx-auto mt-4 active:scale-105 active:shadow-xl">
                <IoIosMail size={30} className="text-white mr-2" />
                   Iznajmi
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
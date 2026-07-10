import { aparati } from "@/components/Aparati";
import Image from "next/image";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import ContactSideBar from "@/components/ContactSideBar";
import Footer from "@/components/Footer";
import WhatsAppMsg from "@/components/WhatsAppMsg";
import { Mail } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ najam: string }> }
): Promise<Metadata> {
  const { najam } = await params;

  const aparat = aparati.find((s) => s.najam === najam);

  if (!aparat) {
    return {
      title: "Servis za čišćenje Zagreb, Zaprešić, Samobor",
    };
  }

  return {
    title: aparat.title,
    description: aparat.details,
  };
}


export default async function AparatPage({
  params,
}: {
  params: Promise<{ najam: string }>;
}) {


  const { najam } = await params;


  const aparat = aparati.find(
    (item) => item.najam === najam
  );


  if (!aparat) {
    notFound();
  }



  return (

    <main className="relative min-h-screen bg-slate-50 overflow-hidden">


      {/* HERO BACKGROUND */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[380px]
          md:h-[500px]
          bg-gradient-to-br
          from-blue-700
          via-blue-500
          to-cyan-400
          rounded-b-[80px]
          md:rounded-b-[220px]
        "
      />



      {/* NAVBAR */}
      <header className="relative z-20 pt-5">

        <div className="container mx-auto px-4">

          <NavBar iconColor="white" />

        </div>

      </header>

      {/* MAIN */}
      <section
        className="
          relative
          z-10
          container
          mx-auto
          px-4
          pt-12
          md:pt-20
          pb-20
        "
      >

        {/* PRODUCT CARD */}
        <div
          className="
            bg-white
            rounded-[40px]
            shadow-2xl
            overflow-hidden
            p-4
            sm:p-6
            md:p-12
          "
        >

          <div
            className="
              grid
              lg:grid-cols-2
              gap-8
              md:gap-14
              items-center
            "
          >

            {/* IMAGE AREA */}
            <div>


              <div
                className="
                  relative
                  rounded-[35px]
                  bg-gradient-to-br
                  from-gray-100
                  to-gray-200
                  p-5
                  md:p-8
                  shadow-inner
                "
              >

                <div
                  className="
                    absolute
                    top-5
                    left-5
                    bg-green-500
                    text-white
                    px-5
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                  "
                >
                  Dostupno za najam
                </div>

                <Image
                  src={aparat.image}
                  alt={aparat.alt}
                  width={700}
                  height={500}
                  className="
                    w-full
                    h-[280px]
                    sm:h-[350px]
                    md:h-[400px]
                    object-contain
                    hover:scale-110
                    transition
                    duration-700
                  "
                />


              </div>


              {/* BENEFITS */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-3
                  gap-4
                  mt-6
                "
              >

                <div
                  className="
                    bg-blue-50
                    rounded-2xl
                    p-4
                    text-center
                    text-gray-900
                  "
                >
                  <p className="text-2xl">⚡</p>
                  <p className="text-sm font-medium">
                    Snažan
                  </p>
                </div>


                <div
                  className="
                    bg-blue-50
                    rounded-2xl
                    p-4
                    text-center
                    text-gray-900
                  "
                >
                  <p className="text-2xl">⚙️</p>
                  <p className="text-sm font-medium text-gray-900">
                    Jednostavan
                  </p>
                </div>


                <div
                  className="
                    bg-blue-50
                    rounded-2xl
                    p-4
                    text-center
                  "
                >
                  <p className="text-2xl">✅</p>
                  <p className="text-sm font-medium text-gray-900">
                    Provjeren
                  </p>
                </div>


              </div>


            </div>

            {/* INFO */}
            <div>


              <h1
                className="
                  text-3xl
                  md:text-5xl
                  font-black
                  text-gray-900
                  leading-tight
                  mb-6
                "
              >
                {aparat.titleNajam}
              </h1>

              <p
                className="
                  text-base
                  md:text-lg
                  text-gray-600
                  leading-relaxed
                  mb-10
                "
              >
                {aparat.detailsNajam}
              </p>

              <h2
                className="
                  text-2xl
                  font-bold
                  mb-5
                  text-gray-900
                "
              >
                Cijena najma
              </h2>

              <div className="grid gap-4">

                {aparat.prices.map((item)=>(

                  <div
                    key={item.days}
                    className="
                      group
                      flex
                      justify-between
                      items-center
                      rounded-2xl
                      border
                      border-gray-200
                      px-4
                      py-4
                      md:px-6
                      md:py-5
                      hover:border-blue-500
                      hover:bg-blue-50
                      transition
                    "
                  >

                    <div>

                      <p className="font-semibold text-gray-800">
                        {item.days} {item.days === 1 ? "dan" : "dana"}
                      </p>


                      <p className="text-sm text-gray-500">
                        Fleksibilni najam
                      </p>

                    </div>

                    <div
                      className="
                        text-2xl
                        md:text-3xl
                        font-black
                        text-blue-600
                      "
                    >
                      {item.price}€
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/kontakt"
                className="
                  mt-8
                  w-full
                  block
                  text-center
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-bold
                  text-lg
                  py-5
                  rounded-2xl
                  shadow-xl
                  transition
                  hover:-translate-y-1
                "
              >
                Rezerviraj odmah
              </a>

            </div>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="mt-10">

          {/* MOBITEL */}
          <div
            className="
              md:hidden
              bg-white
              rounded-3xl
              shadow-xl
              border
              border-blue-100
              p-5
              text-center
            "
          >
            <h2
              className="
                text-xl
                font-black
                text-gray-900
                mb-2
              "
            >
              Želite rezervirati?
            </h2>


            <p
              className="
                text-gray-500
                text-sm
                mb-5
              "
            >
              Javite nam se i dogovorite termin.
            </p>

            <div className="grid grid-cols-1 gap-3">


            <div className="mt-6 flex flex-col gap-4 md:hidden">
              <a
                href="tel:+385957407610"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow to-orange-200 p-[2px] shadow-lg"
              >
                <div className="flex items-center justify-center gap-3 rounded-2xl bg-orange px-6 py-4 text-yellow-700 font-semibold text-lg transition group-hover:bg-gray-50 group-hover:scale-[1.02] active:scale-105">
                  <Mail className="w-6 h-6 text-yellow-600" />
                  Nazovi odmah
                </div>
              </a>
            </div>



                 <WhatsAppMsg />


            </div>


          </div>






          {/* DESKTOP */}
          <div
            className="
              hidden
              md:block
              rounded-[35px]
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              p-8
              md:p-12
              shadow-2xl
              text-white
            "
          >


            <div className="mb-8 text-center">

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                "
              >
                Trebate ovaj aparat?
              </h2>


              <p className="mt-3 text-blue-100">
                Javite nam se i rezervirajte termin u nekoliko minuta.
              </p>


            </div>




            <div
              className="
                bg-white
                rounded-3xl
                p-6
                text-gray-900
              "
            >

              <ContactSideBar />

            </div>


          </div>


        </div>



      </section>

    <Footer />
    </main>

  );
}
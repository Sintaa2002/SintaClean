import BeforeAfterSlider from "@/components/SliderImg";

export default function GalerijaRadovi() {
  return (
    <section className="py-8 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <BeforeAfterSlider
                before="/photos/dubinsko-ciscenje-tepiha-zapresic.webp"
                after="/photos/dubinsko-ciscenje-tepiha-zagreb.webp"
            />

            <BeforeAfterSlider
                before="/photos/dubinsko-ciscenje-autotepih-prije-poslije.webp"
                after="/photos/dubinsko-ciscenje-autotepiha-prije-poslije.webp"
            />

            <BeforeAfterSlider
                before="/photos/dubinsko-tepiha.webp"
                after="/photos/ciscenje-tepiha.webp"
            />

            <BeforeAfterSlider
                before="/photos/ciscenje-radijatora-zagreb.webp"
                after="/photos/ciscenje-radijatora-zapresic.webp"
            />

            <BeforeAfterSlider
                before="/photos/dubinsko-gepek-podloga-prije.webp"
                after="/photos/dubinsko-gepek-podloga-poslije.webp"
            />

            <BeforeAfterSlider
                before="/photos/dubinsko-ciscenje-autosjedala-prije.webp"
                after="/photos/dubinsko-ciscenje-autosjedala-poslije.webp"
            />

            <BeforeAfterSlider
                before="/photos/ciscenje-fuga-samobor.webp"
                after="/photos/ciscenje-fuga-zagreb.webp"
            />
            </div>
        </div>
    </section>
  );
}
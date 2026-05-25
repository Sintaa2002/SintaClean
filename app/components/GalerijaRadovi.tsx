import BeforeAfterSlider from "@/components/SliderImg";

export default function GalerijaRadovi() {
  return (
    <section className="py-8 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BeforeAfterSlider
                before="/photos/audi22.jpeg"
                after="/photos/audi11.jpeg"
            />

            <BeforeAfterSlider
                before="/photos/tepisson.jpeg"
                after="/photos/tepison22.jpeg"
            />

            <BeforeAfterSlider
                before="/photos/gepek1.jpeg"
                after="/photos/gepek2.jpeg"
            />

            <BeforeAfterSlider
                before="/photos/rad2.jpeg"
                after="/photos/rad1.jpeg"
            />

            <BeforeAfterSlider
                before="/photos/fuga1.jpeg"
                after="/photos/fuga2.jpeg"
            />

            <BeforeAfterSlider
                before="/photos/clio.jpeg"
                after="/photos/clioo.jpeg"
            />
            </div>
        </div>
    </section>
  );
}
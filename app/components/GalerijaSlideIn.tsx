
export default function GalerijaSlideIn(){
    return(
        <div className="relative container mx-auto px-5 pt-16 md:pt-28 z-10 animate-slideIn">
              <div className="max-w-3xl">
                
                <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-white/90 bg-white/10 backdrop-blur rounded-full">
                  Prije & Poslije
                </span>
        
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                  Galerija radova
                </h1>
        
                <p className="mt-4 text-white/80 text-lg max-w-xl">
                  Pogledajte stvarne rezultate našeg profesionalnog čišćenja.
                </p>
        
                <div className="mt-6 w-54 h-1 bg-white/60 rounded-full"></div>
              </div>
        </div>
    );
}
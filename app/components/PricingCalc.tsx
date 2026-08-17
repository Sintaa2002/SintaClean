"use client";

import { useState } from "react";

type PriceOption = {
  days: number;
  price: number;
};

type DodatneOpcije = {
  opcija: string;
  price: number;
};

interface PricingCalculatorProps {
  prices: PriceOption[];
  aparatSlug: string;
  dodatneOpcije?: DodatneOpcije[];
}

export default function PricingCalculator({ prices, aparatSlug, dodatneOpcije = [] }: PricingCalculatorProps) {
  // Stanje za odabranu opciju najma (po defaultu prvi paket)
  const [selectedPrice, setSelectedPrice] = useState(prices?.[0]?.price || 0);
  const [selectedDays, setSelectedDays] = useState(prices?.[0]?.days || 0);

  // Stanja za dodatne opcije
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

   // Dodaj / makni dodatnu opciju
  const toggleOption = (opcija: string) => {
    setSelectedOptions((prev) =>
      prev.includes(opcija)
        ? prev.filter((item) => item !== opcija)
        : [...prev, opcija]
    );
  };

  // Izračun cijene dodatnih opcija
  const additionalPrice = dodatneOpcije
    .filter((item) => selectedOptions.includes(item.opcija))
    .reduce((total, item) => total + item.price, 0);

  // Izračun ukupne cijene
  const totalPrice = selectedPrice + additionalPrice;

  //recenica za kontakt formu
  const formaTekst = `Rezervacija ${selectedDays} ${
    selectedDays === 1 ? "dan" : "dana"
  } ${aparatSlug}${
    selectedOptions.length > 0
      ? ` sa: ${selectedOptions.join(", ")}.`
      : ""
  }
Cijena: ${totalPrice}€
Dodajte svoj tekst ovdje:`;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5 text-gray-900">
        Cijena najma
        <p className="text-xs text-gray-500">
          Samostalno preuzimanje u Zaprešiću
        </p>
        <p className="text-xs text-gray-500">
          Besplatna dostava za Zaprešić
        </p>
      </h2>

      <div className="grid gap-4">
        {prices.map((item) => {
          const isSelected = selectedPrice === item.price;
          return (
            <div
              key={item.days}
              onClick={() => {setSelectedPrice(item.price); setSelectedDays(item.days);} }
              className={`group flex justify-between items-center rounded-2xl border px-4 py-4 md:px-6 md:py-5 cursor-pointer transition ${
                isSelected
                  ? "border-blue-500 bg-blue-50 shadow-sm"
                  : "border-gray-200 hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="rental_duration"
                  checked={isSelected}
                  onChange={() => setSelectedPrice(item.price)}
                  className="w-4 h-4 text-blue-600 accent-blue-600 cursor-pointer"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {item.days} {item.days === 1 ? "dan" : "dana"}
                  </p>
                  <p className="text-sm text-gray-500">Fleksibilni najam</p>
                </div>
              </div>

              <div className="text-2xl md:text-3xl font-black text-blue-600">
                {item.price}€
              </div>
            </div>
          );
        })}
      </div>

      {/* DODATNE OPCIJE (CHECKBOXOVI) */}
      {dodatneOpcije.length > 0 && (
        <div className="mt-6 border-t border-gray-100 pt-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 select-none">
            Dodatne opcije:
          </h3>

          <div className="space-y-3 select-none">
            {dodatneOpcije.map((item) => {
              const isSelected = selectedOptions.includes(item.opcija);

              return (
                <label
                  key={item.opcija}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition ${
                    isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:bg-slate-50 hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleOption(item.opcija)}
                      className="w-5 h-5 rounded text-blue-600 accent-blue-600 cursor-pointer"
                    />

                    <span className="font-medium text-gray-800 text-sm md:text-base">
                      {item.opcija}
                    </span>
                  </div>

                  <span className="font-bold text-gray-900">
                    +{item.price}€
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* ZBROJ I UKUPNA CIJENA */}
      <div className="mt-8 p-5 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Ukupno za platiti
          </p>
          <p className="text-xs text-gray-500">
            Najam + odabrane dodatne opcije
          </p>
        </div>
        <div className="text-3xl md:text-4xl font-black text-blue-700">
          {totalPrice}€
        </div>
      </div>

      {/* REZERVACIJA GUMB */}
      <a
        href={`/kontakt?tekst=${encodeURIComponent(formaTekst)}`}
        className="mt-8 w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-5 rounded-2xl shadow-xl transition hover:-translate-y-1"
      >
        Rezerviraj odmah ({totalPrice}€)
      </a>
    </div>
  );
}
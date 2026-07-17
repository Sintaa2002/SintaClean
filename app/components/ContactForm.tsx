"use client";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

      useEffect(() => {
        if (submitted) {
          const timer = setTimeout(() => {
            setSubmitted(false);
          }, 10000);

          return () => clearTimeout(timer);
        }
      }, [submitted]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Greška pri slanju");
      }

      setSubmitted(true);
      setFormData({ fullName: "", phone: "", email: "", message: "",  date: "" });
    } catch (error) {
      console.error(error);
      alert("Došlo je do greške. Pokušajte ponovo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl p-3 mb-8 md:mb-0 md:p-0 pt-17 md:pt-10 z-1">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Kontaktirajte nas</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent"
      >
        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">
            Ime i prezime
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/30 backdrop-blur-md"
            placeholder="Vaše ime i prezime"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">
            Telefon
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/20 backdrop-blur-sm"
            placeholder="Vaš broj telefona"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-lg font-medium mb-1 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/20 backdrop-blur-sm"
            placeholder="Vaš email"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-lg font-medium mb-1 text-gray-700">Poruka</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/20 backdrop-blur-sm"
            placeholder="Kako vam možemo pomoći?"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 rounded transition-colors active:bg-blue-500 
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-400 hover:bg-blue-500 active:bg-blue-500 text-white"
            }`}
          >
            {loading && (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {loading ? "Šaljem..." : "Pošalji"}
          </button>

      {submitted && (
        <div className="absolute mb-4 p-3 bg-green-100 text-green-800 rounded">
          Vaša poruka je uspješno poslana!
        </div>
      )}
        </div>
      </form>
    </div>
  );
}
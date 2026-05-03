"use client";

import { useState } from "react";

const serviceOptions = [
  "Reforma Integral",
  "Reforma de Cocina",
  "Reforma de Baño",
  "Pintura y Acabados",
  "Albañilería",
  "Electricidad",
  "Fontanería",
  "Construcción Obra Nueva",
  "Otro",
];

export default function PresupuestoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    descripcion: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, connect to an email API (e.g. Resend, Formspree)
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-[#C0522A] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-orange-200 uppercase tracking-widest text-sm mb-3">Sin compromiso</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
            Pide tu Presupuesto Gratis
          </h1>
          <p className="text-orange-100 mt-4 text-lg max-w-2xl mx-auto">
            Rellena el formulario y nos pondremos en contacto contigo en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F9F5F0]">
        <div className="max-w-3xl mx-auto px-4">
          {submitted ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
              <div className="text-6xl mb-6">✅</div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                ¡Solicitud recibida!
              </h2>
              <p className="text-gray-600 mb-6">
                Gracias por contactar con Reformas Costa Granada. Nos pondremos en contacto contigo
                en menos de 24 horas para hablar de tu proyecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:641638707" className="btn-primary">
                  📞 Llamar ahora
                </a>
                <a
                  href="https://wa.me/34641638707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C0522A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="Tu número de teléfono"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C0522A] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C0522A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de servicio *
                  </label>
                  <select
                    name="servicio"
                    required
                    value={form.servicio}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C0522A] transition-colors bg-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Descripción del proyecto
                  </label>
                  <textarea
                    name="descripcion"
                    value={form.descripcion}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Cuéntanos qué necesitas: tamaño aproximado, materiales, plazos..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C0522A] transition-colors resize-none"
                  />
                </div>

                <p className="text-xs text-gray-400">
                  Al enviar este formulario aceptas nuestra{" "}
                  <a href="/privacidad" className="underline text-[#C0522A]">
                    Política de Privacidad
                  </a>
                  .
                </p>

                <button
                  type="submit"
                  className="w-full btn-primary text-center text-base py-4"
                >
                  Enviar Solicitud de Presupuesto
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <p className="text-gray-500 text-sm mb-4">¿Prefieres llamarnos directamente?</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:641638707" className="text-[#C0522A] font-semibold hover:underline">
                    📞 641 638 707
                  </a>
                  <span className="hidden sm:block text-gray-300">|</span>
                  <a href="tel:664385794" className="text-[#C0522A] font-semibold hover:underline">
                    📞 664 385 794
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

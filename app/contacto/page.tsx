import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Reformas Costa Granada - Motril",
  description:
    "Contacta con Reformas Costa Granada. Teléfonos, email y dirección en Motril, Granada.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#C0522A] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-orange-200 uppercase tracking-widest text-sm mb-3">Estamos aquí</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
            Contacto
          </h1>
          <p className="text-orange-100 mt-4 text-lg max-w-2xl mx-auto">
            Llámanos, escríbenos o visítanos. Estaremos encantados de atenderte.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-montserrat)" }}>
              Información de Contacto
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-semibold mb-1">Dirección</h3>
                  <p className="text-gray-600">Motril, Granada, España</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <h3 className="font-semibold mb-1">Teléfonos</h3>
                  <a href="tel:641638707" className="block text-[#C0522A] hover:underline font-medium">
                    641 638 707
                  </a>
                  <a href="tel:664385794" className="block text-[#C0522A] hover:underline font-medium">
                    664 385 794
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">✉️</span>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:costagranada86@gmail.com"
                    className="text-[#C0522A] hover:underline font-medium"
                  >
                    costagranada86@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🕐</span>
                <div>
                  <h3 className="font-semibold mb-1">Horario</h3>
                  <p className="text-gray-600">Lunes – Viernes: 8:00 – 20:00</p>
                  <p className="text-gray-600">Sábado: 9:00 – 14:00</p>
                </div>
              </div>
            </div>

            {/* WhatsApp & Call buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/34641638707"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-md hover:bg-green-600 transition-colors text-center"
              >
                💬 Escribir por WhatsApp
              </a>
              <a
                href="tel:641638707"
                className="btn-primary text-center"
              >
                📞 Llamar ahora
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-md h-96 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25484.054396063694!2d-3.544177!3d36.743699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd722e3b21a8a4e3%3A0x400b32cb88d9e80!2sMotril%2C+Granada!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Reformas Costa Granada - Motril"
            />
          </div>
        </div>
      </section>
    </>
  );
}

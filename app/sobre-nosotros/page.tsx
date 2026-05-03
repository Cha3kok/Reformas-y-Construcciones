import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Reformas Costa Granada - Motril",
  description:
    "Conoce Reformas Costa Granada, tu empresa de confianza para reformas y construcciones en Motril, Granada. Más de 15 años de experiencia.",
};

const values = [
  { icon: "🤝", title: "Confianza", desc: "Trabajamos con transparencia total. El cliente siempre sabe en qué fase está su obra." },
  { icon: "⭐", title: "Calidad", desc: "Solo usamos materiales de primera calidad y contratamos a los mejores profesionales." },
  { icon: "⏱️", title: "Puntualidad", desc: "Cumplimos los plazos acordados. Tu tiempo es tan valioso como el nuestro." },
  { icon: "💬", title: "Comunicación", desc: "Atendemos cualquier duda o consulta durante y después de la obra." },
];

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#C0522A] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-orange-200 uppercase tracking-widest text-sm mb-3">Quiénes somos</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
            Sobre Nosotros
          </h1>
          <p className="text-orange-100 mt-4 text-lg max-w-2xl mx-auto">
            Empresa familiar con más de 15 años de experiencia en reformas y construcciones en Motril, Granada.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
              Nuestra Historia
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Reformas Costa Granada nació con un objetivo claro: ofrecer a los vecinos de Motril y Granada
              un servicio de reformas y construcciones de máxima calidad, con la cercanía y el trato
              personal de una empresa familiar.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Con más de 15 años de experiencia en el sector, hemos realizado cientos de proyectos
              en Motril y la provincia de Granada, desde pequeñas reformas de baño hasta construcciones
              completas de obra nueva.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nuestro equipo está formado por profesionales especializados en cada área: albañilería,
              fontanería, electricidad, pintura y carpintería. Coordinamos todos los gremios necesarios
              para que el resultado sea perfecto.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Equipo de Reformas Costa Granada"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-16 bg-[#C0522A] text-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "15+", label: "Años de experiencia" },
            { num: "500+", label: "Proyectos realizados" },
            { num: "100%", label: "Clientes satisfechos" },
            { num: "0€", label: "Presupuesto gratis" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                {s.num}
              </div>
              <div className="text-orange-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F9F5F0]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title" style={{ fontFamily: "var(--font-montserrat)" }}>
            Nuestros Valores
          </h2>
          <p className="section-subtitle">Lo que nos diferencia de otras empresas de reformas en Motril</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="text-gray-600 mb-8">
            Estaremos encantados de escucharte y darte un presupuesto sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/presupuesto" className="btn-primary">
              Pedir Presupuesto Gratis
            </Link>
            <Link href="/contacto" className="btn-outline">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

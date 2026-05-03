import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios | Reformas Costa Granada - Motril",
  description:
    "Servicios de reformas y construcciones en Motril: reformas integrales, cocinas, baños, pintura, albañilería, electricidad y fontanería.",
};

const services = [
  {
    icon: "🏠",
    title: "Reformas Integrales",
    desc: "Nos encargamos de toda la reforma de tu vivienda o local comercial. Desde el diseño hasta la entrega final con llaves en mano. Coordinamos todos los gremios necesarios para que no tengas que preocuparte de nada.",
    items: ["Distribución de espacios", "Demoliciones", "Estructura", "Acabados y decoración"],
  },
  {
    icon: "🍳",
    title: "Reformas de Cocinas",
    desc: "Diseñamos e instalamos la cocina de tus sueños. Desde cocinas modernas hasta rústicas, adaptándonos a tu estilo y presupuesto.",
    items: ["Diseño a medida", "Instalación de muebles", "Encimeras", "Electrodomésticos"],
  },
  {
    icon: "🛁",
    title: "Reformas de Baños",
    desc: "Transformamos tu baño con materiales de primera calidad. Instalamos platos de ducha, bañeras, sanitarios y todo tipo de acabados.",
    items: ["Alicatado y solado", "Sanitarios", "Mamparas y duchas", "Iluminación y ventilación"],
  },
  {
    icon: "🎨",
    title: "Pintura y Acabados",
    desc: "Servicio completo de pintura interior y exterior. Trabajamos con las mejores marcas para garantizar durabilidad y un acabado perfecto.",
    items: ["Pintura interior", "Pintura exterior", "Gotelé y texturas", "Barnices y lacados"],
  },
  {
    icon: "🧱",
    title: "Albañilería",
    desc: "Ejecutamos todo tipo de trabajos de albañilería con rigor y profesionalidad. Desde pequeñas reparaciones hasta obras de mayor envergadura.",
    items: ["Tabiques y divisiones", "Solados y alicatados", "Impermeabilizaciones", "Fachadas"],
  },
  {
    icon: "⚡",
    title: "Electricidad y Fontanería",
    desc: "Instalaciones eléctricas y de fontanería realizadas por profesionales certificados, cumpliendo toda la normativa vigente.",
    items: ["Instalación eléctrica", "Cuadros de distribución", "Fontanería", "Calefacción y ACS"],
  },
  {
    icon: "🏗️",
    title: "Construcción de Obra Nueva",
    desc: "Construimos tu proyecto desde cero. Contamos con profesionales cualificados para llevar a cabo cualquier obra de nueva construcción.",
    items: ["Cimentación", "Estructura", "Cerramientos", "Cubierta"],
  },
  {
    icon: "🌿",
    title: "Aislamientos",
    desc: "Mejoramos la eficiencia energética de tu hogar con soluciones de aislamiento térmico y acústico de última generación.",
    items: ["Aislamiento térmico", "Aislamiento acústico", "SATE fachadas", "Cubiertas"],
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#C0522A] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-orange-200 uppercase tracking-widest text-sm mb-3">Lo que hacemos</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
            Nuestros Servicios
          </h1>
          <p className="text-orange-100 mt-4 text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones completas de reforma y construcción en Motril, Granada.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-[#F9F5F0] rounded-xl p-8 border border-transparent hover:border-[#C0522A] transition-colors">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {s.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{s.desc}</p>
                <ul className="space-y-1">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-[#C0522A]">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F9F5F0] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-600 mb-8">
            Contáctanos y te asesoramos sin compromiso. Tenemos solución para cualquier reforma o construcción en Motril.
          </p>
          <Link href="/presupuesto" className="btn-primary">
            Pide tu Presupuesto Gratis
          </Link>
        </div>
      </section>
    </>
  );
}

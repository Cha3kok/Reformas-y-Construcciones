import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proyectos | Reformas Costa Granada - Motril",
  description:
    "Galería de proyectos de reformas y construcciones realizados en Motril, Granada. Reformas integrales, cocinas, baños y más.",
};

const projects = [
  {
    category: "Baño",
    title: "Reforma integral de baño",
    location: "Motril, Granada",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    desc: "Reforma completa con plato de ducha, alicatado y sanitarios nuevos.",
  },
  {
    category: "Cocina",
    title: "Reforma de cocina moderna",
    location: "Motril, Granada",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    desc: "Cocina abierta con encimera de silestone y muebles lacados en blanco.",
  },
  {
    category: "Reforma Integral",
    title: "Reforma integral de vivienda",
    location: "Motril, Granada",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    desc: "Reforma total de apartamento: distribución nueva, acabados y electricidad.",
  },
  {
    category: "Pintura",
    title: "Pintura exterior de fachada",
    location: "Motril, Granada",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    desc: "Tratamiento y pintura de fachada con pintura antihumedad.",
  },
  {
    category: "Baño",
    title: "Baño con bañera exenta",
    location: "Motril, Granada",
    image: "https://images.unsplash.com/photo-1620626011761-996317702519?w=600&q=80",
    desc: "Diseño de lujo con bañera exenta y doble lavabo suspendido.",
  },
  {
    category: "Cocina",
    title: "Cocina rústica renovada",
    location: "Motril, Granada",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&q=80",
    desc: "Reforma de cocina estilo rústico con azulejos hidráulicos.",
  },
];

const categories = ["Todos", "Baño", "Cocina", "Reforma Integral", "Pintura"];

export default function ProyectosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#C0522A] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-orange-200 uppercase tracking-widest text-sm mb-3">Nuestro trabajo</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
            Proyectos Realizados
          </h1>
          <p className="text-orange-100 mt-4 text-lg max-w-2xl mx-auto">
            Algunos de nuestros trabajos de reformas y construcciones en Motril, Granada.
          </p>
        </div>
      </section>

      {/* Category pills */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6 flex gap-3 flex-wrap justify-center">
          {categories.map((c) => (
            <span
              key={c}
              className="px-4 py-2 rounded-full text-sm font-medium bg-[#F9F5F0] text-gray-700 cursor-pointer hover:bg-[#C0522A] hover:text-white transition-colors"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative overflow-hidden h-52">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#C0522A] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-5 bg-[#F9F5F0]">
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {p.title}
                  </h3>
                  <p className="text-[#C0522A] text-xs mb-2">📍 {p.location}</p>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C0522A] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            ¿Quieres que hagamos algo así en tu casa?
          </h2>
          <p className="text-orange-100 mb-8">
            Pídenos presupuesto gratis y te asesoramos sin compromiso.
          </p>
          <Link
            href="/presupuesto"
            className="bg-white text-[#C0522A] font-bold px-8 py-3 rounded-md hover:bg-orange-50 transition-colors"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </section>
    </>
  );
}

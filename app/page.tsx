import Link from "next/link";

const services = [
  { icon: "🏠", title: "Reformas Integrales", desc: "Transformamos tu hogar de principio a fin con total profesionalidad." },
  { icon: "🍳", title: "Cocinas", desc: "Diseño e instalación de cocinas modernas y funcionales." },
  { icon: "🛁", title: "Baños", desc: "Reformas de baño completas, desde alicatado hasta instalación sanitaria." },
  { icon: "🎨", title: "Pintura y Acabados", desc: "Pintura interior y exterior con acabados de alta calidad." },
  { icon: "🧱", title: "Albañilería", desc: "Obras de albañilería, tabiques, solados y todo tipo de trabajos." },
  { icon: "⚡", title: "Electricidad y Fontanería", desc: "Instalaciones eléctricas y fontanería por profesionales certificados." },
];

const reasons = [
  { icon: "✅", title: "Más de 15 años de experiencia", desc: "Amplia trayectoria en reformas y construcciones en Motril y Granada." },
  { icon: "💰", title: "Presupuesto sin compromiso", desc: "Te damos un presupuesto detallado y gratuito sin ninguna obligación." },
  { icon: "🏆", title: "Calidad garantizada", desc: "Usamos materiales de primera calidad y mano de obra especializada." },
  { icon: "📅", title: "Cumplimiento de plazos", desc: "Respetamos los tiempos acordados para minimizar molestias." },
];

const reviews = [
  { name: "María García", stars: 5, text: "Reformaron nuestro baño en tiempo récord. Acabados perfectos y precio justo. Muy recomendables." },
  { name: "Antonio López", stars: 5, text: "La reforma integral de nuestra cocina quedó espectacular. Profesionales de verdad." },
  { name: "Carmen Ruiz", stars: 5, text: "Muy contentos con el trabajo. Limpieza, puntualidad y calidad. Repetiríamos sin duda." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-[#1A1A1A] text-white"
        style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center w-full">
          <p className="text-[#C0522A] font-semibold uppercase tracking-widest mb-4 text-sm">
            Motril, Granada
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Reformas y Construcciones <br />
            <span className="text-[#C0522A]">de Confianza</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Tu empresa de reformas en Motril, Granada. Más de 15 años transformando hogares
            con calidad, profesionalidad y presupuesto sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/presupuesto" className="btn-primary text-lg">
              Pide tu Presupuesto Gratis
            </Link>
            <a
              href="tel:641638707"
              className="border-2 border-white text-white font-semibold px-7 py-3 rounded-md hover:bg-white hover:text-[#C0522A] transition-colors text-lg"
            >
              📞 641 638 707
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title" style={{ fontFamily: "var(--font-montserrat)" }}>
            Nuestros Servicios
          </h2>
          <p className="section-subtitle">
            Todo lo que necesitas para tu reforma en Motril, Granada
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#F9F5F0] rounded-xl p-6 text-left hover:shadow-md transition-shadow border border-transparent hover:border-[#C0522A]"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/servicios" className="btn-primary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-[#F9F5F0]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title" style={{ fontFamily: "var(--font-montserrat)" }}>
            ¿Por qué elegirnos?
          </h2>
          <p className="section-subtitle">Compromiso, calidad y confianza en cada proyecto</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {r.title}
                </h3>
                <p className="text-gray-600 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title" style={{ fontFamily: "var(--font-montserrat)" }}>
            Lo que dicen nuestros clientes
          </h2>
          <p className="section-subtitle">Opiniones reales de clientes satisfechos en Motril</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-[#F9F5F0] rounded-xl p-6 text-left">
                <div className="text-yellow-400 text-xl mb-3">{"★".repeat(r.stars)}</div>
                <p className="text-gray-700 italic mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="font-semibold text-[#C0522A]">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#C0522A] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ¿Listo para empezar tu reforma?
          </h2>
          <p className="text-lg mb-8 text-orange-100">
            Contacta con nosotros hoy y te damos presupuesto gratis sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/presupuesto"
              className="bg-white text-[#C0522A] font-bold px-8 py-3 rounded-md hover:bg-orange-50 transition-colors"
            >
              Solicitar Presupuesto
            </Link>
            <a
              href="https://wa.me/34641638707"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-8 py-3 rounded-md hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, type Post } from "../lib/posts";

export const dynamic = "force-dynamic";

const posts = getAllPosts();

export const metadata: Metadata = {
  title: "Blog de Reformas | Reformas Costa Granada - Motril",
  description:
    "Guías, consejos y precios sobre reformas en Motril y Granada. Todo lo que necesitas saber antes de reformar tu hogar.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  Cocinas: "bg-orange-100 text-orange-700",
  "Baños": "bg-blue-100 text-blue-700",
  Reformas: "bg-stone-100 text-stone-700",
  Pintura: "bg-yellow-100 text-yellow-700",
  Construccion: "bg-red-100 text-red-700",
  Aislamientos: "bg-green-100 text-green-700",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Header */}
      <section className="bg-[#C0522A] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-orange-200 uppercase tracking-widest text-sm mb-3">Consejos & Guías</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
            Blog de Reformas
          </h1>
          <p className="text-orange-100 mt-4 text-lg max-w-2xl mx-auto">
            Precios, consejos y guías prácticas sobre reformas y construcciones en Motril, Granada.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block bg-[#F9F5F0] rounded-2xl overflow-hidden mb-10 hover:shadow-md transition-shadow border border-transparent hover:border-[#C0522A]"
          >
            <img
              src={featured.image}
              alt={featured.imageAlt}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category] ?? "bg-gray-100 text-gray-600"}`}>
                {featured.category}
              </span>
              <span className="text-gray-400 text-xs">Destacado</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#C0522A] transition-colors" style={{ fontFamily: "var(--font-montserrat)" }}>
              {featured.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 max-w-3xl">{featured.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">{formatDate(featured.date)} · {featured.readTime}</span>
              <span className="text-[#C0522A] font-semibold text-sm group-hover:underline">Leer artículo →</span>
            </div>
            </div>
          </Link>

          {/* Rest of posts */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post: Post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-[#F9F5F0] rounded-xl p-6 hover:shadow-md transition-shadow border border-transparent hover:border-[#C0522A]"
                >
                  <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {post.category}
                  </span>
                  <h2 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-[#C0522A] transition-colors" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                    <span className="text-gray-400 text-xs">{formatDate(post.date)}</span>
                    <span className="text-[#C0522A] text-xs font-semibold group-hover:underline">Leer →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C0522A] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            ¿Listo para empezar tu reforma?
          </h2>
          <p className="text-orange-100 mb-8">
            Pide presupuesto gratis sin compromiso. Te atendemos en Motril y toda la costa de Granada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/presupuesto" className="bg-white text-[#C0522A] font-bold px-8 py-3 rounded-md hover:bg-orange-50 transition-colors">
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

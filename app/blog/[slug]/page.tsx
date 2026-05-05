import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "../../lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Reformas Costa Granada`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <>
      {/* Header */}
      <section className="bg-[#C0522A] text-white py-14">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/blog" className="text-orange-200 hover:text-white text-sm mb-6 inline-block transition-colors">
            ← Volver al Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-orange-200 text-xs">{formatDate(post.date)} · {post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
            {post.title}
          </h1>
          <p className="text-orange-100 mt-4 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Cover image */}
      <div className="max-w-3xl mx-auto px-4 pt-10">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-72 object-cover rounded-2xl shadow-md"
        />
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 py-10">
        {post.content.map((section, i) => (
          <div key={i} className="mb-8">
            {section.heading && (
              <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                {section.heading}
              </h2>
            )}
            <p className="text-gray-600 leading-8 text-[1.05rem]">{section.body}</p>
          </div>
        ))}

        {/* CTA box */}
        <div className="mt-14 bg-[#F9F5F0] border border-[#C0522A]/20 rounded-2xl p-8 text-center">
          <h3 className="text-gray-900 font-bold text-xl mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
            ¿Quieres saber cuánto cuesta tu reforma?
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Solicita presupuesto gratuito sin compromiso. Te atendemos en Motril y toda la costa de Granada.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/presupuesto"
              className="bg-[#C0522A] hover:bg-[#a8441f] text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Presupuesto Gratis
            </Link>
            <a
              href="https://wa.me/34641638707"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-gray-900 font-bold text-lg mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
              Artículos relacionados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-[#F9F5F0] rounded-xl p-5 hover:border-[#C0522A] border border-transparent transition-colors"
                >
                  <p className="text-gray-900 font-semibold text-sm mb-2 group-hover:text-[#C0522A] transition-colors">
                    {p.title}
                  </p>
                  <p className="text-gray-500 text-xs line-clamp-2">{p.excerpt}</p>
                  <span className="text-[#C0522A] text-xs mt-3 inline-block font-semibold">Leer →</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}

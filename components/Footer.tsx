import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
            Reformas Costa Granada
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Tu empresa de confianza para reformas y construcciones en Motril, Granada.
            Calidad, profesionalidad y presupuesto sin compromiso.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Páginas</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Inicio" },
              { href: "/servicios", label: "Servicios" },
              { href: "/proyectos", label: "Proyectos" },
              { href: "/sobre-nosotros", label: "Sobre Nosotros" },
              { href: "/presupuesto", label: "Presupuesto Gratis" },
              { href: "/contacto", label: "Contacto" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[#C0522A] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Motril, Granada</li>
            <li>
              <a href="tel:641638707" className="hover:text-[#C0522A] transition-colors">
                📞 641 638 707
              </a>
            </li>
            <li>
              <a href="tel:664385794" className="hover:text-[#C0522A] transition-colors">
                📞 664 385 794
              </a>
            </li>
            <li>
              <a href="mailto:costagranada86@gmail.com" className="hover:text-[#C0522A] transition-colors">
                ✉️ costagranada86@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Reformas Costa Granada. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <Link href="/aviso-legal" className="hover:text-[#C0522A]">Aviso Legal</Link>
          <Link href="/privacidad" className="hover:text-[#C0522A]">Política de Privacidad</Link>
          <Link href="/cookies" className="hover:text-[#C0522A]">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Reformas Costa Granada",
};

export default function CookiesPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-montserrat)" }}>
          Política de Cookies
        </h1>

        <p className="text-gray-600 mb-6">
          Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación
          y obtener estadísticas de uso.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">¿Qué son las cookies?</h2>
        <p className="text-gray-600">
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas
          un sitio web. Permiten al sitio recordar tus preferencias y mejorar tu experiencia.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Cookies que utilizamos</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-600 border-collapse mt-3">
            <thead>
              <tr className="bg-[#F9F5F0]">
                <th className="border border-gray-200 px-4 py-2 text-left">Tipo</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Finalidad</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Técnicas</td>
                <td className="border border-gray-200 px-4 py-2">Funcionamiento básico del sitio</td>
                <td className="border border-gray-200 px-4 py-2">Sesión</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Analíticas</td>
                <td className="border border-gray-200 px-4 py-2">Estadísticas de visitas (Google Analytics)</td>
                <td className="border border-gray-200 px-4 py-2">2 años</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-3">Cómo desactivar las cookies</h2>
        <p className="text-gray-600">
          Puedes configurar tu navegador para rechazar o eliminar las cookies. Consulta las instrucciones
          de tu navegador para más información. Ten en cuenta que desactivar las cookies puede afectar
          al funcionamiento del sitio.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Más información</h2>
        <p className="text-gray-600">
          Para más información sobre el uso de tus datos, consulta nuestra{" "}
          <a href="/privacidad" className="text-[#C0522A] underline">
            Política de Privacidad
          </a>
          .
        </p>
      </div>
    </section>
  );
}

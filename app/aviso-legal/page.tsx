import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Reformas Costa Granada",
};

export default function AvisoLegalPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 prose prose-gray">
        <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-montserrat)" }}>
          Aviso Legal
        </h1>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Datos identificativos</h2>
        <p className="text-gray-600">
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
          de la Información y de Comercio Electrónico, se informa:
        </p>
        <ul className="text-gray-600 list-disc ml-6 mt-3 space-y-1">
          <li><strong>Nombre comercial:</strong> Reformas Costa Granada</li>
          <li><strong>Domicilio:</strong> Motril, Granada, España</li>
          <li><strong>Teléfono:</strong> 641 638 707 / 664 385 794</li>
          <li><strong>Email:</strong> costagranada86@gmail.com</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Objeto</h2>
        <p className="text-gray-600">
          El presente Aviso Legal regula el uso del sitio web de Reformas Costa Granada. El acceso
          y uso del sitio implica la aceptación plena de las condiciones aquí establecidas.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Propiedad intelectual</h2>
        <p className="text-gray-600">
          Los contenidos de este sitio web, incluyendo textos, imágenes y diseño, son propiedad de
          Reformas Costa Granada o de terceros con licencia. Queda prohibida su reproducción sin
          autorización expresa.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Responsabilidad</h2>
        <p className="text-gray-600">
          Reformas Costa Granada no se responsabiliza de los daños derivados del uso de este sitio
          ni de la información contenida en el mismo. La empresa se reserva el derecho a modificar
          los contenidos sin previo aviso.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Legislación aplicable</h2>
        <p className="text-gray-600">
          Este aviso legal se rige por la legislación española. Para cualquier controversia serán
          competentes los juzgados y tribunales de Granada.
        </p>
      </div>
    </section>
  );
}

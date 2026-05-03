import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Reformas Costa Granada",
};

export default function PrivacidadPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-montserrat)" }}>
          Política de Privacidad
        </h1>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Responsable del tratamiento</h2>
        <p className="text-gray-600">
          <strong>Reformas Costa Granada</strong> — Motril, Granada, España<br />
          Email: costagranada86@gmail.com
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Datos que recogemos</h2>
        <p className="text-gray-600">
          Recogemos los datos que el usuario facilita voluntariamente a través del formulario de
          contacto o presupuesto: nombre, teléfono, email y descripción del proyecto.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Finalidad</h2>
        <p className="text-gray-600">
          Los datos facilitados se utilizan exclusivamente para gestionar su solicitud de presupuesto
          o consulta, y para contactar con el usuario en relación con dicha solicitud.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Conservación de datos</h2>
        <p className="text-gray-600">
          Los datos se conservarán durante el tiempo necesario para atender la solicitud y durante
          los plazos legales aplicables.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Derechos del usuario</h2>
        <p className="text-gray-600">
          El usuario tiene derecho a acceder, rectificar, suprimir, portabilidad, limitación y
          oposición al tratamiento de sus datos. Puede ejercerlos enviando un email a
          costagranada86@gmail.com.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Seguridad</h2>
        <p className="text-gray-600">
          Aplicamos medidas técnicas y organizativas apropiadas para proteger sus datos personales
          contra acceso no autorizado, pérdida o destrucción.
        </p>
      </div>
    </section>
  );
}

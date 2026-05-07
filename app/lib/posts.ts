export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: Section[];
};

type Section = {
  heading?: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "cuanto-cuesta-reformar-cocina-granada",
    title: "¿Cuánto cuesta reformar una cocina en Granada en 2026?",
    excerpt:
      "Guía de precios actualizada para reformas de cocina en Granada y Motril. Descubre cuánto cuesta según el tipo de reforma, los materiales elegidos y el tamaño del espacio.",
    category: "Cocinas",
    date: "2026-05-06",
    readTime: "6 min lectura",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    imageAlt: "Reforma de cocina moderna en Granada con muebles blancos y encimera de silestone",
    content: [
      {
        body: "La reforma de cocina es una de las intervenciones más demandadas en hogares de Granada y la costa tropical. Sin embargo, el precio puede variar enormemente según el tipo de reforma, los materiales y la empresa elegida. En esta guía te explicamos todos los factores que influyen en el coste para que puedas planificar tu presupuesto con claridad.",
      },
      {
        heading: "¿Qué tipos de reforma de cocina existen?",
        body: "Existen tres niveles de reforma según su profundidad. La reforma superficial (solo pintura, cambio de frentes y encimera) tiene un coste de entre 1.500 y 4.000 €. La reforma media (cambio de muebles, alicatado y electrodomésticos) oscila entre 5.000 y 10.000 €. La reforma integral (redistribución, fontanería, electricidad y acabados completos) puede ir de 10.000 a 20.000 € según la superficie.",
      },
      {
        heading: "Factores que afectan al precio en Granada",
        body: "En la provincia de Granada influyen varios factores: el tamaño de la cocina (precio por metro cuadrado), la calidad de los materiales elegidos (cerámica, silestone, madera), el estado actual de las instalaciones eléctricas y de fontanería, y si se necesita cambiar la distribución del espacio. En Motril y la costa, la cercanía a los proveedores de materiales también puede influir favorablemente en el presupuesto.",
      },
      {
        heading: "¿Cuánto cuesta la mano de obra?",
        body: "La mano de obra en reformas de cocina en Granada suele representar entre el 40% y el 50% del coste total. Para una reforma completa, los oficios necesarios incluyen albañil, alicatador, electricista, fontanero y carpintero. Contratar una empresa de reformas que coordine todos los gremios resulta más económico que contratar cada especialista por separado, ya que evita descoordinación y retrasos.",
      },
      {
        heading: "¿Cuánto tiempo dura una reforma de cocina?",
        body: "Una reforma superficial puede completarse en 1 semana. Una reforma media suele requerir entre 2 y 3 semanas. Una reforma integral puede durar de 4 a 6 semanas. El cumplimiento de plazos depende directamente de la empresa elegida. En Reformas Costa Granada nos comprometemos con los tiempos acordados desde el primer día.",
      },
      {
        heading: "¿Cómo pedir un presupuesto sin compromiso?",
        body: "La mejor forma de conocer el precio exacto de tu reforma es solicitar una visita gratuita. En Reformas Costa Granada realizamos visitas sin coste en Motril y toda la costa de Granada. Analizamos el estado actual de tu cocina y te entregamos un presupuesto detallado y transparente. Llámanos al 641 638 707 o contáctanos por WhatsApp.",
      },
    ],
  },
  {
    slug: "empresa-reformas-integrales-motril",
    title: "Empresa de Reformas Integrales en Motril: ¿Cómo Elegir la Mejor?",
    excerpt:
      "Buscar una empresa de reformas integrales en Motril no tiene que ser complicado. Te explicamos qué incluye una reforma integral, cuánto cuesta y cómo encontrar un contratista de confianza en la costa de Granada.",
    category: "Reformas",
    date: "2026-05-07",
    readTime: "7 min lectura",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    imageAlt: "Empresa de reformas integrales en Motril trabajando en vivienda de la costa de Granada",
    content: [
      {
        body: "Contratar una empresa de reformas integrales en Motril es una decisión importante que afecta directamente al resultado final y al valor de tu vivienda. En la costa de Granada, el mercado de la construcción y la reforma ha crecido notablemente en los últimos años, con numerosas empresas compitiendo por los mismos clientes. Sin embargo, no todas ofrecen la misma calidad, experiencia ni garantías. En esta guía te explicamos todo lo que debes saber antes de firmar cualquier presupuesto.",
      },
      {
        heading: "¿Qué es una reforma integral y qué incluye?",
        body: "Una reforma integral abarca la renovación completa de una vivienda o local: demolición de tabiques, nueva distribución, instalación eléctrica completa, fontanería, solados, alicatados, carpintería, pintura y acabados. A diferencia de una reforma parcial, la reforma integral transforma el espacio desde cero. En Motril y la costa de Granada, este tipo de intervención es especialmente habitual en viviendas de segunda mano que necesitan una actualización completa antes de ser habitadas o puestas en alquiler.",
      },
      {
        heading: "¿Cuánto cuesta una reforma integral en Motril?",
        body: "El precio de una reforma integral en Motril depende principalmente del estado de la vivienda, la superficie y los materiales elegidos. Como referencia orientativa: una vivienda de 60–80 m² con reforma integral de calidad estándar tiene un coste de entre 35.000 y 55.000 €. Para acabados de alta gama el precio puede superar los 70.000 €. En Reformas Costa Granada elaboramos presupuestos detallados y transparentes tras una visita gratuita, sin coste ni compromiso.",
      },
      {
        heading: "5 criterios para elegir la mejor empresa de reformas en Motril",
        body: "Primero, experiencia local contrastada: busca una empresa con proyectos ejecutados en Motril y la costa tropical, no solo en ciudades grandes. Segundo, presupuesto detallado por partidas: desconfía de presupuestos globales sin desglose. Tercero, garantía de obra por escrito: una empresa seria ofrece garantía mínima de 10 años en estructura y 3 años en instalaciones. Cuarto, equipo propio o subcontratistas de confianza: pregunta quién ejecutará cada gremio. Quinto, referencias verificables: pide ver proyectos anteriores o hablar con clientes.",
      },
      {
        heading: "¿Por qué contratar una empresa local de Motril?",
        body: "Una empresa de reformas integrales con sede en Motril conoce la normativa urbanística municipal, los proveedores locales de materiales y las particularidades constructivas de la zona costera (humedad, salinidad, tipo de suelos). Esto se traduce en presupuestos más ajustados, plazos más realistas y una relación directa con el responsable del proyecto. En Reformas Costa Granada llevamos más de 15 años ejecutando reformas en Motril, Almuñécar, Nerja y toda la costa de Granada.",
      },
      {
        heading: "¿Cuánto tiempo dura una reforma integral en Motril?",
        body: "Una reforma integral de una vivienda de 80 m² suele completarse en 8 a 12 semanas, siempre que no surjan imprevistos estructurales. El plazo depende del alcance de los trabajos, la disponibilidad de materiales y la coordinación entre gremios. Con Reformas Costa Granada recibirás un cronograma detallado desde el inicio y actualizaciones semanales del avance. Nos comprometemos con los plazos acordados y los cumplimos.",
      },
      {
        heading: "Solicita tu presupuesto de reforma integral sin compromiso",
        body: "Si estás pensando en contratar una empresa de reformas integrales en Motril, el primer paso es una visita gratuita a tu vivienda. En Reformas Costa Granada analizamos el estado actual, estudiamos tus necesidades y te entregamos un presupuesto transparente y detallado. Sin costes ocultos, sin sorpresas. Llámanos al 641 638 707 o escríbenos por WhatsApp para concertar la visita.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

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
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

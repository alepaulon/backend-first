export type Product = Record<string, unknown>;
const allProducts: Product[] = [
  {
    id: 1,
    title: "Libro de Aventuras 1",
    vendedorId: 1,
    date: "2023-09-13",
    category: "Ficción",
    content:
      "Este libro es una emocionante aventura que te mantendrá en vilo de principio a fin.",
  },
  {
    id: 2,
    title: "Recetas de Cocina 1",
    vendedorId: 3,
    date: "2023-09-14",
    category: "Cocina",
    content:
      "Descubre deliciosas recetas de cocina de todo el mundo en este libro.",
  },
  {
    id: 3,
    title: "Historia Antigua 1",
    vendedorId: 2,
    date: "2023-09-15",
    category: "Historia",
    content:
      "Sumérgete en el fascinante mundo de la historia antigua con este libro lleno de conocimiento.",
  },
  {
    id: 4,
    title: "Libro de Aventuras 2",
    vendedorId: 1,
    date: "2023-09-16",
    category: "Ficción",
    content: "Una emocionante continuación de la primera aventura.",
  },
  {
    id: 5,
    title: "Recetas de Cocina 2",
    vendedorId: 3,
    date: "2023-09-17",
    category: "Cocina",
    content: "Más recetas deliciosas para tu cocina.",
  },
  {
    id: 6,
    title: "Historia Antigua 2",
    vendedorId: 2,
    date: "2023-09-18",
    category: "Historia",
    content: "Más misterios y descubrimientos de la antigüedad.",
  },
];

export default allProducts;

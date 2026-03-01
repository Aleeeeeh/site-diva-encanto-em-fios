export type Category = "Tapetes" | "Bolsas" | "Panos" | "Chaveirinhos" | "Brincos" | "Toucas"

export interface Product {
  id: number
  name: string
  description: string
  category: Category
  image: string
}

export const categories: Category[] = [
  "Tapetes",
  "Bolsas",
  "Panos",
  "Chaveirinhos",
  "Brincos",
  "Toucas",
]

export const categoryImages: Record<Category, string> = {
  Tapetes: "/images/tapete1.jpeg",
  Bolsas: "/images/bolsa1.jpeg",
  Panos: "/images/pano1.jpeg",
  Chaveirinhos: "/images/brincos.jpeg",
  Brincos: "/images/brincos-croche.jpg",
  Toucas: "/images/touca1.jpeg",
}

export const products: Product[] = [
  // Tapetes
  {
    id: 1,
    name: "Tapete Mandala",
    description: "Tapete redondo com padrão mandala em tons suaves.",
    category: "Tapetes",
    image: "/images/tapete1.jpeg",
  },
  {
    id: 2,
    name: "Tapete Retangular",
    description: "Tapete retangular ideal para salas e quartos.",
    category: "Tapetes",
    image: "/images/tapete2.jpeg",
  },
  {
    id: 3,
    name: "Tapete Decorativo",
    description: "Tapete artesanal com trançado diferenciado.",
    category: "Tapetes",
    image: "/images/tapete3.jpeg",
  },
  // Bolsas
  {
    id: 4,
    name: "Bolsa Boho",
    description: "Bolsa em crochê com estilo boho e alça longa.",
    category: "Bolsas",
    image: "/images/bolsa1.jpeg",
  },
  // Panos
  {
    id: 5,
    name: "Pano de Prato Floral",
    description: "Pano de prato com detalhes florais em crochê.",
    category: "Panos",
    image: "/images/pano1.jpeg",
  },
  {
    id: 6,
    name: "Pano de Mesa Rendado",
    description: "Pano de mesa com acabamento rendado e elegante.",
    category: "Panos",
    image: "/images/pano2.jpeg",
  },
  {
    id: 7,
    name: "Pano Bordado Clássico",
    description: "Pano com bordado clássico em crochê delicado.",
    category: "Panos",
    image: "/images/pano3.jpeg",
  },
  {
    id: 8,
    name: "Pano Colorido",
    description: "Pano de prato colorido com padrão geométrico.",
    category: "Panos",
    image: "/images/pano4.jpeg",
  },
  {
    id: 9,
    name: "Pano Rústico",
    description: "Pano rústico ideal para decoração de cozinha.",
    category: "Panos",
    image: "/images/pano5.jpeg",
  },
  {
    id: 10,
    name: "Pano Delicado",
    description: "Pano com acabamento delicado e detalhes finos.",
    category: "Panos",
    image: "/images/pano6.jpeg",
  },
  {
    id: 11,
    name: "Pano Artesanal",
    description: "Pano feito à mão com trançado artesanal.",
    category: "Panos",
    image: "/images/pano7.jpeg",
  },
  {
    id: 12,
    name: "Pano Listrado",
    description: "Pano com listras em tons harmônicos.",
    category: "Panos",
    image: "/images/pano8.jpeg",
  },
  {
    id: 13,
    name: "Pano Rendado Fino",
    description: "Pano com renda fina e acabamento primoroso.",
    category: "Panos",
    image: "/images/pano9.jpeg",
  },
  {
    id: 14,
    name: "Pano Multicolorido",
    description: "Pano vibrante com combinação de cores.",
    category: "Panos",
    image: "/images/pano10.jpeg",
  },
  {
    id: 15,
    name: "Pano Elegante",
    description: "Pano elegante para ocasiões especiais.",
    category: "Panos",
    image: "/images/pano11.jpeg",
  },
  {
    id: 16,
    name: "Pano Tradicional",
    description: "Pano com padrão tradicional de crochê brasileiro.",
    category: "Panos",
    image: "/images/pano12.jpeg",
  },
  // Chaveirinhos
  {
    id: 17,
    name: "Chaveirinho de Crochê",
    description: "Chaveirinhos delicados feitos em crochê com miçangas.",
    category: "Chaveirinhos",
    image: "/images/brincos.jpeg",
  },
  // Brincos
  {
    id: 20,
    name: "Brincos de Crochê",
    description: "Brincos artesanais feitos em crochê com acabamento delicado.",
    category: "Brincos",
    image: "/images/brincos-croche.jpg",
  },
  // Toucas
  {
    id: 18,
    name: "Touca Trançada",
    description: "Touca com trançado em lã macia e quentinha.",
    category: "Toucas",
    image: "/images/touca1.jpeg",
  },
  {
    id: 19,
    name: "Touca Pompom",
    description: "Touca com pompom fofo perfeita para o inverno.",
    category: "Toucas",
    image: "/images/touca2.jpeg",
  },
]

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return categories.map(
    (cat) => products.find((p) => p.category === cat)!
  )
}

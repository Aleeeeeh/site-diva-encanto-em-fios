import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/products"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const featured = getFeaturedProducts()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative flex flex-col items-center justify-center bg-secondary px-6 py-24 text-center md:py-32">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Crochê Artesanal
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Peças feitas à mão com carinho e criatividade
            </h1>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Cada peça é única, produzida com dedicação para trazer encanto ao seu dia a dia.
            </p>
            <Link
              href="/categorias"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver Produtos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Destaques
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Nossas Categorias
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/categorias"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Ver Todos os Produtos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

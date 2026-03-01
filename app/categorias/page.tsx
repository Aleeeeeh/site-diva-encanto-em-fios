"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { useState, useEffect, Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { categories, products, categoryImages, type Category } from "@/lib/products"
import { cn } from "@/lib/utils"

function CategoriesContent() {
  const searchParams = useSearchParams()
  const catParam = searchParams.get("cat")
  const [activeCategory, setActiveCategory] = useState<Category | "Todas">("Todas")

  useEffect(() => {
    if (catParam && categories.includes(catParam as Category)) {
      setActiveCategory(catParam as Category)
    }
  }, [catParam])

  const filteredProducts =
    activeCategory === "Todas"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Filter buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setActiveCategory("Todas")}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition-colors",
            activeCategory === "Todas"
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-foreground hover:bg-secondary"
          )}
        >
          Todas
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "flex items-center gap-2 rounded-full py-2 pl-2 pr-5 text-sm font-medium transition-colors",
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-foreground hover:bg-secondary"
            )}
          >
            <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full">
              <Image
                src={categoryImages[cat]}
                alt={cat}
                fill
                className="object-cover"
                sizes="28px"
              />
            </div>
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          Nenhum produto encontrado nesta categoria.
        </p>
      )}
    </>
  )
}

export default function CategoriasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Explore
            </p>
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Nossos Produtos
            </h1>
          </div>

          <Suspense fallback={
            <div className="flex justify-center py-12">
              <p className="text-muted-foreground">Carregando...</p>
            </div>
          }>
            <CategoriesContent />
          </Suspense>
        </section>
      </main>

      <Footer />
    </div>
  )
}

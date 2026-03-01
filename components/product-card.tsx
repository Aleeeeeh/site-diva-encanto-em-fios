import Image from "next/image"
import type { Product } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          {product.category}
        </span>
        <h3 className="font-serif text-lg font-semibold text-card-foreground">
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <p className="mt-2 text-xs font-medium text-primary">
          Consulte os precos no WhatsApp
        </p>
      </div>
    </div>
  )
}

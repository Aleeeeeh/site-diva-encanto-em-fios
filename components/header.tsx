"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { categories, categoryImages } from "@/lib/products"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold tracking-tight text-foreground">
            Diva Encanto em Fios
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium tracking-wide text-foreground transition-colors hover:text-primary"
          >
            Início
          </Link>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCatOpen(!catOpen)}
              onBlur={() => setTimeout(() => setCatOpen(false), 150)}
              className="flex items-center gap-1 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-primary"
            >
              Categorias
              <ChevronDown className={`h-4 w-4 transition-transform ${catOpen ? "rotate-180" : ""}`} />
            </button>
            {catOpen && (
              <div className="absolute left-0 top-full mt-2 w-52 rounded-lg border border-border bg-card p-2 shadow-lg">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/categorias?cat=${encodeURIComponent(cat)}`}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-secondary"
                    onClick={() => setCatOpen(false)}
                  >
                    <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={categoryImages[cat]}
                        alt={cat}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    {cat}
                  </Link>
                ))}
                <div className="my-1 border-t border-border" />
                <Link
                  href="/categorias"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary"
                  onClick={() => setCatOpen(false)}
                >
                  Ver todas
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/sobre"
            className="text-sm font-medium tracking-wide text-foreground transition-colors hover:text-primary"
          >
            Sobre
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Início
            </Link>
            <div>
              <button
                onClick={() => setCatOpen(!catOpen)}
                className="flex items-center gap-1 text-sm font-medium text-foreground"
              >
                Categorias
                <ChevronDown className={`h-4 w-4 transition-transform ${catOpen ? "rotate-180" : ""}`} />
              </button>
              {catOpen && (
                <div className="mt-2 flex flex-col gap-1 pl-4">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/categorias?cat=${encodeURIComponent(cat)}`}
                      className="flex items-center gap-3 py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => { setCatOpen(false); setMobileOpen(false) }}
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
                    </Link>
                  ))}
                  <Link
                    href="/categorias"
                    className="text-sm font-medium text-primary"
                    onClick={() => { setCatOpen(false); setMobileOpen(false) }}
                  >
                    Ver todas
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/sobre"
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Sobre
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

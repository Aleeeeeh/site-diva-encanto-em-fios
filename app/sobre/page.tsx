import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Conheça
            </p>
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Sobre a Diva Encanto em Fios
            </h1>
          </div>

          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* Image */}
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl lg:w-1/2">
              <Image
                src="/images/about-artesanal.jpg"
                alt="Peças artesanais de crochê com novelos de lã em tons suaves"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Text */}
            <div className="flex max-w-lg flex-col gap-6 lg:w-1/2">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Feito com amor, ponto a ponto
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Diva tem como hobby a produção de itens de crochê, sempre buscando inovar com novas criações, cores e estilos. Cada peça é feita manualmente com dedicação e carinho.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Das cores dos fios à escolha dos pontos, cada detalhe é pensado com cuidado para criar peças únicas que trazem aconchego e beleza para o seu dia a dia.
              </p>
              <div className="mt-2 flex gap-8">
                <div className="flex flex-col">
                  <span className="font-serif text-3xl font-bold text-primary">5+</span>
                  <span className="text-xs text-muted-foreground">Categorias</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-3xl font-bold text-primary">100%</span>
                  <span className="text-xs text-muted-foreground">Artesanal</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-3xl font-bold text-primary">Muito</span>
                  <span className="text-xs text-muted-foreground">Carinho</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

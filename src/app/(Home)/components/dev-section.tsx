import { ArrowRight, MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function DevSection() {
  return (
    <div className="relative h-full w-full border-b border-gray-800 ">
      <Image
        className="absolute z-0  w-full   object-cover opacity-90   "
        src="/tecback.webp"
        width={1440}
        height={252}
        loading="lazy"
        alt={"image de fond de la section développement web"}
        quality={100}
      ></Image>
      <div className="   h-full  py-[5rem]  ">
        <div className=" relative  flex   h-full w-full flex-col  px-[1.125rem]  text-center lg:mx-auto   lg:mt-0    lg:flex lg:max-w-[1225px] lg:px-16  lg:text-left xl:px-0 ">
          <header className="">
            <h3 className="mb-4 text-base tracking-[0.2em] text-sky-400/90">
              PUIS-JE VOUS AIDER AVEC......
            </h3>
          </header>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between ">
            <h1 className="text-2xl text-white-blue/90 lg:max-w-[62%] lg:text-5xl">
              Le développement web et le design d'interfaces sont mes
              spécialités.
            </h1>
            <h3 className="text-white-blue/60  lg:max-w-[300px] lg:text-lg ">
              Dans les projets que je développe, je pense toujours à offrir la
              meilleure expérience utilisateur, associée à un design attrayant
              et en accord avec les objectifs commerciaux.
            </h3>
          </div>
          <div className="mt-[2.5rem] grid grid-cols-1 gap-6 lg:mt-[5rem] lg:grid-cols-3  lg:gap-10">
            <div className=" flex h-full flex-col items-center justify-center gap-6 bg-sky-950/40 px-4 py-10  text-center lg:h-[20rem] lg:p-8  ">
              <div className="mx-auto h-[70px] w-[60px] ">
                <Image
                  className="h-full w-full object-fill"
                  src="/react.svg"
                  width={500}
                  height={500}
                  alt="react js logo"
                ></Image>
              </div>

              <h2 className="text-xl font-semibold text-white-blue/90">
                Développement Front-end
              </h2>
              <p className="text-white-blue/60">
                Maximisez votre présence en ligne avec mon service front-end :
                technologie de pointe, interfaces futuristes. Pour une
                impression inoubliable et un impact maximal !
              </p>
            </div>
            <div className=" flex h-full flex-col items-center justify-center gap-6 bg-sky-950/40 px-4 py-10  text-center lg:h-[20rem] lg:p-8  ">
              <div className="mx-auto h-[70px] w-[60px] ">
                <Image
                  className="h-full w-full object-fill"
                  src="/node.svg"
                  width={500}
                  height={500}
                  alt="node js logo"
                ></Image>
              </div>

              <h2 className="text-xl font-semibold text-white-blue/90">
                Développement Back-end
              </h2>
              <p className="text-white-blue/60">
                Boostez votre projet en ligne avec une infrastructure robuste et
                performante. Accélérez votre succès numérique avec des solutions
                techniques avant-gardistes.
              </p>
            </div>
            <div className=" flex h-full flex-col items-center justify-center gap-6 bg-sky-950/40 px-4 py-10  text-center lg:h-[20rem] lg:p-8  ">
              <div className="mx-auto h-[80px] w-[40px] ">
                <Image
                  className="h-full w-full object-fill"
                  src="/figma.svg"
                  width={500}
                  height={300}
                  alt="Logo de figma"
                ></Image>
              </div>

              <h2 className="text-xl font-semibold text-white-blue/90">
                Design d'interfaces
              </h2>
              <p className="text-pretty text-white-blue/60">
                Création d'interfaces pour des sites web et des pages
                d'atterrissage dans tous les domaines, en mettant l'accent sur
                l'engagement de votre public cible et une esthétique visuelle
                irrésistible.
              </p>
            </div>
          </div>
          <Link
            href={"https://form.jotform.com/233487539279069"}
            className=" mt-16 flex items-center justify-center gap-2 rounded-md bg-sky-600 px-10 py-4 text-lg font-semibold text-white-blue/90 transition-all hover:bg-sky-700 lg:mx-auto lg:mt-16 lg:max-w-[360px]"
          >
            Démarrez avec un devis!
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

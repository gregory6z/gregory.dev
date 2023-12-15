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
        alt={""}
        quality={100}
      ></Image>
      <div className="   h-full  py-[5rem]  ">
        <div className=" relative  flex   h-full w-full flex-col  px-[1.125rem]  text-center lg:mx-auto   lg:mt-0    lg:flex lg:max-w-[1225px] lg:px-16  lg:text-left xl:px-0 ">
          <header className="">
            <p className="mb-4 tracking-[0.2em] text-sky-400/90">
              PUIS-JE VOUS AIDER AVEC......
            </p>
          </header>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between ">
            <p className="text-2xl text-white-blue/90 lg:max-w-[62%] lg:text-5xl">
              Le développement web et le design d'interfaces sont mes
              spécialités.
            </p>
            <p className="text-white-blue/60  lg:max-w-[300px] lg:text-lg ">
              Dans les projets que je développe, je pense toujours à offrir la
              meilleure expérience utilisateur, associée à un design attrayant
              et en accord avec les objectifs commerciaux.
            </p>
          </div>
          <div className="mt-[2.5rem] grid grid-cols-1 gap-6 lg:mt-[5rem] lg:grid-cols-3  lg:gap-10">
            <div className=" flex h-full flex-col items-center justify-center gap-6 bg-sky-950/40 px-4 py-10  text-center lg:h-[20rem] lg:p-8  ">
              <div className="mx-auto h-[70px] w-[60px] ">
                <Image
                  className="h-full w-full object-fill"
                  src="/react.svg"
                  width={500}
                  height={500}
                  alt={""}
                ></Image>
              </div>

              <p className="text-xl font-semibold text-white-blue/90">
                Développement Front-end
              </p>
              <p className="text-white-blue/60">
                Optimisez votre présence en ligne avec mon service front-end :
                technologie de pointe, interfaces du futur. Pour un impact
                maximal !
              </p>
            </div>
            <div className=" flex h-full flex-col items-center justify-center gap-6 bg-sky-950/40 px-4 py-10  text-center lg:h-[20rem] lg:p-8  ">
              <div className="mx-auto h-[70px] w-[60px] ">
                <Image
                  className="h-full w-full object-fill"
                  src="/node.svg"
                  width={500}
                  height={500}
                  alt={""}
                ></Image>
              </div>

              <p className="text-xl font-semibold text-white-blue/90">
                Développement Back-end
              </p>
              <p className="text-white-blue/60">
                Renforcez l'infrastructure de votre projet en ligne avec des
                performances solides. Propulsez votre succès numérique avec des
                solutions techniques de pointe.
              </p>
            </div>
            <div className=" flex h-full flex-col items-center justify-center gap-6 bg-sky-950/40 px-4 py-10  text-center lg:h-[20rem] lg:p-8  ">
              <div className="mx-auto h-[80px] w-[40px] ">
                <Image
                  className="h-full w-full object-fill"
                  src="/figma.svg"
                  width={500}
                  height={300}
                  alt={""}
                ></Image>
              </div>

              <p className="text-xl font-semibold text-white-blue/90">
                Design d'interfaces
              </p>
              <p className="text-white-blue/60">
                Concevoir des interfaces pour des sites web et des pages
                d'atterrissage dans n'importe quel créneau, en mettant l'accent
                sur votre public cible et un fort attrait visuel.
              </p>
            </div>
          </div>
          <Link
            href={"https://2vhu0iyiuhd.typeform.com/to/VNblNyUc"}
            className=" mt-16 flex items-center justify-center gap-2 rounded-md bg-sky-600 px-10 py-4 text-lg font-semibold text-white-blue/90 transition-all hover:bg-sky-700 lg:mx-auto lg:mt-16 lg:max-w-[320px]"
          >
            Demander un devis
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

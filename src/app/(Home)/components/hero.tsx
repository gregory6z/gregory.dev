import Image from "next/image"

import { Variants } from "framer-motion"
import { TextMotion } from "@/app/lib/text-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const container: Variants = {
    hidden: { opacity: 0, y: 30 },

    show: {
      opacity: 1,

      y: 0,

      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative h-screen w-full overflow-hidden border-b border-gray-800">
      <TextMotion
        initial={{ scaleX: 0.5, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          delay: 0.5,
        }}
      >
        <Image
          className=" tall:min-h-[60vw]  absolute -right-[40%] min-w-[700px]   animate-[spinCustom_50s_linear_infinite] rounded-full object-bottom lg:-right-[30%] lg:min-w-[60vw] xl:-right-[10%] xl:min-w-[70vw] "
          src="/shape-tec.svg"
          width={1189}
          height={1140}
          loading={"eager"}
          alt={"/shape-tec.svg"}
        ></Image>
      </TextMotion>
      {/* <TextMotion
        initial={{ translateY: "-100%", opacity: 0 }}
        animate={{ translateY: "0%", opacity: 1 }}
        transition={{ duration: 2 }}
      > */}
      <Image
        className="top absolute h-[23vh] w-full object-cover  "
        src="/shape-up.png"
        width={1440}
        height={252}
        loading="eager"
        alt={"font de la section hero"}
      ></Image>
      {/* </TextMotion> */}

      <Image
        className=" bottom absolute bottom-0 h-[23vh] w-full  object-cover  "
        src="/shape-down.png"
        width={1440}
        height={252}
        alt={"background de la section hero"}
      ></Image>

      {/* elipse-left-down */}
      <div className="absolute -left-[15%] bottom-0 h-[356px] w-[481px] rounded-full bg-[#072843] blur-[300px] lg:blur-[150px]"></div>

      <header>
        <Image
          className="mx-auto mt-6 h-[2.5rem] w-[2.5rem] lg:h-[4rem] lg:w-[4rem] "
          src="/logo.svg"
          width={72}
          height={72}
          alt={"logo de gregory praxedes"}
        ></Image>
      </header>
      <div className="flex h-full   w-full items-end px-[1.125rem] pb-40 lg:mx-auto  lg:mt-0 lg:flex lg:max-w-[1225px] lg:items-center lg:px-16 xl:px-0  ">
        <div className="flex flex-col gap-8">
          <Image
            className=" z-10"
            src="/profile-pic.png"
            width={86}
            height={86}
            alt={"photo de profil de gregory praxedes"}
          ></Image>

          <TextMotion
            variants={container}
            initial="hidden"
            animate="show"
            className="z-10 flex flex-col gap-8"
          >
            <TextMotion variants={item}>
              <h1 className="text-3xl text-white-blue/90 sm:text-6xl lg:text-7xl">
                Gregory Praxedes
              </h1>
            </TextMotion>

            <div className="flex flex-col gap-4  ">
              <TextMotion variants={item}>
                <h2 className=" text-xl text-sky-400 sm:text-2xl lg:text-3xl">
                  Développeur Web et UI Designer
                </h2>
              </TextMotion>
              <TextMotion variants={item} className="lg:w-[60%] ">
                <span className="text-pretty text-base opacity-60 sm:text-lg lg:text-xl ">
                  Créer des sites web qui attirent l'attention et génèrent des
                  résultats
                </span>
              </TextMotion>
              <Link
                href={"https://form.jotform.com/233487539279069"}
                className=" mt-4 flex items-center justify-center gap-2 rounded-md bg-sky-600 px-10 py-4 text-lg font-semibold text-white-blue/90  transition-all hover:bg-sky-700 lg:max-w-[360px]"
              >
                Démarrez avec un devis!
                <ArrowRight />
              </Link>
            </div>
          </TextMotion>
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"

export function Projets() {
  return (
    <div className="relative h-full  w-full border-b border-gray-800">
      <Image
        className="top absolute h-[23vh] w-full object-cover  "
        src="/shape-up.png"
        width={1440}
        height={252}
        alt={"background de la section projets"}
        loading="lazy"
      ></Image>
      <Image
        className=" bottom absolute bottom-0 h-[23vh] w-full  object-cover  "
        src="/shape-down.png"
        width={1440}
        loading="eager"
        height={252}
        alt={"background de la section projets"}
      ></Image>
      <div className=" flex h-full w-full flex-col px-[1.125rem]   lg:mx-auto    lg:mt-0 lg:flex lg:max-w-[1225px]  lg:px-16 xl:px-0 ">
        <div className="my-20 flex flex-col lg:my-[10rem]">
          <h3 className=" text-3xl  text-white-blue/90  sm:text-6xl lg:text-5xl">
            Mes projets{" "}
          </h3>
          <div className="mt-8 flex flex-col gap-10 lg:mt-[5rem] ">
            <div className=" flex h-full w-full flex-col gap-2 rounded-md border border-gray-800 bg-background-dark-900 shadow-xl lg:flex-row lg:items-center ">
              <div className="flex flex-col gap-2 p-6 lg:gap-6  ">
                <h1 className="text-2xl text-sky-400 lg:text-4xl">
                  Paris Investissements
                </h1>
                <p className="text-sm text-white-blue/60 lg:text-lg ">
                  Plateforme d'investissements et de gestion financière.
                  Achetez, suivez et retirez facilement avec une interface
                  intuitive. Un site d'investissement offrant des services
                  similaires à une application bancaire.
                  <br />
                  Intégré avec les technologies avancées Next.js, Node, Prisma,
                  Tailwind CSS, Framer Motion, Zod,et PostgreSQL.
                </p>
              </div>
              <div className="flex h-[12rem] items-end justify-center rounded-b-md bg-sky-950  lg:h-[22rem]  lg:min-w-[540px] lg:rounded-b-none lg:rounded-r-md ">
                <Image
                  src="/paris.png"
                  loading="eager"
                  alt="projet paris investissements"
                  className="  object-scale h-[80%] w-[92%] rounded-t-md  object-cover object-left-top "
                  width={720}
                  height={980}
                ></Image>
              </div>
            </div>
            <div className="flex h-full w-full flex-col gap-2 rounded-md border-2 border-gray-900 bg-background-dark-900 lg:flex-row lg:items-center ">
              <div className="flex flex-col gap-2 p-6 lg:gap-6  ">
                <h1 className="text-2xl text-sky-400 lg:text-4xl">Va Beauty</h1>
                <div className="space-y-2">
                  <p className="text-pretty text-sm text-white-blue/60 lg:text-lg">
                    Plateforme de réservation pour des prestations esthétiques à
                    la demande. Elle résout le problème de planification et de
                    gestion des rendez-vous pour les esthéticiennes et leurs
                    clients.
                  </p>

                  <p className="text-pretty text-sm text-white-blue/60 lg:text-lg">
                    Elle est intégrée à l'API Stripe pour des transactions
                    sécurisées et fiables.
                  </p>
                  <p className="text-pretty text-sm text-white-blue/60 lg:text-lg">
                    De plus, elle offre une authentification sociale pour une
                    expérience utilisateur simplifiée.
                  </p>
                  <p className="text-pretty text-sm text-white-blue/60 lg:text-lg">
                    L'interface est fluide et intuitive. Les technologies de
                    pointe telles que Next.js, Nest.js, Prisma, Tailwind CSS,
                    Zod, Zustand assurent une expérience de réservation rapide
                    et fiable.
                  </p>
                </div>
              </div>
              <div className="flex h-[12rem]  items-end justify-center rounded-b-md bg-sky-950  lg:min-h-[26rem]  lg:min-w-[540px] lg:rounded-b-none lg:rounded-r-md ">
                <Image
                  src="/va-beauty.png"
                  alt="projet va beauty"
                  loading="eager"
                  className="  object-scale h-[80%] w-[92%]  rounded-t-md  object-cover object-left-top "
                  width={1080}
                  height={980}
                ></Image>
              </div>
            </div>

            <div className="flex h-full w-full flex-col gap-2 rounded-md border-2 border-gray-900 bg-background-dark-900 lg:flex-row lg:items-center ">
              <div className="flex flex-col gap-2 p-6 lg:gap-6  ">
                <h1 className="text-2xl text-sky-400 lg:text-4xl">
                  Ignite Call
                </h1>
                <div>
                  <p className="text-sm text-white-blue/60 lg:text-lg ">
                    Le projet Ignite Call a été conçu pour planifier des
                    rendez-vous à partir d'un calendrier avec intégration avec
                    Google Calendar. L'utilisateur peut s'inscrire sur
                    l'application depuis son compte Google et indiquer les jours
                    de la semaine et les heures où il sera disponible pour
                    prendre des rendez-vous. Construit sur un projet
                    Next,stitches Prisma, Mysql, day-js
                  </p>
                </div>
              </div>
              <div className="flex h-[12rem] items-end justify-center rounded-b-md bg-sky-950  lg:h-[22rem]  lg:min-w-[540px] lg:rounded-b-none lg:rounded-r-md ">
                <Image
                  src="/ignite-call.png"
                  loading="eager"
                  alt="projet ignite call"
                  className="  object-scale h-[80%] w-[92%]  rounded-t-md  object-cover object-left-top "
                  width={1080}
                  height={980}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

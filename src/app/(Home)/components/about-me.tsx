import Image from "next/image"

export function AboutMe() {
  return (
    <div className="h-full min-h-screen w-full ">
      <div className=" mb-[10rem] flex  h-full w-full px-[1.125rem]  lg:mx-auto lg:mb-[0rem] lg:flex lg:max-w-[1225px]  lg:px-16 xl:px-0 ">
        <div className="mt-[5rem] flex flex-col gap-16 lg:mt-[10rem]  lg:flex-row  lg:items-center lg:gap-8">
          <div className="flex flex-1 flex-col  gap-8">
            <h3 className=" text-3xl text-white-blue/90 lg:text-5xl ">
              À propos de moi...
            </h3>

            <div className="flex flex-col gap-4 lg:text-lg ">
              <p className=" text-white-blue/60 ">
                J'ai toujours été passionné par la technologie depuis mon plus
                jeune âge. À l'âge de 14 ans, j'ai décroché mon premier emploi
                dans un cyber café, où je démontais et remontais des
                ordinateurs. C'est là que j'ai découvert le monde du web et que
                j'ai développé un intérêt pour la création de sites web et
                d'applications. Je voulais en apprendre davantage et devenir un
                professionnel qualifié dans le domaine.
              </p>
              <p className=" text-white-blue/60">
                C'est pourquoi j'ai obtenu un diplôme en analyse et
                développement de systèmes et suivi de nombreuses formations
                intensives en langages de programmation, frameworks et outils.
                J'ai également consacré du temps à l'étude du design et des
                interfaces du futur, car je crois que l'esthétique et la
                convivialité sont essentielles pour créer des expériences
                incroyables pour les utilisateurs.
              </p>
              <p className=" text-white-blue/60">
                Aujourd'hui, je suis un développeur web indépendant travaillant
                sur des projets stimulants et innovants. Je me sens épanoui dans
                ma carrière et fier de ma croissance personnelle et
                professionnelle. J'aime ce que je fais et souhaite continuer à
                apprendre et à évoluer dans mon domaine.
              </p>
            </div>
            {/* <span className="cursor-pointer text-sky-400 underline">
              Ler historia completa
            </span> */}
          </div>
          <div className=" relative h-[380px] w-full rounded-md  bg-gray-900 lg:h-[600px] lg:w-[458px] ">
            <Image
              className="h-full w-full rounded-md object-cover object-top opacity-90  duration-500 "
              src="/foto.png"
              alt="Gregory Praxedes développeur web marseille/aix"
              width={458}
              height={600}
              placeholder="blur"
              loading="lazy"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiNGRkYiLz4KPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9InVybCgjZ3JhZCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMjgiIHkxPSIwIiB4Mj0iMTI4IiB5Mj0iMjU2Ij4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlJSIgc3RvcC1jb2xvcj0iIzAwMCIgc3RvcC1vcGFjaXR5PSIwLjEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
            ></Image>
            <Image
              className="absolute -bottom-[30%] left-[30%] h-[150px] w-[150px] animate-[spin_24s_ease-in-out_infinite] lg:-bottom-[20%] lg:-left-[20%]  lg:h-[260px] lg:w-[260px] "
              src="/selo.svg"
              alt="timbre Gregory Praxedes"
              width={260}
              loading="lazy"
              height={260}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Github, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export function Footer() {
  return (
    <>
      <div className="h-full w-full bg-background-dark-900 lg:min-h-[70vh]">
        <div className="flex h-full w-full  px-[1.125rem] lg:mx-auto lg:flex lg:max-w-[1225px]  lg:px-16 xl:px-0 ">
          <div className="mx-auto  mt-[3rem] flex flex-col gap-14  text-center lg:mt-[10rem] ">
            <Image
              src={"/profile-pic.png"}
              className="mx-auto"
              width="80"
              height={80}
              alt={""}
            ></Image>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl text-white-blue/90 lg:text-5xl">
                Créons un projet ensemble ?
              </h1>
              <Link
                href={"https://2vhu0iyiuhd.typeform.com/to/VNblNyUc"}
                className=" mx-auto  mt-6 flex items-center justify-center gap-4 rounded-md bg-sky-600 px-10 py-4 text-lg font-semibold text-white-blue/90 transition-all hover:bg-sky-700  lg:max-w-[320px]"
              >
                Allons-y ? <span>😀</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-[2rem] h-[1px] w-full max-w-[1225px] bg-gray-800 lg:mt-[5rem]"></div>
        <div className=" h-full  text-center ">
          <h1 className="mt-4 text-lg tracking-widest text-sky-400">
            SUIVEZ-MOI SUR LES RESEAUX
          </h1>
        </div>
        <div className="mx-auto lg:max-w-[1225px]">
          <div className="mx-auto flex items-center justify-center gap-6 py-10 text-sky-400">
            <Link
              href={"https://www.instagram.com/prax6z/"}
              target="_blank"
              className="transition-all hover:text-sky-600"
            >
              <Instagram width={40} height={40}></Instagram>
            </Link>
            <Link
              className="transition-all hover:text-sky-600"
              target="_blank"
              href={"https://www.linkedin.com/in/gregory-praxedes-2189b4207/"}
            >
              <Linkedin width={40} height={40}></Linkedin>
            </Link>
            <Link
              href={"https://github.com/gregory6z/"}
              target="_blank"
              className="transition-all hover:text-sky-600"
            >
              <Github width={40} height={40}></Github>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[6px] w-full  bg-sky-400"></div>
    </>
  )
}

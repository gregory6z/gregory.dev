import { AboutMe } from "./(Home)/components/about-me"
import { DevSection } from "./(Home)/components/dev-section"
import { Footer } from "./(Home)/components/footer"
import { Hero } from "./(Home)/components/hero"
import { Projets } from "./(Home)/components/projets"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Hero></Hero>

      <Projets />
      <DevSection />
      <div className=" overflow-hidden bg-sky-950/40 ">
        <div className=" flex  h-full  w-[1080px] items-center justify-center overflow-hidden lg:w-[2460px]">
          <Image
            src="/tec.png"
            alt=""
            className="  h-[6rem] animate-scrollRightAnimate bg-repeat object-cover lg:h-[8rem] lg:w-[3160px]"
            width={3160}
            height={300}
          ></Image>
        </div>
      </div>

      <AboutMe />
      <Footer />
    </>
  )
}

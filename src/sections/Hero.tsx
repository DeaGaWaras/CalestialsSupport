import memojiImage from "@/assets/images/memoji-avatar-1.png";
import IconAva from "@/assets/images/ci.ico";
import Image from "next/image";
import ArrawDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StartIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <section id="Home">
      <div className="py-32 md:py-48 lg:py-60 relative z-1 overflow-x-clip">
        {/* Background effects layer */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="size-[620px] hiro-ring"></div>
          <div className="size-[820px] hiro-ring"></div>
          <div className="size-[1020px] hiro-ring"></div>
          <div className="size-[1220px] hiro-ring"></div>
          <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDurations="30s"
          shouldSpin
          spinDurations="6s"
        >
          <SparkleIcon className="size-8 text-sky-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDurations="32s"
          shouldSpin
          spinDurations="6s"
        >
          <SparkleIcon className="size-5 text-sky-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDurations="34s">
          <SparkleIcon className="size-2 rounded-full text-sky-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDurations="36s"
          shouldSpin
          spinDurations="6s"
        >
          <SparkleIcon className="size-10 text-sky-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDurations="38s"
          shouldSpin
          spinDurations="6s"
        >
          <StartIcon className="size-12 text-sky-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDurations="40s"
          shouldSpin
          spinDurations="6s"
        >
          <StartIcon className="size-8 text-sky-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDurations="42s"
          shouldSpin
          spinDurations="6s"
        >
          <SparkleIcon className="size-3 rounded-full text-sky-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDurations="44s"
          shouldSpin
          spinDurations="6s"
        >
          <SparkleIcon className="size-14 text-sky-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDurations="46s">
          <SparkleIcon className="size-3 rounded-full text-sky-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDurations="48s"
          shouldSpin
          spinDurations="6s"
        >
          <StartIcon className="size-28 text-sky-300" />
        </HeroOrbit>
        </div>

        {/* Content layer */}
        <div className="container relative">
          <div className="flex flex-col items-center">
            <Image
              src={IconAva}
              className="size-[100px] rounded-full"
              alt="person"
            />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-blue-500 size-2.5 rounded-full relative">
                <div className="bg-blue-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-sm font-medium">
                Available For New Project
              </div>
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">
              Building User Requirements With Commands
            </h1>
            <p className="mt-4 text-center text-white/60">
              Build Website & Premium Whatsapp Bot
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a 
              href="#Price"
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold">Explore Your Options</span>
              <ArrawDown className="size-4" />
            </a>
            <a
              href="#Contact"
              className="inline-flex items-center justify-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/90 transition-colors"
            >
              <span className="font-semibold">Get Started</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
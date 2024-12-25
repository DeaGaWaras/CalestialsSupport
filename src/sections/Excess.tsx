import {SectionHeader} from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import StartIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import  CheckCircle  from  "@/assets/icons/check-circle.svg";
import { title } from "process";

export const ExcessSection = () => {
  const benefits = [
    {
      title: "Selalu Aktif",
      description: "24 Jam Online"
    },
    {
      title: "Biaya Efektif",
      description: "Harga yang kompetitif dengan nilai maksimal untuk investasi Anda"
    },
    {
      title: "Jaminan Kualitas",
      description: "Pengujian ketat untuk memastikan produk Anda bebas bug dan andal"
    },
    {
      title: "Ramah Pengguna",
      description: "Desain intuitif untuk pengalaman pengguna yang mulus"
    },
    {
      title: "Bot WhatsApp",
      description: "Bot WhatsApp Serbaguna."
    },
    {
      title: "Fitur Lengkap",
      description: "Fitur RGB, Stiker, dan Lainnya." 
    }
  ];
  

  return (
    <section id="Feature">
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] ">
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
      <div className="container">
       <SectionHeader eyebrow="Feature" title="Your Benefits" deskription="Anda dapat menjelajahi fitur-fitur yang kami sediakan dengan menyenangkan dan masing-masing memiliki fungsinya sendiri."/>

        {/* Benefits Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="text-sky-500 size-6" />
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
              </div>
              <p className="text-white/60 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
    </section>
  );
};

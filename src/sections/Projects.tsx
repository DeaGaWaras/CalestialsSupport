import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import Image from "next/image";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import hadiah from "@/assets/images/hadiah.png";
import { px } from "framer-motion";

const portfolioProjects = [
  {
    company: "Calestials",
    year: "2024",
    title: "Paket Gratis",
    results: [
      { title: "Menggunakan Limit Harian" },
      { title: "Fitur Gratis Terbatas" },
      { title: "Akses Yang Lebih Kecil" },
    ],
    link: "https://api.whatsapp.com/send/?phone=6285785243511&text=.help",
    image: hadiah,
    opsi: "Gratis",
  },
  {
    company: "Calestials", //Art
    year: "2024",
    title: "Paket Premium", //Design & Art
    results: [
      { title: "Unlimited Limit & Request" },
      { title: "Tambahan Fitur Premium" },
      { title: "Prioritas Dukungan" },
    ],
    link: "https://api.whatsapp.com/send/?phone=6285785243511&text=.premium",
    image: hadiah,
    opsi: "5k - 50k",
  },
  {
    company: "Calestials Support",
    year: "2024",
    title: " Paket Website",
    results: [
      { title: "Pengalaman pengguna ditingkatkan sebesar 40%" },
      { title: "Meningkatkan kecepatan situs hingga 50%" },
      { title: "Peningkatan lalu lintas seluler sebesar 35%" },
    ],
    link: "https://api.whatsapp.com/send/?phone=6283117436733",
    image: hadiah,
    opsi: "Hubungi Kami",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="Price" className="pb-16 lg:py-24 ">
      <div className="container">
        <SectionHeader
          eyebrow="Reel-World Results"
          title="Pilih Kebutuhan Anda"
          deskription="Lihat Kartu Harga Untuk Pilihan Anda"
        />
        <div className="mt-10 md:mt-20  flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px`, }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-sky-300 to-emerald-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results?.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>{project.opsi}</span>
                      <ArrowUpRight />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

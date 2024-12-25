import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Instagram, Phone, Briefcase } from "lucide-react";

const footerSections = {
  product: {
    title: "Product",
    links: [
      { title: "Premium", href: "#Price" },
      { title: "Website", href: "#Price" },
      { title: "Website E-Commerce", href: "#Price" },
      { title: "Website Landing Page", href: "#Price" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { title: "Channel", href: "https://www.whatsapp.com/channel/0029VaAN3lwA89MeWkZE3I21" },
      { title: "Community", href: "https://chat.whatsapp.com/ClTnd1QeIxl5Kku29sRQhx" },
      { title: "Contact", href: "#Contact" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { title: "Calestials", href: "#" },
      { title: "FAQ", href: "#" },
      { title: "Terms of Service", href: "#" },
    ],
  },
};

const socialLinks = [
  { title: "Whatsapp", href: "https://api.whatsapp.com/send/?phone=6283117436733", icon: Phone },
  { title: "Instagram", href: "https://www.instagram.com/syh.radea/", icon: Instagram },
  { title: "Portfolio", href: "https://deapengenwaras.netlify.app/", icon: Briefcase },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-hidden">
      {/* Background gradient - kept behind content */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-sky-500/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      {/* Main content - now interactive */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white flex items-center gap-1 transition-colors duration-200 group"
                    >
                      <span>{link.title}</span>
                      <ArrowUpRightIcon className="size-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              Copyright © Calestials Support, Inc.
            </p>
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-200 group"
                    aria-label={link.title}
                  >
                    <Icon className="size-7 transition-transform group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

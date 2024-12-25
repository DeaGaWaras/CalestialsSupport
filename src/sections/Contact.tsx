import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section id="Contact">
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-sky-300 to-emerald-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Start Subscribing Now And Get Cool Features!
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ayo berlangganan di calestials dan temukan kesenangan.
              </p>
            </div>
            <div>
            <a href="https://api.whatsapp.com/send/?phone=6283117436733&text=Halo%20Calestials%20saya%20mau%20berlangganan%20fitur%20kalian">
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Get Started</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

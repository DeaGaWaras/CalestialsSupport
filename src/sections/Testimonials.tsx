import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import users from "@/assets/images/iconA.png";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Dava Tristiana",
    position: "Madiun, Indonesia",
    text: "Bot WhatsApp-nya sangat membantu, terutama fitur otomatisasi dan kemudahan aksesnya. Saya merasa investasi Premium sangat layak karena banyak fitur tambahan yang berguna. Namun, saya rasa respons waktu untuk beberapa fitur masih bisa lebih cepat lagi.",
    avatar: users,
    rate: "4.8 ⭐",
  },
  {
    name: "Aldy",
    position: "Surabaya, Indonesia",
    text: "Fitur-fitur Bot WhatsApp ini sangat lengkap, terutama menu RPG dan downloader-nya. Interface sederhana tapi fungsional. Saran saya, tambahkan lebih banyak pilihan integrasi dengan aplikasi lain agar lebih fleksibel.",
    avatar: users,
    rate: "4.9 ⭐",
  },
  {
    name: "Muhammad Rizky",
    position: "Bukit Tinggi, Indonesia",
    text: "Sebagai pengguna gratis, saya sangat puas dengan fitur dasar yang tersedia. Bot-nya stabil dan jarang ada error. Namun, untuk menarik lebih banyak pengguna, mungkin bisa ditambahkan promo atau akses trial fitur Premium.",
    avatar: users,
    rate: "5.0 ⭐",
  },
  {
    name: "Leonardo Kuawen",
    position: "Surakarta, Indonesia",
    text: "Bot ini luar biasa untuk penggunaan sehari-hari. Menu info dan tools sangat membantu. Tapi, saya merasa panduan penggunaannya bisa lebih detail, terutama untuk pengguna baru yang belum familiar.",
    avatar: users,
    rate: "4.8 ⭐",
  },
  {
    name: "Alpanuzi",
    position: "Jakarta, Indonesia",
    text: "Website-nya memiliki desain yang elegan dan modern, serta sangat responsif di perangkat mobile. Saya suka bagaimana menu dan kontennya tertata dengan baik. Mungkin bisa ditambahkan fitur pencarian atau filter untuk mempermudah navigasi.",
    avatar: users,
    rate: "5.0 ⭐",
  },
];

export const TestimonialsSection = () => {
  return (
      <section
      id="Testi"
    >
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="What Clients Say About Bot & Website"
          title="Digunakan Oleh Jutaan Pengguna"
          deskription="Ini adalah pendapat dari pelanggan kami yang telah bergabung dengan menggunakan fitur luar biasa ini."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div className="flex justify-between items-center gap-8 w-full">
                        <div className="flex-grow">
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                        <div className="text-sm text-white/40">
                          {testimonial.rate}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
      </section>
  );
};

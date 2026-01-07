import Aos from "aos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect } from "react";
import ScheduleButton from "@/Components/ScheduleButton";
import { useRouter } from "next/navigation";

export default function HomeSection() {
  const tHomeSection = useTranslations("HomeSection");
  const router = useRouter();

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  const items = [
    { id: 1, img: "/HomeSectionImages/item1.png" },
    { id: 2, img: "/HomeSectionImages/item2.png" },
    { id: 3, img: "/HomeSectionImages/item3.png" },
    { id: 4, img: "/HomeSectionImages/item4.png" },
    { id: 5, img: "/HomeSectionImages/item5.png" },
    { id: 6, img: "/HomeSectionImages/item6.png" },
  ];

  return (
    <div className="w-full md:py-12 flex flex-col justify-center">
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-lg font-bold md:text-center text-white"
      >
        {tHomeSection("title")}
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-2xl md:text-5xl font-semibold text-white md:text-center mt-4 md:mt-12"
      >
        {tHomeSection("description")}
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-white md:text-center mt-2 md:mt-4"
      >
        {tHomeSection("description2")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-y-24 gap-y-14 mt-24">
        {items.map((item, idx) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={idx * 250}
            className="bg-white/14 border border-white/47 px-4 md:py-20 py-5 flex items-start justify-center flex-col gap-2 rounded-lg relative z-100"
          >
            <Image
              src={item.img}
              alt={tHomeSection(`item${item.id}.title`)}
              width={124}
              height={117}
              className="absolute md:-top-16 -top-11 md:left-8 left-6 w-[60px] h-[60px] md:w-[124px] md:h-[117px]"
            />
            <h3 className="text-lg font-extrabold text-white">
              {tHomeSection(`item${item.id}.title`)}
            </h3>
            <p className="text-white">
              {tHomeSection(`item${item.id}.description`)}
            </p>
          </div>
        ))}
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="flex md:justify-center"
      >
        <ScheduleButton
          className="mt-4 md:mt-8"
          text={tHomeSection("buttonText")}
          onClick={() => router.push("/about")}
        />
      </div>
    </div>
  );
}

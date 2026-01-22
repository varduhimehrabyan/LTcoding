import Aos from "aos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect } from "react";

export default function HomeIndustry() {
  const tHomeIndustry = useTranslations("HomeIndustry");

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const items = [
    {
      id: 1,
      text: tHomeIndustry("item1.title"),
      img: "/HomeIndustry/item1.png",
    },
    {
      id: 2,
      text: tHomeIndustry("item2.title"),
      img: "/HomeIndustry/item2.png",
    },
    {
      id: 3,
      text: tHomeIndustry("item3.title"),
      img: "/HomeIndustry/item3.png",
    },
  ];

  return (
    <div className="w-full py-12">
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-2xl md:text-5xl font-semibold text-white md:text-center mt-4 md:mt-12"
      >
        {tHomeIndustry("description1")}
      </p>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-6 mt-8">
        {items.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={200 * item.id}
            className="flex flex-col gap-4 p-6"
          >
            <div className="relative md:w-[400px] md:h-[350px] h-[240px]">
              <Image
                src={item.img}
                alt="industry"
                fill
                className="object-contain"
              />
              <Image
                src="/HomeIndustry/arrow.png"
                alt="arrow"
                width={69}
                height={69}
                className="absolute bottom-2 md:right-0 right-6 md:w-[69px] w-[46px] md:h-[69px] h-[46px]"
              />
            </div>

            <p className="text-white font-medium md:text-2xl text-lg mt-2 px-4 md:px-0">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

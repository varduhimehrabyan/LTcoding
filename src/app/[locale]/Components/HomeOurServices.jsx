import Aos from "aos";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useEffect, useState, useRef } from "react";
import ScheduleButton from "@/Components/ScheduleButton";

export default function HomeOurServices() {
  const tHomeOurServices = useTranslations("HomeOurServices");
  const router = useRouter();

  useEffect(() => {
    Aos.init({ duration: 800, once: false, mirror: true });
  }, []);

  const items = [
    {
      id: 1,
      img: "/HomeOurServices/item1.png",
      title: tHomeOurServices("item1.title"),
      description: tHomeOurServices("item1.description"),
      count: "01",
    },
    {
      id: 2,
      img: "/HomeOurServices/item2.png",
      title: tHomeOurServices("item2.title"),
      description: tHomeOurServices("item2.description"),
      count: "02",
    },
    {
      id: 3,
      img: "/HomeOurServices/item3.png",
      title: tHomeOurServices("item3.title"),
      description: tHomeOurServices("item3.description"),
      count: "03",
    },
    {
      id: 4,
      img: "/HomeOurServices/item4.png",
      title: tHomeOurServices("item4.title"),
      description: tHomeOurServices("item4.description"),
      count: "04",
    },
    {
      id: 5,
      img: "/HomeOurServices/item5.png",
      title: tHomeOurServices("item5.title"),
      description: tHomeOurServices("item5.description"),
      count: "05",
    },
    {
      id: 6,
      img: "/HomeOurServices/item6.png",
      title: tHomeOurServices("item6.title"),
      description: tHomeOurServices("item6.description"),
      count: "06",
    },
    {
      id: 7,
      img: "/HomeOurServices/item7.png",
      title: tHomeOurServices("item7.title"),
      description: tHomeOurServices("item7.description"),
      count: "07",
    },
    {
      id: 8,
      img: "/HomeOurServices/item8.png",
      title: tHomeOurServices("item8.title"),
      description: tHomeOurServices("item8.description"),
      count: "08",
    },
  ];

  return (
    <div className="w-full py-20 text-white overflow-hidden">
      {/* Header Section */}
      <div className="mb-12">
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-lg font-bold md:text-center text-white"
        >
          {tHomeOurServices("title")}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl md:text-5xl font-semibold text-white md:text-center mt-4 md:mt-12"
        >
          {tHomeOurServices("description")}
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white md:text-center mt-2 md:mt-4"
        >
          {tHomeOurServices("description1")}
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-white md:text-center mt-4 md:mt-6"
        >
          {tHomeOurServices("description2")}
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative max-w-7xl mx-auto px-4">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20 -translate-x-1/2 z-0" />

        <div className="space-y-12">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`flex items-center w-full ${isLeft ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* 1. TEXT CAPSULE (45%) */}
                <div
                  className="w-full lg:w-[50%] px-6"
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                >
                  <div className="relative bg-white/10 border border-white/10 rounded-full p-6 py-4 flex items-center shadow-2xl backdrop-blur-md">
                    <div
                      className={`w-[6px] h-12 bg-white rounded-full mx-4 shadow-[0_0_15px_white] ${isLeft ? "order-last" : "order-first"}`}
                    />

                    <div
                      className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}
                    >
                      <h4 className="font-bold text-lg uppercase leading-tight text-white">
                        {item.title}
                      </h4>
                      <p className="text-[12px] text-white/60 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. CONNECTION LINE TO HEX (5%) */}
                <div className="w-[5%] flex items-center">
                  <div className="w-full h-[1px] bg-[#008081]" />
                </div>

                {/* 3. CENTRAL HEXAGON NODE (10%) */}
                <div className="w-[10%] flex justify-center relative z-10">
                  <div
                    className="w-20 h-24 bg-[#008081] flex items-center justify-center shadow-[0_0_30px_rgba(0,128,129,0.5)]"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <div
                      className="w-[88%] h-[88%] bg-[#0c1b2a] flex items-center justify-center"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                    >
                      <span className="text-2xl font-black text-white">
                        {item.count}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. CONNECTION LINE TO ICON (5%) */}
                <div className="w-[5%] flex items-center">
                  <div className="w-full h-[1px] bg-[#008081]" />
                </div>

                {/* 5. ICON CIRCLE (15% - Adjusted to be closer) */}
                <div
                  className="w-[5%] px-2 flex justify-center"
                  data-aos="zoom-in"
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center backdrop-blur-sm bg-white/50 rounded-sm transition-all cursor-pointer shadow-lg">
                    {/* <Image
                      src={item.img}
                      alt="Service Icon"
                      width={28}
                      height={28}
                      className="brightness-200 grayscale opacity-80"
                    /> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-8 px-6 relative">
        <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-[#008081]/30" />
        {items.map((item) => (
          <div key={item.id} className="relative pl-12" data-aos="fade-up">
            <div
              className="absolute left-[-16px] top-0 w-8 h-10 bg-[#008081] flex items-center justify-center font-bold text-xs"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              {item.count}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-teal font-bold text-sm uppercase">
                {item.title}
              </h4>
              <p className="text-white/50 text-xs mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="flex md:justify-center py-4 mt-10"
      >
        <ScheduleButton
          text={tHomeOurServices("buttonText")}
          onClick={() => router.push("/services")}
        />
      </div>
    </div>
  );
}

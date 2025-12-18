"use client";

import { useEffect } from "react";
import Aos from "aos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ScheduleButton from "@/Components/ScheduleButton";

import LampIcon from "@/images/icons/lamp.svg";
import MagnifyingGlassIcon from "@/images/icons/magnifying_glass.svg";
import HandSupportIcon from "@/images/icons/hand_support.svg";
import GrowthIcon from "@/images/icons/growth.svg";

export default function WhatSetsUsApart() {
  const t = useTranslations("AboutUs");
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  const items = [
    {
      icon: LampIcon,
      title: t("apartItem1.title"),
      description: t("apartItem1.description"),
    },
    {
      icon: MagnifyingGlassIcon,
      title: t("apartItem2.title"),
      description: t("apartItem2.description"),
    },
    {
      icon: HandSupportIcon,
      title: t("apartItem3.title"),
      description: t("apartItem3.description"),
    },
    {
      icon: GrowthIcon,
      title: t("apartItem4.title"),
      description: t("apartItem4.description"),
    },
  ];

  return (
    <div className="bg-chineseBlack w-full px-6 py-15 lg:px-20 2xl:px-60 flex flex-col items-center">
      <div className="container">
        <h3 className="text-4xl text-white font-bold text-center">
          {t("apartHeading")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full my-15">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 250}
                className="group flex flex-col items-center text-center p-5 rounded-xl bg-white/15 transition-all duration-300 hover:bg-white/25"
              >
                {/* Circle wrapper with background change on hover */}
                <div className="w-[100px] h-[100px] bg-brightGray group-hover:bg-teal flex items-center justify-center rounded-full transition-all duration-300">
                  {/* Icon - black by default, white on hover */}
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="brightness-0 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>

                {/* Title */}
                <h4 className="mt-4 text-white font-semibold text-lg">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="mt-2 text-white/70 text-sm 2xl:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-center text-2xl">{t("contactUsHeading")}</p>
        <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center mt-6">
          <ScheduleButton className="" text={t("contactUsBtnText")} />
        </div>
      </div>
    </div>
  );
}

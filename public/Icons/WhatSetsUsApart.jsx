import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { use } from "react";

export default function WhatSetsUsApart() {
  const t = useTranslations("AboutUs");

  const items = [
    {
      icon: "/Icons/lamp.svg",
      title: t("apartItem1.title"),
      description: t("apartItem1.description"),
    },
    {
      icon: "/Icons/magnifying_glass.svg",
      title: t("apartItem2.title"),
      description: t("apartItem2.description"),
    },
    {
      icon: "/Icons/hand_support.svg",
      title: t("apartItem3.title"),
      description: t("apartItem3.description"),
    },
    {
      icon: "/Icons/growth.svg",
      title: t("apartItem4.title"),
      description: t("apartItem4.description"),
    },
  ];
  return (
    <div className="bg-chineseBlack py-25 lg:px-20 2xl:px-80 flex flex-col justify-center items-center gap-13">
      <h3 className="text-4xl text-white font-bold">{t("apartHeading")}</h3>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-6 py-12 rounded-xl bg-white/15"
          >
            <div className={`relative w-[100px] h-[100px]`}>
              <div className="bg-brightGray w-[100px] h-[100px] flex justify-center items-center rounded-xl">
                <Image
                  src={item.icon}
                  width={100}
                  height={100}
                  alt="Lamp"
                  className="group-hover:invert transition"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

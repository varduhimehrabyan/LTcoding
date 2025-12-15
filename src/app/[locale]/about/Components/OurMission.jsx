"use client";

import { useEffect } from "react";
import Image from "next/image";
import code_image from "@/images/code_image.png";
import ScheduleButton from "@/Components/ScheduleButton";
import AOS from "aos";
import { useTranslations } from "next-intl";
import { use } from "react";

export default function OurMission() {
  const t = useTranslations("AboutUs");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col md:flex-row justify-between bg-darkGray py-25 2xl:px-80 gap-10 lg:px-20">
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-4">{t("missionHeading")}</h2>
        <p>{t("missionDescription")}</p>
        <div data-aos="fade-up" data-aos-delay="400" className="flex ">
          <ScheduleButton className="mt-4 md:mt-8" text={t("quoteBtnText")} />
        </div>
      </div>

      <div className="relative w-full max-w-[522px] aspect-[522/321] flex-shrink-0">
        <Image
          src={code_image}
          alt="code_image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

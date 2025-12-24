"use client";

import { useEffect } from "react";
import Image from "next/image";
import code_image from "@/images/code_image.png";
import ScheduleButton from "@/Components/ScheduleButton";
import AOS from "aos";
import { useTranslations } from "next-intl";

export default function OurMission() {
  const t = useTranslations("AboutUs");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center w-full bg-darkGray py-25 px-6">
      <div className="container">
        <div className="flex justify-between flex-col-reverse lg:flex-row gap-10 md:gap-0 items-center">
          <div>
            <h2 className="text-white text-4xl font-bold mb-4">{t("missionHeading")}</h2>
            <p className="text-white mt-4 max-w-6xl mx-auto">
              {t("missionDescription")}
            </p>
            <div data-aos="fade-up" data-aos-delay="400" className="flex">
              <ScheduleButton
                className="mt-4 md:mt-8"
                text={t("quoteBtnText")}
              />
            </div>
          </div>
          <div className="relative w-screen lg:w-full lg:max-w-[522px] aspect-[522/321] flex-shrink-0 -mx-6 lg:mx-0">
            <Image
              src={code_image}
              alt="code_image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

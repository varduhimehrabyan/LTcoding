"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import ScheduleButton from "@/Components/ScheduleButton";
import AOS from "aos";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";

export default function Suggestion() {
  const t = useTranslations("Services");
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="bg-chineseBlack text-white py-20 px-6 overflow-hidden">
      <div className="container">
        {" "}
        <div className="flex justify-center">
          <SplitText
            text={t("startText")}
            delay={100}
            animateBy="words"
            direction="top"
            className="text-3xl text-center font-bold"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex justify-center"
        >
          <ScheduleButton className="mt-4 md:mt-8" text={t("requestBtnText")} />
        </div>
      </div>
    </div>
  );
}

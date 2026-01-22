"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import ScheduleButton from "@/Components/ScheduleButton";
import AOS from "aos";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import { useRouter } from "next/navigation";

export default function Suggestion() {
  const t = useTranslations("Services");
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="bg-chineseBlack text-white py-20 px-6 overflow-hidden">
      {" "}
      <div className="flex justify-center">
        <SplitText
          text={t("startText")}
          delay={50}
          animateBy="words"
          direction="top"
          className="text-lg lg:text-3xl text-center font-bold text-white"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="flex justify-center"
      >
        <ScheduleButton
          className="mt-4 md:mt-8"
          text={t("requestBtnText")}
          onClick={() => router.push("/request-proposal")}
        />
      </div>
    </div>
  );
}

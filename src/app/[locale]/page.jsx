"use client";

import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import ScheduleButton from "@/Components/ScheduleButton";
import { useTranslations } from "next-intl";
import AOS from "aos";
import { useEffect, useState } from "react";
import HomeOurServices from "./Components/HomeOurServices";
import HomeOurClients from "./Components/HomeOurClients";
import HomeTestimonials from "./Components/HomeTestimonials";
import HomeIndustry from "./Components/HomeIndustry";
import { useRouter } from "next/navigation";
import HomeOurAdvantages from "./Components/HomeOurAdventages";
import Threads from "@/blocks/Backgrounds/Threads";

export default function HomePage() {
  const tHero = useTranslations("HeroContent");
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      // duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[600px] relative py-12">
        <div className="z-10 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-6">
          <BlurText
            text={tHero("title")}
            delay={100}
            animateBy="words"
            direction="top"
            className="text-xl md:text-3xl font-bold text-center text-teal"
          />
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-2xl md:text-5xl font-semibold text-white text-center mt-5 md:mt-12">
              {tHero("description1")}
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="250">
            <p className="text-white text-center mt-2 md:mt-4">
              {tHero("description2")}
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="350">
            <ScheduleButton
              className="mt-4 md:mt-8"
              text={tHero("buttonText")}
              onClick={() => router.push("/book-call")}
            />
          </div>
        </div>
      </div>
      <HomeOurAdvantages />
      <HomeOurServices />
      <div className="container">
        <HomeOurClients />
        <HomeTestimonials containerClass="py-12" />
        {/* <HomeIndustry /> */}{" "}
        {/* Temporarily removed , will be added back in the future for blog*/}
      </div>
    </div>
  );
}

"use client"
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import ScheduleButton from "@/Components/ScheduleButton";
import { useTranslations } from "next-intl";
import AOS from 'aos';
import { useEffect } from 'react';
import HomeSection from "./Components/HomeSection";
import HomeOurServices from "./Components/HomeOurServices";
import HomeOurClients from "./Components/HomeOurClients";
import HomeTestimonials from "./Components/HomeTestimonials";
import HomeIndustry from "./Components/HomeIndustry";


export default function HomePage() {
  const tHero = useTranslations("HeroContent");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center md:h-screen py-12">
          <BlurText
            text={tHero("title")}
            delay={100}
            animateBy="words"
            direction="top"
            className="text-xl md:text-3xl font-bold text-center text-teal"
          />
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-2xl md:text-5xl font-semibold text-white text-center mt-4 md:mt-12">
              {tHero("description1")}
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="250">
            <p className="text-white text-center mt-2 md:mt-4">{tHero("description2")}</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="350">
            <ScheduleButton className="mt-4 md:mt-8" text={tHero("buttonText")} />
          </div>
        </div>
        <HomeSection />
        <HomeOurServices />
        <HomeOurClients />
        <HomeTestimonials />
        <HomeIndustry />
      </div>
    </div>
  );
}
"use client";
import { useTranslations } from "next-intl";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import HomeOurClients from "../Components/HomeOurClients";
import HomeTestimonials from "../Components/HomeTestimonials";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import ScheduleButton from "@/Components/ScheduleButton";
import AOS from "aos";
import { useEffect } from "react";

export default function Portfolio() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center px-5 lg:p-20">
      <div className="container">
        <div className="py-20">
          <BlurText
            text={t("Portfolio.title")}
            delay={100}
            animateBy="letters"
            direction="top"
            className="text-lg text-center text-teal font-extrabold"
          />
          <BlurText
            text={t("Portfolio.heading")}
            delay={200}
            animateBy="words"
            direction="top"
            className="mt-4 text-center mx-auto text-xl lg:text-5xl"
          />
          <BlurText
            text={t("Portfolio.description")}
            delay={50}
            animateBy="words"
            direction="top"
            className="mt-6 text-center mx-auto lg:text-lg text-sm"
          />
        </div>
        <div className="py-20">
          <HomeOurClients
            exploreButtonNeeded={false}
            readMoreButtonNeeded={false}
          />
        </div>
        <div className="lg:py-15">
          <BlurText
            text={t("Portfolio.testimonials")}
            delay={100}
            animateBy="letters"
            direction="bottom"
            className="text-center mx-auto lg:text-lg text-sm text-colorBlue"
          />
          <HomeTestimonials
            containerClass="py-0"
            headerText={t("Portfolio.peopleReviewText")}
          />
        </div>
        <div className="mt-8 text-center flex justify-center">
          <div className="lg:text-end lg:w-1/2 text-start">
            <SplitText
              text={t("Portfolio.whyChooseUs")}
              delay={100}
              animateBy="words"
              direction="top"
              className="text-4xl lg:text-7xl text-center text-lightGray font-extrabold lg:h-30"
            />
            <p className="text-lg mt-10 font-bold">
              {t("Portfolio.reason.title")}
            </p>
            <p className="mt-4 text-base">
              {t("Portfolio.reason.description")}
            </p>
          </div>
        </div>
        <div
          className="bg-chineseBlack rounded-xl my-20 p-5 lg:p-20"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <h3 className="text-xl lg:text-4xl font-bold text-center mb-5">
            {t("Portfolio.requestingText")}
          </h3>
          <div
            data-aos="fade-down"
            data-aos-delay="350"
            className="flex justify-center"
          >
            <ScheduleButton
              className="mt-4 md:mt-8"
              text={t("Portfolio.requestBtnText")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

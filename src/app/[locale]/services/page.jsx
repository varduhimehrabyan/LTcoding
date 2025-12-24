import React from "react";
import ServicesList from "./Components/ServicesList";
import Suggestion from "./Components/Suggestion";
import { useTranslations } from "next-intl";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";

export default function Services() {
  const t = useTranslations("Services");
  return (
    <div>
      <div className="flex flex-col items-center w-full py-20 px-6">
        <div className="container">
          <div className="flex justify-center">
            <BlurText
              text={t("title")}
              delay={50}
              animateBy="words"
              direction="top"
              className="text-3xl text-center font-bold"
            />
          </div>
          <BlurText
            text={t("description")}
            delay={100}
            animateBy="words"
            direction="top"
            className="mt-4 text-center mx-auto text-base"
          />
        </div>
      </div>
      <ServicesList />
      <Suggestion />
    </div>
  );
}

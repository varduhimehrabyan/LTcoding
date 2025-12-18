import React from "react";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import { useTranslations } from "next-intl";

export default function AboutPartnership() {
  const t = useTranslations("AboutUs");

  return (
    <div className="flex flex-col items-center w-full py-25 px-6">
      <div className="container">
        <div className="flex justify-center">
          <SplitText
            text={t("companyName")}
            delay={100}
            animateBy="words"
            direction="top"
            className="text-2xl text-center textPrimaryColor font-extrabold"
          />
        </div>
        <h1 className="text-4xl font-bold text-center text-white my-6">
          {t("partnershipHeading")}
        </h1>
        <p className="text-center text-white mx-auto">
          {t("partnershipDescription")}
        </p>
      </div>
    </div>
  );
}

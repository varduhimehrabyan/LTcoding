import React from "react";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import { useTranslations } from "next-intl";
import { use } from "react";

export default function AboutPartnership() {
  const t = useTranslations("AboutUs");

  return (
    <div className="flex flex-col items-center justify-center py-25">
      <SplitText
        text={t("companyName")}
        delay={100}
        animateBy="words"
        direction="top"
        className="text-lg textPrimaryColor font-extrabold"
      />
      <h1 className="text-4xl font-bold text-white mt-4">
        {t("partnershipHeading")}
      </h1>
      <p className="text-center text-white mt-4 max-w-6xl">
        {t("partnershipDescription")}
      </p>
    </div>
  );
}

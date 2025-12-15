import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { use } from "react";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import AboutPartnership from "./Components/AboutPartnership";
import OurMission from "./Components/OurMission";
import WhatSetsUsApart from "./Components/WhatSetsUsApart";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const t = await getTranslations({
    locale: locale,
    namespace: "PageLayoutTitle",
  });

  return {
    title: t.raw("about"),
  };
}

export default function AboutUs({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("AboutUs");

  return (
    <div className="">
      <AboutPartnership />
      <OurMission />
      <WhatSetsUsApart />
    </div>
  );
}

import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { use } from "react";
import AboutPartnership from "./Components/AboutPartnership";
import OurMission from "./Components/OurMission";
import WhatSetsUsApart from "./Components/WhatSetsUsApart";
import OurTeam from "./Components/OurTeam";
import FromCEO from "./Components/FromCEO";

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
    <div>
      <AboutPartnership />
      <OurMission />
      <WhatSetsUsApart />
      <OurTeam />
      <FromCEO />
    </div>
  );
}

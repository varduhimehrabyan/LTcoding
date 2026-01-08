import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { use } from "react";
import AboutPartnership from "./Components/AboutPartnership";
import OurMission from "./Components/OurMission";
import WhatSetsUsApart from "./Components/WhatSetsUsApart";
import OurTeam from "./Components/OurTeam";
import FromCEO from "./Components/FromCEO";

export default function AboutUs() {
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

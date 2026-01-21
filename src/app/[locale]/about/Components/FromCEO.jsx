import Image from "next/image";
import React from "react";
import cofaunderImage from "@/images/cofounder.jpg";
import { useTranslations } from "next-intl";

export default function FromCEO() {
  const t = useTranslations("AboutUs");

  return (
    <div className="flex bg-chineseBlack flex-col items-center w-full py-25 px-6">
      <div className="container">
        <div className="flex flex-col justify-between lg:flex-row gap-10 md:gap-10 items-center">
          <div className="relative rounded-xl w-screen lg:w-full lg:max-w-[522px] aspect-[522/321] flex-shrink-0 -mx-6 lg:mx-0">
            <Image
              src={cofaunderImage}
              alt="cofounder image"
              fill
              className="object-contain rounded-xl"
            />
          </div>
          <div className="">
            <h3 className="text-lg lg:text-4xl font-bold text-white">
              {t("messageFromCEO")}
            </h3>
            <p className="text-sm lg:text-base text-white mt-6">
              {t("ceoMessage")}
            </p>
            <p className="mt-6 text-white flex gap-3 lg:gap-5 flex-col lg:flex">
              <span className="text-sm lg:text-4xl italic text-white">
                {t("ceoName")}
              </span>
              <span className="text-sm lg:text-2xl font-bold text-white">
                {t("ceoTitle")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

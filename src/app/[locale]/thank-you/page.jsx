"use client";

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function ThankYou() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const namespaceMap = {
    "book-call": "BookCall",
    "application-form": "RequestProposal",
  };

  const namespace = namespaceMap[from] ?? "RequestProposal";

  const t = useTranslations(`${namespace}.thankYou`);

  return (
    <div className="bg-chineseBlack text-white py-20 px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-xl lg:text-4xl font-bold">{t("title")}</h1>
        <p className="mt-4 text-sm md:text-base w-full lg:w-1/2">
          {t("description")}
        </p>
      </div>
    </div>
  );
}

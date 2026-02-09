"use client";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { use } from "react";

export default function ApplicationForm({ params }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg text-teal">{t("applicationForm")}</p>
    </div>
  );
}

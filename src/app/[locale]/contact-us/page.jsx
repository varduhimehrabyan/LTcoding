import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { use } from "react";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const t = await getTranslations({
    locale: locale,
    namespace: "PageLayoutTitle",
  });

  return {
    title: t.raw("contactUs"),
  };
}

export default function ContactUs({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("Navigation");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg text-teal">{t("contactUs")}</p>
    </div>
  );
}

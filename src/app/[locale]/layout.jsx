import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getTranslations,
  setRequestLocale,
  getMessages,
} from "next-intl/server";
import { Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import HomeNewsletter from "./Components/HomeNewsletter";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale,
    namespace: "PageLayoutTitle",
  });

  return {
    title: t.raw("home"),
  };
}

export default async function LocaleLayout({ children, params }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="w-full bg-black min-h-screen">
        <Header />
        <main className="z-[1000]">{children}</main>
        <HomeNewsletter />
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}

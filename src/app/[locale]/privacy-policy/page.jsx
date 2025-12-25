import React from "react";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("Privacy");
  const items = t.raw("items");
  return (
    <div className="flex flex-col items-center px-5 lg:p-20">
      <div className="container">
        <h1 className="text-lg lg:text-3xl font-bold text-center text-white mt-10">
          {t("title")}
        </h1>
      </div>
      <div className="container text-sm lg:text-2xl text-white">
        <p className="mt-6 lg:mt-20">{t("description")}</p>

        <div className="mt-10 space-y-12">
          {items.map((item, index) => (
            <section key={index} className="">
              <h2 className="font-bold mb-4">
                {index + 1}. {item.title}
              </h2>

              <p className="mb-4">{item.description}</p>

              {item.items && (
                <ul className="list-disc ml-8 space-y-2">
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="font-medium">
                      <span className="">{subItem}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div>
          <p className="my-8">Email: info@lt-coding.com</p>
          <p>Phone: +374 (93) 74-47-55</p>
          <p className="my-10">{t("summary")}</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useTranslations } from "next-intl";
import landingIcon from "@/images/icons/landing.svg";
import customCMSIcon from "@/images/icons/custom_cms.svg";
import eCommerceIcon from "@/images/icons/e_commerce.svg";
import corporateIcon from "@/images/icons/corporate.svg";
import portfolioIcon from "@/images/icons/portfolio.svg";
import blogIcon from "@/images/icons/blog.svg";
import educationalIcon from "@/images/icons/educational.svg";
import eventIcon from "@/images/icons/event.svg";
import Image from "next/image";

export default function ServicesList() {
  const t = useTranslations("Services");

  const services = [
    {
      id: "01",
      title: t("landing.title"),
      description: t("landing.description"),
      icon: landingIcon,
      items: [
        {
          title: t("landing.items.item1.title"),
          description: t("landing.items.item1.description"),
        },
        {
          title: t("landing.items.item2.title"),
          description: t("landing.items.item2.description"),
        },
        {
          title: t("landing.items.item3.title"),
          description: t("landing.items.item3.description"),
        },
      ],
    },
    {
      id: "02",
      title: t("customCMS.title"),
      description: t("customCMS.description"),
      icon: customCMSIcon,
      items: [
        {
          title: t("customCMS.items.item1.title"),
          description: t("customCMS.items.item1.description"),
        },
        {
          title: t("customCMS.items.item2.title"),
          description: t("customCMS.items.item2.description"),
        },
        {
          title: t("customCMS.items.item3.title"),
          description: t("customCMS.items.item3.description"),
        },
      ],
    },
    {
      id: "03",
      title: t("eCommerce.title"),
      description: t("eCommerce.description"),
      icon: eCommerceIcon,
      items: [
        {
          title: t("eCommerce.items.item1.title"),
          description: t("eCommerce.items.item1.description"),
        },
        {
          title: t("eCommerce.items.item2.title"),
          description: t("eCommerce.items.item2.description"),
        },
        {
          title: t("eCommerce.items.item3.title"),
          description: t("eCommerce.items.item3.description"),
        },
      ],
    },
    {
      id: "04",
      title: t("corporate.title"),
      description: t("corporate.description"),
      icon: corporateIcon,
      items: [
        {
          title: t("corporate.items.item1.title"),
          description: t("corporate.items.item1.description"),
        },
        {
          title: t("corporate.items.item2.title"),
          description: t("corporate.items.item2.description"),
        },
        {
          title: t("corporate.items.item3.title"),
          description: t("corporate.items.item3.description"),
        },
      ],
    },
    {
      id: "05",
      title: t("portfolio.title"),
      description: t("portfolio.description"),
      icon: portfolioIcon,
      items: [
        {
          title: t("portfolio.items.item1.title"),
          description: t("portfolio.items.item1.description"),
        },
        {
          title: t("portfolio.items.item2.title"),
          description: t("portfolio.items.item2.description"),
        },
        {
          title: t("portfolio.items.item3.title"),
          description: t("portfolio.items.item3.description"),
        },
      ],
    },
    {
      id: "06",
      title: t("blog.title"),
      description: t("blog.description"),
      icon: blogIcon,
      items: [
        {
          title: t("blog.items.item1.title"),
          description: t("blog.items.item1.description"),
        },
        {
          title: t("blog.items.item2.title"),
          description: t("blog.items.item2.description"),
        },
        {
          title: t("blog.items.item3.title"),
          description: t("blog.items.item3.description"),
        },
      ],
    },
    {
      id: "07",
      title: t("educational.title"),
      description: t("educational.description"),
      icon: educationalIcon,
      items: [
        {
          title: t("educational.items.item1.title"),
          description: t("educational.items.item1.description"),
        },
        {
          title: t("educational.items.item2.title"),
          description: t("educational.items.item2.description"),
        },
        {
          title: t("educational.items.item3.title"),
          description: t("educational.items.item3.description"),
        },
      ],
    },
    {
      id: "08",
      title: t("event.title"),
      description: t("event.description"),
      icon: eventIcon,
      items: [
        {
          title: t("event.items.item1.title"),
          description: t("event.items.item1.description"),
        },
        {
          title: t("event.items.item2.title"),
          description: t("event.items.item2.description"),
        },
        {
          title: t("event.items.item3.title"),
          description: t("event.items.item3.description"),
        },
      ],
    },
  ];
  return (
    <div className="text-white py-20 px-6 lg:px-20 overflow-hidden">
      <div className="container space-y-32">
        {services.map((service) => (
          <div
            key={service.id}
            className="group flex flex-col md:flex-row gap-16 even:md:flex-row-reverse"
          >
            <div className="flex-1 space-y-6">
              <div className="flex gap-4 md:group-even:flex-row-reverse md:group-even:text-right">
                <span className="text-lightGray font-mono text-5xl font-bold shrink-0">
                  {service.id}
                </span>
                <h2 className="text-4xl font-bold tracking-tight w-full">
                  {service.title}
                  <div className="flex md:group-even:justify-end mt-6">
                    <p className="text-lightGray text-base max-w-md">
                      {service.description}
                    </p>
                  </div>
                </h2>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-6 w-full relative">
              <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full" />

              {service.items.map((item, idx) => (
                <div
                  key={idx}
                  className="relative z-10 border border-white/10 p-8 rounded-2xl transition-all duration-300 hover:border-colorBlue/50 hover:translate-y-[-4px]"
                >
                  <div className="w-16 h-16 p-4 relative bg-colorBlue rounded-full mb-6 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="brightness-0 invert transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-bold text-lg uppercase tracking-widest text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

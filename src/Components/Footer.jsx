"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  const t = useTranslations("Footer");

  const contactInfo = [
    { label: "+374 (93) 74-47-55", icon: "/Icons/telephone.svg", alt: "Phone" },
    { label: "info@lt-coding.com", icon: "/Icons/email.svg", alt: "Email" },
    { label: t("address"), icon: "/Icons/location.svg", alt: "Location" },
  ];

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("job"), href: "/jobs" },
    { label: t("about"), href: "/about" },
    { label: t("blog"), href: "/blog" },
    { label: t("services"), href: "/services" },
    { label: t("applicationForm"), href: "/application-form" },
    { label: t("portfolio"), href: "/portfolio" },
    { label: t("applicationForm"), href: "/application-form" },
    { label: t("contactUs"), href: "/contact-us" },
  ];

  const socialMediaIcons = [
    { label: "Facebook", icon: "/Icons/facebook.svg" },
    { label: "Twitter", icon: "/Icons/twitter.svg" },
    { label: "Instagram", icon: "/Icons/instagram.svg" },
    { label: "LinkedIn", icon: "/Icons/linkedin.svg" },
  ];

  return (
    <footer className="2xl:py-20 2xl:pl-80 2xl:pr-50 md:py-40 md:px-20 py-10 px-5">
      <div className="">
        <div className="flex justify-between flex-col md:flex-row items-center">
          <div className="flex flex-col gap-7">
            <div className="relative w-30 h-30">
              <Image
                src="/Icons/Logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <ul className="space-y-7">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-1">
                  <div className="relative h-5 w-5">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-9 w-1/3 pt-5">
            <div className="">
              <p>{t("quickLinks")}</p>
            </div>
            <nav>
              <ul className="grid grid-cols-2 gap-4">
                {quickLinks.map((item, index) => (
                  <li key={index} className="">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="w-1/3 pt-10 flex flex-col gap-11">
            <p>{t("aboutText")}</p>
            <div className="flex gap-4">
              {socialMediaIcons.map((item, index) => (
                <div
                  className="w-13 h-13 rounded-full bg-lightGray cursor-pointer flex justify-center items-center"
                  key={index}
                >
                  <div key={index} className="relative h-6 w-6">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full border-t border-white mt-4 py-5 px-3 flex justify-between">
          <p>{t("copyright")}</p>
          <p>{t("privacyPolicy")}</p>
        </div>
      </div>
    </footer>
  );
}

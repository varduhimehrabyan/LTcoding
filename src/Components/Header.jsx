"use client";
import React, { useState } from "react";
import GooeyNav from "@/blocks/Components/GooeyNav/GooeyNav";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Navigation");
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("services"), href: "/services" },
    { label: t("portfolio"), href: "/portfolio" },
    { label: t("faq"), href: "/faq" },
    { label: t("blog"), href: "/blog" },
    { label: t("applicationForm"), href: "/application-form" },
    { label: t("contactUs"), href: "/contact-us" },
  ];

  return (
    // <header className="fixed top-2 left-0 right-0 z-50 text-white">
    <header className="py-4 top-2 left-0 right-0 z-50 text-white">
      <div className="px-4 flex items-center justify-between">
        {/* Logo - Smaller on mobile */}
        <div
          className="relative h-16 w-24 md:h-20 md:w-32 cursor-pointer z-10"
          onClick={() => router.push("/")}
        >
          <Image
            src="/Icons/Logo.svg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden xl:block">
          <GooeyNav items={navItems} />
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <div>
          <button
            className="xl:hidden flex flex-col justify-center items-center space-y-1 p-3 z-10 relative secondaryColorLinear rounded-full w-12 h-12"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>

        {/* Desktop Language Switcher */}
        <div className="hidden xl:block">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
         xl:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] 
        bg-gray-900/95 backdrop-blur-md transform transition-transform duration-300 z-50
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="p-6">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white text-lg hover:text-gray-300 transition-colors duration-200 py-3 border-b border-gray-700/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Language Switcher */}
          <div className="mt-8">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

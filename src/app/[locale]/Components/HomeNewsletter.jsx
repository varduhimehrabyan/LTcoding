"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function HomeNewsletter() {
  const tHomeNewsletter = useTranslations("HomeNewsletter");
  const tHomeSendEmail = useTranslations("HomeSendEmail");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSend = async () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      toast.error(tHomeSendEmail("enterEmail"));
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      toast.error(tHomeSendEmail("notValidEmail"));
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/send-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(tHomeSendEmail("success"));
        setEmail("");
      } else {
        toast.error(data.message || tHomeSendEmail("failedToSend"));
        console.error("Server error:", data);
      }
    } catch (err) {
      console.error("Network error:", err);
      toast.error(tHomeSendEmail("networkError"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) handleSend();
  };

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <div
        className="w-full h-96 z-10 flex items-center justify-center px-3"
        style={{
          background: "linear-gradient(180deg, #0C1682 0%, #6201FA 100%)",
        }}
      >
        <div className="container text-white px-60">
          <div className="w-3/4">
            <p className="font-bold md:text-3xl text-xl">
              {tHomeNewsletter("title")}
            </p>
            <p className="font-bold mt-4">{tHomeNewsletter("description1")}</p>
            <p>{tHomeNewsletter("description2")}</p>
            <div className="mt-6 flex items-center text-black justify-between w-full bg-white rounded-full p-3">
              <input
                id="email"
                type="email"
                placeholder={tHomeNewsletter("email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="flex-1 outline-none bg-transparent px-2 text-black disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className={`cursor-pointer ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-105"
                }`}
              >
                <Image
                  src="/Icons/SendIcon.png"
                  alt="send"
                  width={48}
                  height={48}
                  className="transition-transform duration-300 ease-in-out "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

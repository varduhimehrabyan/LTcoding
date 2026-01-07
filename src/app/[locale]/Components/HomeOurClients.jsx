"use client";
import Aos from "aos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect } from "react";
import ScheduleButton from "@/Components/ScheduleButton";
import { useRouter } from "next/navigation";

export default function HomeOurClients({
  exploreButtonNeeded = true,
  readMoreButtonNeeded = true,
}) {
  const router = useRouter();

  const tHomeOurClients = useTranslations("HomeOurClients");

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  const items = [
    {
      id: 1,
      img: "/HomeOurClients/item1.png",
      title: tHomeOurClients("item1.title"),
      description: tHomeOurClients("item1.description"),
      buttonText: tHomeOurClients("item1.buttonText"),
    },
    {
      id: 2,
      img: "/HomeOurClients/item2.png",
      title: tHomeOurClients("item2.title"),
      description: tHomeOurClients("item2.description"),
      buttonText: tHomeOurClients("item2.buttonText"),
    },
    {
      id: 3,
      img: "/HomeOurClients/item3.png",
      title: tHomeOurClients("item3.title"),
      description: tHomeOurClients("item3.description"),
      buttonText: tHomeOurClients("item3.buttonText"),
    },
    {
      id: 4,
      img: "/HomeOurClients/item4.png",
      title: tHomeOurClients("item4.title"),
      description: tHomeOurClients("item4.description"),
      buttonText: tHomeOurClients("item4.buttonText"),
    },
    {
      id: 5,
      img: "/HomeOurClients/item5.png",
      title: tHomeOurClients("item5.title"),
      description: tHomeOurClients("item5.description"),
      buttonText: tHomeOurClients("item5.buttonText"),
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="container">
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-lg font-bold md:text-center text-white"
        >
          {tHomeOurClients("title")}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl md:text-5xl font-semibold text-white md:text-center mt-4 md:mt-12"
        >
          {tHomeOurClients("description1")}
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white md:text-center mt-2 md:mt-4"
        >
          {tHomeOurClients("description2")}
        </p>

        <div className="flex flex-col gap-8 mt-8">
          {items.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
              className="relative w-full md:max-h-96 overflow-hidden rounded-lg"
            >
              {/* Image */}
              <Image
                src={item.img}
                alt={`Item ${item.id}`}
                width={1920}
                height={1080}
                className="w-full h-60 md:h-96 object-cover"
              />

              {/* Overlay content */}
              <div className="absolute inset-0 flex items-end md:items-center">
                <div className="p-4 md:p-10 w-full md:w-auto md:max-w-lg rounded-b-lg md:rounded-r-lg">
                  <h3 className="text-lg md:text-3xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white mt-2 md:mt-4">
                    {item.description}
                  </p>
                  {/* {readMoreButtonNeeded && (
                    <ScheduleButton
                      className="mt-3 md:mt-6"
                      text={item.buttonText}
                    />
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {exploreButtonNeeded && (
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex md:justify-center"
          >
            <ScheduleButton
              className="mt-6 md:mt-12"
              text={tHomeOurClients("buttonText")}
              onClick={() => router.push("/portfolio")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

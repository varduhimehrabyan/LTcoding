import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import cofaunderImage from "@/images/cofounder.jpg";

export default function OurTeam() {
  const t = useTranslations("AboutUs");

  const teammembers = [
    { name: "Liana Tsaturyan", role: "CEO", picture: cofaunderImage },
    { name: "Varduhi Meharabyan", role: "Full Stack Developer", picture: null },
    { name: "Artyom Gishyan", role: "Frontend Developer", picture: null },
    { name: "Inesa Baghinyan", role: " Project Manager", picture: null },
  ];

  return (
    <div className="flex flex-col items-center w-full py-25 px-6">
      <div className="container">
        <h3 className="text-white text-4xl text-center font-bold">
          {t("ourTeam")}
        </h3>
        <p className="text-white text-base mt-6 text-center">
          {t("teamDescription")}
        </p>
        <div className="flex flex-wrap gap-20 justify-center mt-10">
          {teammembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center mt-3 lg:mt-10"
            >
              <div
                className={`relative group flex justify-center items-center flex-col`}
              >
                {member.picture ? (
                  <div className="relative z-50 w-40 h-40 rounded-full overflow-hidden mb-4">
                    <Image src={member.picture} alt={member.name} fill />
                  </div>
                ) : (
                  <div
                    className={`z-50 w-40 h-40 rounded-full overflow-hidden mb-4 bg-gradient-to-br from-colorBlue to-darkBlue flex items-center justify-center`}
                  >
                    <span className="text-white text-5xl font-bold">
                      {member.name?.charAt(0)}
                    </span>
                  </div>
                )}
                <div
                  className={`rounded-xl px-8 py-10 text-center shadow-xl
                  transition-transform duration-300 hover:scale-105
                  -mt-16 relative z-10 min-w-[220px] ${
                    member.role === "CEO" && "bg-white/[0.66]"
                  }
                `}
                >
                  <h4 className="text-lg text-white font-extrabold mt-4">
                    {member.name}
                  </h4>
                  <p className="text-white mt-3">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

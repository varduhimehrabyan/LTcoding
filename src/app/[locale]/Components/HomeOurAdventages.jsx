import Aos from "aos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect } from "react";
import ScheduleButton from "@/Components/ScheduleButton";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HomeOurAdvantages() {
  const tHomeSection = useTranslations("HomeSection");
  const router = useRouter();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const items = [
    { id: 1, img: "/HomeSectionImages/item1.png" },
    { id: 2, img: "/HomeSectionImages/item2.png" },
    { id: 3, img: "/HomeSectionImages/item3.png" },
    { id: 4, img: "/HomeSectionImages/item4.png" },
    { id: 5, img: "/HomeSectionImages/item5.png" },
    { id: 6, img: "/HomeSectionImages/item6.png" },
  ];

  // SVG Constants for Desktop
  const canvasWidth = 2600;
  const canvasHeight = 1400;
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;
  const radiusX = 750;
  const radiusY = 480;
  const sideAngles = [240, 180, 120, 60, 0, 300];

  return (
    <div className="w-full py-20 flex flex-col justify-center overflow-hidden bg-[#030712]">
      {/* Header Section */}
      <div className="z-10 relative flex flex-col items-center text-center mb-16 px-6">
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-lg font-bold text-white uppercase tracking-wider"
        >
          {tHomeSection("title")}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl md:text-5xl font-semibold text-white mt-4 md:mt-12 max-w-4xl"
        >
          {tHomeSection("description")}
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-400 mt-4 max-w-2xl"
        >
          {tHomeSection("description2")}
        </p>
      </div>

      {/* --- MOBILE VERSION --- */}
      <div className="lg:hidden flex flex-col items-center gap-12 px-6 relative">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center group"
          >
            <h3 className="text-white text-xl font-bold uppercase mb-2">
              {tHomeSection(`item${item.id}.title`)}
            </h3>
            <div className="h-[2px] w-12 bg-[#008081] mb-3" />
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              {tHomeSection(`item${item.id}.description`)}
            </p>
          </motion.div>
        ))}
      </div>

      {/* --- DESKTOP VERSION (Hidden on small screens) --- */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="hidden lg:flex relative justify-center items-center select-none px-20"
      >
        <svg
          viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
          className="w-full max-w-[1700px] h-auto overflow-visible"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {items.map((item, idx) => {
            const angle = sideAngles[idx];
            const angleRad = (angle * Math.PI) / 180;
            const x2 = centerX + radiusX * Math.cos(angleRad);
            const y2 = centerY + radiusY * Math.sin(angleRad);
            const isRightSide = x2 > centerX;

            const startOffset = 160;
            const endOffset = 90;
            const lineX1 = centerX + startOffset * Math.cos(angleRad);
            const lineY1 = centerY + startOffset * Math.sin(angleRad);
            const lineX2 = centerX + (radiusX - endOffset) * Math.cos(angleRad);
            const lineY2 = centerY + (radiusY - endOffset) * Math.sin(angleRad);

            return (
              <g key={item.id}>
                <motion.line
                  x1={lineX1}
                  y1={lineY1}
                  x2={lineX2}
                  y2={lineY2}
                  stroke="#008081"
                  strokeWidth="3"
                  strokeDasharray="20 15"
                  strokeLinecap="butt"
                  className="opacity-50"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: idx * 0.15,
                    ease: "easeInOut",
                  }}
                />

                <motion.g
                  className="animate-float"
                  style={{ transformOrigin: `${x2}px ${y2}px` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.15,
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                >
                  <circle
                    cx={x2}
                    cy={y2}
                    r="70"
                    fill="none"
                    stroke="#008081"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-spin-slow"
                    style={{ transformOrigin: `${x2}px ${y2}px` }}
                  />
                  <circle
                    cx={x2}
                    cy={y2}
                    r="55"
                    fill="#030712"
                    stroke="#008081"
                    strokeWidth="3"
                    filter="url(#glow)"
                  />
                  <foreignObject
                    x={isRightSide ? x2 + 100 : x2 - 580}
                    y={y2 - 100}
                    width="480"
                    height="250"
                  >
                    <div
                      className={`flex flex-col gap-2 ${isRightSide ? "items-start text-left" : "items-end text-right"}`}
                    >
                      <h3 className="text-white text-xl md:text-3xl leading-tight uppercase font-bold">
                        {tHomeSection(`item${item.id}.title`)}
                      </h3>
                      <div className="h-[2px] w-24 bg-[#008081]" />
                      <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-[420px]">
                        {tHomeSection(`item${item.id}.description`)}
                      </p>
                    </div>
                  </foreignObject>
                </motion.g>
              </g>
            );
          })}

          {/* Central Hub */}
          <g>
            <circle
              cx={centerX}
              cy={centerY}
              r="90"
              fill="#030712"
              stroke="#008081"
              strokeWidth="4"
              filter="url(#glow)"
            />
            <circle
              cx={centerX}
              cy={centerY}
              r="115"
              fill="none"
              stroke="#008081"
              strokeWidth="1"
              strokeDasharray="15,10"
              className="animate-spin-slow"
              style={{ transformOrigin: "center" }}
            />
            <foreignObject
              x={centerX - 100}
              y={centerY - 100}
              width="200"
              height="200"
            >
              <div className="w-full h-full flex items-center justify-center text-center p-4">
                <span className="text-white font-black text-2xl uppercase tracking-tighter">
                  {tHomeSection("ourName")}
                </span>
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>

      {/* Button Section */}
      <div
        data-aos="fade-up"
        className="flex justify-center mt-12 md:mt-24 relative z-30 px-6"
      >
        <ScheduleButton
          text={tHomeSection("buttonText")}
          onClick={() => router.push("/about")}
          className="w-full md:w-auto border-2 border-[#008081] text-white hover:bg-[#008081] transition-all px-16 py-4 font-bold tracking-widest uppercase"
        />
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

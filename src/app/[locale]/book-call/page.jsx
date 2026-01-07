"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "@/images/icons/calendar.svg";
import ScheduleButton from "@/Components/ScheduleButton";
import Image from "next/image";

export default function BookCall() {
  const t = useTranslations("BookCall");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    dateAndTime: null,
  });
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      ...data,
      timezone,
      dateAndTimeISO: data.dateAndTime ? data.dateAndTime.toISOString() : null,
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="py-20">
        <h3 className="text-5xl text-white font-bold text-center">
          {t("title")}
        </h3>
      </div>
      <div className="bg-chineseBlack w-full flex flex-col items-center py-10">
        <h2 className="text-4xl text-white font-bold text-center">
          {t("welcomeHeading")}
        </h2>
        <p className="text-center text-base text-white mt-10">
          {t("description1")}
        </p>
        <p className="text-center text-base text-white">{t("description2")}</p>
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col gap-6 max-w-3xl mt-10"
        >
          <input
            id="name"
            name="name"
            autoComplete="name"
            type="text"
            placeholder={t("name")}
            className="text-white text-2xl p-6 border border-white rounded-lg w-full bg-transparent"
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
          />
          <input
            id="email"
            name="email"
            autoComplete="email"
            type="email"
            placeholder={t("email")}
            className="text-white text-2xl p-6 border border-white rounded-lg w-full bg-transparent"
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
          />
          <input
            id="phone"
            name="phone"
            autoComplete="tel"
            type="tel"
            placeholder={t("phone")}
            className="text-white text-2xl p-6 border border-white rounded-lg w-full bg-transparent"
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, phone: e.target.value };
              });
            }}
          />
          {/* Custom Date Picker */}
          <div className="relative">
            <DatePicker
              selected={data.dateAndTime}
              onChange={(date) => {
                setData((prev) => {
                  return { ...prev, dateAndTime: date };
                });
              }}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="Select Date"
              minDate={new Date()}
              className="text-white text-2xl p-6 border border-white rounded-lg w-full bg-transparent cursor-pointer"
              calendarClassName="custom-calendar"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image
                src={CalendarIcon}
                alt={"Calendar Icon"}
                width={48}
                height={48}
                className=" group-hover:invert transition-all duration-300"
              />
            </div>
          </div>
          <ScheduleButton text={t("buttonText")} className="w-1/3" />
        </form>
      </div>
    </div>
  );
}

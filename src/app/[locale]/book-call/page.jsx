"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "@/images/icons/calendar.svg";
import ScheduleButton from "@/Components/ScheduleButton";
import Image from "next/image";
import { submitBooking } from "./actions";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookCall() {
  const t = useTranslations("BookCall");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    full_name: "",
    email: "",
    phone: "",
    dateAndTime: null,
  });

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.dateAndTime) return alert("Please select a date");

    setLoading(true);

    // Prepare the exact data your API expects
    const payload = {
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      // timezone: timezone,
      // dateAndTimeISO: data.dateAndTime.toISOString(),
      datetime: `${data.dateAndTime.toLocaleDateString()} ${data.dateAndTime.toLocaleTimeString()} ${timezone}`,
    };

    // CALL THE SERVER ACTION (This bypasses the /am/ middleware)
    const result = await submitBooking(payload);

    if (result.success) {
      toast.success(t("success"), {
        position: "top-right",
        className: "custom-toast",
        bodyClassName: "custom-toast-body",
        progressClassName: "custom-progress",
      });
      setData({ full_name: "", email: "", phone: "", dateAndTime: null });
    } else {
      toast.error(t("failedToSend"), {
        position: "top-right",
        className: "custom-toast",
        bodyClassName: "custom-toast-body",
        progressClassName: "custom-progress",
      });
    }

    setLoading(false);
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
            id="full_name"
            name="full_name"
            type="text"
            required
            value={data.full_name}
            placeholder={t("name")}
            className="text-white text-2xl p-6 border border-white rounded-lg w-full bg-transparent outline-none focus:border-blue-500"
            onChange={(e) => setData({ ...data, full_name: e.target.value })}
          />
          <input
            id="email"
            name="email"
            type="email"
            required
            value={data.email}
            placeholder={t("email")}
            className="text-white text-2xl p-6 border border-white rounded-lg w-full bg-transparent outline-none focus:border-blue-500"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={data.phone}
            placeholder={t("phone")}
            className="text-white text-2xl p-6 border border-white rounded-lg w-full bg-transparent outline-none focus:border-blue-500"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />

          {/* Custom Date Picker */}
          <div className="relative">
            <DatePicker
              selected={data.dateAndTime}
              onChange={(date) => setData({ ...data, dateAndTime: date })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="Select Date"
              minDate={new Date()}
              required
              className="text-white text-2xl p-6 border border-white rounded-lg w-full bg-transparent cursor-pointer outline-none"
              calendarClassName="custom-calendar"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image
                src={CalendarIcon}
                alt={"Calendar Icon"}
                width={48}
                height={48}
                className="group-hover:invert transition-all duration-300"
              />
            </div>
          </div>

          <ScheduleButton
            text={loading ? "Processing..." : t("buttonText")}
            disabled={loading}
            className={`w-1/3 transition-opacity ${
              loading ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
          />
        </form>
      </div>
    </div>
  );
}

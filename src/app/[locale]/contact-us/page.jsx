"use client";
import { useTranslations } from "next-intl";
import FormField from "@/Components/FormField";
import ScheduleButton from "@/Components/ScheduleButton";
import { useState } from "react";
import { submitContact } from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs({ params }) {
  const t = useTranslations("ContactUs");
  const fields = t.raw("form.fields");

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFieldChange = (fieldKey, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      full_name: `${formData.firstname} ${formData.lastname}`,
      office_name: formData.companyName,
      phone: formData.phone,
      email: formData.email,
      budget: formData.budget,
      message: formData.message,
      about_us: formData.howDidYouFindUs,
      services: formData.service,
      about_you: formData.message,
    };

    setLoading(true);

    const result = await submitContact(dataToSend);

    if (result.success) {
      toast.success(t("success"), {
        position: "top-right",
        className: "custom-toast",
        bodyClassName: "custom-toast-body",
        progressClassName: "custom-progress",
      });
      setFormData({});
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
    <div className="flex flex-col items-center px-5 lg:p-20">
      <div className="container">
        <h1 className="py-10 text-5xl lg:text-5xl font-bold text-center text-white">
          {t("title")}
        </h1>
      </div>
      <div className="w-full max-w-4xl bg-formGray p-10 mt-10 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1A1A1A] p-10 rounded-xl"
        >
          {Object.entries(fields).map(([key, config]) => (
            <FormField
              key={key}
              fieldKey={key}
              config={config}
              value={formData[key] || ""}
              onChange={handleFieldChange}
            />
          ))}

          <ScheduleButton
            text={loading ? "Processing..." : t("form.buttonText")}
            disabled={loading}
            className={`w-full transition-opacity ${
              loading ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
          />
        </form>
      </div>
    </div>
  );
}

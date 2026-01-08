import { useTranslations } from "next-intl";
import FormField from "@/Components/FormField";

export default function ContactUs({ params }) {
  const t = useTranslations("ContactUs");
  const fields = t.raw("form.fields");
  return (
    <div className="flex flex-col items-center px-5 lg:p-20">
      <div className="container">
        <h1 className="py-20 text-5xl lg:text-5xl font-bold text-center">
          {t("title")}
        </h1>
      </div>
      <div className="w-full max-w-4xl bg-formGray p-10 mt-10 rounded-lg">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1A1A1A] p-10 rounded-xl">
          {Object.entries(fields).map(([key, config]) => (
            <FormField key={key} fieldKey={key} config={config} />
          ))}

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button className="..."> {t("form.buttonText")} </button>
          </div>
        </form>
      </div>
    </div>
  );
}

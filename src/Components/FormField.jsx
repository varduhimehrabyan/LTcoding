"use client";
import { useState, useRef, useEffect } from "react";

const FormField = ({ fieldKey, config, value, onChange }) => {
  const baseStyles =
    "w-full bg-[#333333] p-4 text-white rounded-md border-none focus:ring-1 focus:ring-teal-500 outline-none appearance-none";
  const labelStyles = "block mb-2 text-sm font-medium text-gray-300";

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleOption = (optValue) => {
    const currentValue = Array.isArray(value) ? value : [];
    const newValue = currentValue.includes(optValue)
      ? currentValue.filter((v) => v !== optValue)
      : [...currentValue, optValue];
    onChange(fieldKey, newValue);
  };

  // Determine which element to render
  switch (config.type) {
    case "select":
      return (
        <div className="w-full">
          {" "}
          {/* Parent ensures full width */}
          <label htmlFor={fieldKey} className={labelStyles}>
            {config.label}*
          </label>
          <div className="relative w-full">
            <select
              id={fieldKey}
              className={`${baseStyles} cursor-pointer`}
              value={value || ""} // Use the value prop from the parent
              onChange={(e) => onChange(fieldKey, e.target.value)}
            >
              {/* Use value="" on the select to control this option */}
              <option value="" disabled>
                {config.defaultOption || "Select an option"}
              </option>
              {config.options?.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="bg-[#333333] text-white" // Helps some browsers style the list
                >
                  {opt.label}
                </option>
              ))}
            </select>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
              <svg
                width="14"
                height="8"
                viewBox="0 0 18 10"
                fill="currentColor"
                className="text-gray-400"
              >
                <path d="M8.93755 9.75005C8.72975 9.75005 8.52175 9.67063 8.36311 9.51199L0.238113 1.38699C-0.0793711 1.0695 -0.0793711 0.555395 0.238113 0.238113C0.555598 -0.079168 1.06971 -0.0793711 1.38699 0.238113L8.93755 7.78868L16.4881 0.238113C16.8056 -0.0793711 17.3197 -0.0793711 17.637 0.238113C17.9543 0.555598 17.9545 1.06971 17.637 1.38699L9.51199 9.51199C9.35335 9.67063 9.14535 9.75005 8.93755 9.75005Z" />
              </svg>
            </div>
          </div>
        </div>
      );

    case "multiselect":
      const selectedLabels = config.options
        ?.filter((opt) => value?.includes(opt.value))
        .map((opt) => opt.label);

      return (
        <div className="w-full relative" ref={containerRef}>
          <label className={labelStyles}>{config.label}*</label>
          <div className="relative">
            {/* The "Select" Box */}
            <div
              className={`${baseStyles} flex justify-between items-center min-h-[56px]`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={`truncate text-white`}>
                {selectedLabels?.length > 0
                  ? selectedLabels.join(", ")
                  : config.defaultOption || "Select options..."}
              </span>
              <svg
                width="14"
                height="8"
                viewBox="0 0 18 10"
                fill="currentColor"
                className={`text-gray-400 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M8.93755 9.75005C8.72975 9.75005 8.52175 9.67063 8.36311 9.51199L0.238113 1.38699C-0.0793711 1.0695 -0.0793711 0.555395 0.238113 0.238113C0.555598 -0.079168 1.06971 -0.0793711 1.38699 0.238113L8.93755 7.78868L16.4881 0.238113C16.8056 -0.0793711 17.3197 -0.0793711 17.637 0.238113C17.9543 0.555598 17.9545 1.06971 17.637 1.38699L9.51199 9.51199C9.35335 9.67063 9.14535 9.75005 8.93755 9.75005Z" />
              </svg>
            </div>

            {/* The Dropdown Menu */}
            {isOpen && (
              <div className="absolute z-50 w-full mt-2 bg-[#333333] border border-gray-600 rounded-md shadow-xl max-h-60 overflow-y-auto">
                {config.options?.map((opt) => {
                  const isSelected = value?.includes(opt.value);
                  return (
                    <div
                      key={opt.value}
                      className={`flex items-center px-4 py-3 cursor-pointer hover:bg-[#444444] transition-colors ${
                        isSelected ? "bg-teal-500/10" : ""
                      }`}
                      onClick={() => handleToggleOption(opt.value)}
                    >
                      <div
                        className={`w-4 h-4 mr-3 flex items-center justify-center border rounded border-gray-500 ${
                          isSelected
                            ? "bg-teal-500 border-teal-500"
                            : "bg-transparent"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 12 10"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                          >
                            <polyline points="1.5 5 4.5 8 10.5 2" />
                          </svg>
                        )}
                      </div>
                      <span
                        className={
                          isSelected ? "text-teal-400" : "text-gray-200"
                        }
                      >
                        {opt.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      );

    case "textarea":
      return (
        <div className="md:col-span-2">
          <label htmlFor={fieldKey} className={labelStyles}>
            {config.label}*
          </label>
          <textarea
            id={fieldKey}
            rows={4}
            className={`${baseStyles} resize-none`}
            value={value || ""} // Use the value prop from the parent
            onChange={(e) => onChange(fieldKey, e.target.value)}
          />
        </div>
      );

    default: // text, email, tel
      return (
        <div>
          <label htmlFor={fieldKey} className={labelStyles}>
            {config.label}*
          </label>
          <input
            type={config.type}
            id={fieldKey}
            className={baseStyles}
            required
            value={value || ""} // Use the value prop from the parent
            onChange={(e) => onChange(fieldKey, e.target.value)}
          />
        </div>
      );
  }
};
export default FormField;

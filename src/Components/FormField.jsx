const FormField = ({ fieldKey, config, value, onChange }) => {
  const baseStyles =
    "w-full bg-[#333333] p-4 text-white rounded-md border-none focus:ring-1 focus:ring-teal-500 outline-none appearance-none";
  const labelStyles = "block mb-2 text-sm font-medium text-gray-300";

  // Determine which element to render
  switch (config.type) {
    case "select":
      return (
        <div className="relative">
          <label htmlFor={fieldKey} className={labelStyles}>
            {config.label}*
          </label>
          <select id={fieldKey} className={baseStyles}>
            <option value="" disabled selected>
              {config.defaultOption || "Select an option"}
            </option>
            {config.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 bottom-4 pointer-events-none">
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.93755 9.75005C8.72975 9.75005 8.52175 9.67063 8.36311 9.51199L0.238113 1.38699C-0.0793711 1.0695 -0.0793711 0.555395 0.238113 0.238113C0.555598 -0.079168 1.06971 -0.0793711 1.38699 0.238113L8.93755 7.78868L16.4881 0.238113C16.8056 -0.0793711 17.3197 -0.0793711 17.637 0.238113C17.9543 0.555598 17.9545 1.06971 17.637 1.38699L9.51199 9.51199C9.35335 9.67063 9.14535 9.75005 8.93755 9.75005Z"
                fill="currentColor"
              />
            </svg>
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
          />
        </div>
      );
  }
};
export default FormField;

import { useFormContext } from "react-hook-form";
import clsx from "clsx";

import { SelectInputProps } from "../../types";

// TODO: handle unselected value
// TODO: handle register with react hook form
// TODO: handle style
const SelectInput = ({
  label,
  name,
  icon,
  options,
  className,
  ...props
}: SelectInputProps) => {
  const { register, formState } = useFormContext();

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="relative">
        {icon}
        <select
          {...register(name)}
          name={name}
          className={clsx(
            {
              [`${className}`]: className,
              "border-red-400 focus:border-red-500 focus:ring-red-500":
                formState.errors[name],
              "border-gray-300 focus:ring-black focus:border-black":
                !formState.errors[name],
            },
            `w-full placeholder-gray-600 text-gray-700 bg-white border  rounded-md shadow-sm focus:outline-none focus:ring-1 sm:text-sm`
          )}
          {...props}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {formState.errors[name] && (
        <span className="absolute text-sm text-red-500">
          {String(formState.errors[name]!.message)}
        </span>
      )}
    </div>
  );
};

export default SelectInput;

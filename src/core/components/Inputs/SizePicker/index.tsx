import { useState } from "react";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

// TODO: handle register with react hook form
// TODO: get available sizes
// TODO: on change set selected size
const SIZES = [
  { id: 1, label: "XS" },
  { id: 2, label: "S" },
  { id: 3, label: "M" },
  { id: 4, label: "L" },
  { id: 5, label: "XL" },
];

const SizePicker = () => {
  // const { register, formState } = useFormContext();
  const [isActive, setIsActive] = useState<any>({
    XS: false,
    S: false,
    M: false,
    L: false,
    XL: false,
  });

  return (
    <div className="form-group">
      <div className="flex items-center gap-2">
        {SIZES.map(size => (
          <div key={size.id} className="size-selector">
            <input
              type="radio"
              name="size"
              id={`size-${size.label}`}
              className="hidden"
            />
            <label
              htmlFor={`size-${size.label}`}
              className={clsx(
                "text-xs border-2 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600",
                {
                  "border-primary-500": isActive[size.label],
                  "border-gray-200": !isActive[size.label],
                }
              )}
              onClick={() =>
                setIsActive({
                  [size.label]: !isActive[size.label],
                })
              }
            >
              {size.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizePicker;

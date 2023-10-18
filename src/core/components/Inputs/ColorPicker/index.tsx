import { useState } from "react";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

// TODO: handle register with react hook form
// TODO: add border on selected color
// TODO: get available sizes
// TODO: on change set selected color
const COLORS = [
  { id: 1, label: "#fc3d57" },
  { id: 2, label: "#000" },
  { id: 3, label: "#fff" },
];

const ColorPicker = () => {
  // const { register, formState } = useFormContext();
  const [isActive, setIsActive] = useState<any>({
    "#fc3d57": false,
    "#000": false,
    "#fff": false,
  });
  // console.log("🚀 ~ ColorPicker ~ isActive:", isActive);

  return (
    <div className="form-group">
      <div className="flex items-center gap-2">
        {COLORS.map(color => (
          <div key={color.id} className="color-selector">
            <input
              type="radio"
              name="color"
              id={`color-${color.label}`}
              className="hidden"
            />
            <label
              htmlFor={`color-${color.label}`}
              // className={clsx(
              //   "text-xs border rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600",
              // )}
              className={clsx(
                "border-2 rounded-sm h-6 w-6  cursor-pointer shadow-sm block",
                {
                  "border-primary-500": isActive[color.label],
                  "border-gray-200": !isActive[color.label],
                }
              )}
              style={{ backgroundColor: color.label }}
              onClick={() =>
                setIsActive({
                  [color.label]: !isActive[color.label],
                })
              }
            ></label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;

import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

// TODO: handle register with react hook form
// TODO: on change set quantity
const Quantity = () => {
  // const { register, formState } = useFormContext();

  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    if (counter < 10) setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  const handleChangeCounter = (e: ChangeEvent<HTMLInputElement>) => {
    const isInRange = +e.target.value > 0 && +e.target.value < 11;
    if (isInRange) setCounter(+e?.target.value);
  };

  return (
    <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
      <div
        role="button"
        onClick={handleDecrement}
        className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
      >
        -
      </div>
      <input
        className="text-center h-8 w-8 text-base flex items-center justify-center outline-none focus:outline-none"
        value={counter}
        onChange={handleChangeCounter}
        min={1}
        max={10}
      />
      <div
        role="button"
        onClick={handleIncrement}
        className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
      >
        +
      </div>
    </div>
  );
};

export default Quantity;

import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpinnerProps } from "../types";
import clsx from "clsx";

const Spinner = ({ color, fontSize, className, height }: SpinnerProps) => {
  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <FontAwesomeIcon
        className="animate-spin"
        fontSize={fontSize}
        color={color}
        icon={faCircleNotch}
        height={height || 20}
      />
    </div>
  );
};

export default Spinner;

import { PropsWithChildren, useEffect } from "react";
import dynamic from "next/dynamic";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const DynamicPortal = dynamic(() => import("../Portal"), { ssr: false });

import { DrawerProps } from "../types";

const Drawer = ({
  isOpen,
  onClose,
  isStatic = true,
  title,
  children,
}: PropsWithChildren<DrawerProps>) => {
  const handleClose = () => !isStatic && onClose();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    if (!isOpen) document.body.style.overflow = "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <DynamicPortal>
      <>
        {/* overlay */}
        <div
          className={clsx(
            "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-300 z-50",
            {
              "opacity-0 pointer-events-none": !isOpen,
              "opacity-100 pointer-events-auto": isOpen,
            }
          )}
          onClick={handleClose}
        />
        {/* drawer */}
        <div
          role="alert"
          className={clsx(
            "fixed inset-y-0 min-w-[25rem] right-0 left-auto bg-white overflow-y-auto transform transition-transform duration-300 z-50",
            {
              "translate-x-full": !isOpen,
              "translate-x-0": isOpen,
            }
          )}
        >
          <div className="flex items-center justify-between p-4">
            <h4 className="text-lg font-medium capitalize">{title}</h4>
            <button
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-all duration-300"
              onClick={onClose}
            >
              <FontAwesomeIcon width={20} height={20} icon={faClose} />
            </button>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </>
    </DynamicPortal>
  );
};

export default Drawer;

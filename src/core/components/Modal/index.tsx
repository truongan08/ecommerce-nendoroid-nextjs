import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { ModalProps } from "../types";
import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";
const DynamicPortal = dynamic(() => import("../Portal"), { ssr: false });

const Modal = ({
  isOpen,
  onClose,
  isStatic = true,
  children,
  title,
}: PropsWithChildren<ModalProps>) => {
  const handleClose = () => !isStatic && onClose();

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
        {/* modal */}
        <div
          className={clsx(
            "w-full max-w-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 z-50",
            {
              "opacity-0 pointer-events-none": !isOpen,
              "opacity-100 pointer-events-auto": isOpen,
            }
          )}
        >
          <div className="flex justify-between p-4">
            <h3>{title}</h3>
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

export default Modal;

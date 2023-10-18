import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import useGlobalRef from "@/core/hooks/useGlobalRef";
import useInView from "@/core/hooks/useInView";

// TODO: add RTL support
// ! fix: on page height change it is always visible event on redirect to a page with scrollable height
// ! solution: maybe check if page height does not have scroll then hide the button
const BackToTop = () => {
  const pixelRef = useGlobalRef(document.querySelector("#pixel-to-watch")!);
  const isInView = useInView(pixelRef!, {});

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={clsx(
        "fixed bottom-4 right-4 z-50 transition-opacity duration-300 ease-in-out w-12 h-12 rounded-full shadow-lg bg-gray-800 text-white focus:outline-none",
        {
          "opacity-100": !isInView,
          "opacity-0": isInView,
        }
      )}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon width={20} height={20} color="#fff" icon={faChevronUp} />
    </button>
  );
};

export default BackToTop;

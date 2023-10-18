import useGlobalRef from "@/core/hooks/useGlobalRef";
import { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: ReactNode }) => {
  const portalRef = useGlobalRef(
    document.querySelector<HTMLElement>("#portal")!
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (portalRef && portalRef.current && mounted) {
    return createPortal(children, portalRef.current);
  }

  return null;
};

export default Portal;

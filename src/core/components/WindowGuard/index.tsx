import { ReactNode } from "react";

interface WindowGuardProps {
  children: ReactNode;
}

// TODO: not completed, cause an error hydration (rendered HTML is not natch with loaded HTML from server)
const WindowGuard = ({ children }: WindowGuardProps) => {
  const isBrowser = typeof window !== "undefined";

  if (!isBrowser) {
    return null;
  }

  return <>{children}</>;
};

export default WindowGuard;

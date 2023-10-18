import { ReactNode } from "react";

const ListView = ({ children }: { children: ReactNode }) => {
  return <ul className="flex flex-col gap-4">{children}</ul>;
};

export default ListView;

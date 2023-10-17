"use client";
import { Product } from "../../../../types";
import NendoroidItem from "@/components/NendoroidItem";

interface PageContentProps {
  nendoroids: Product[];
}
const PageContent: React.FC<PageContentProps> = ({ nendoroids }) => {
  if (nendoroids.length === 0) {
    return <div className="mt-4 text-neutral-400">Chua co san pham nao</div>;
  }
  return (
    <div>
      {nendoroids.map((item) => (
        <>
          <NendoroidItem data={item} />
        </>
      ))}
    </div>
  );
};
export default PageContent;

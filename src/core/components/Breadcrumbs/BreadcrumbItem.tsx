import Link from "next/link";
import { CrumbItem } from "../types";
import Typography from "../Typography";

const BreadcrumbItem = ({ label, path, isLast }: CrumbItem) => {
  // The last crumb is rendered as normal text since we are already on the page
  if (isLast) {
    return (
      <li>
        <Typography size="md">{label}</Typography>
      </li>
    );
  }
  // else it's a link
  return (
    <li>
      <Link
        href={path}
        className="text-secondary transition duration-150 ease-in-out hover:text-primary-800 focus:text-secondary-800"
      >
        <Typography size="md">{label}</Typography>
      </Link>
    </li>
  );
};

export default BreadcrumbItem;

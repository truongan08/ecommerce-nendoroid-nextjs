import { BreadcrumbsProps } from "../types";
import { Children, Fragment } from "react";

const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
  const childrenArray = Children.toArray(children);

  const childrenWithSeparator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav aria-label="breadcrumb" role="list">
      <ul className="flex items-center gap-x-4">{childrenWithSeparator}</ul>
    </nav>
  );
};

export default Breadcrumbs;

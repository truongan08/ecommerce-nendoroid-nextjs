import { SkeletonProps } from "../types/i-skeleton";
import GridSkeleton from "./GridSkeleton";
import ListSkeleton from "./ListSkeleton";

const Skeleton = ({ type }: SkeletonProps) => {
  return type === "list" ? <ListSkeleton /> : <GridSkeleton />;
};

export default Skeleton;

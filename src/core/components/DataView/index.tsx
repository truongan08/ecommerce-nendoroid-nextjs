import { PropsWithChildren } from "react";

import Button from "../Button";
import Skeleton from "../Skeleton";
import ErrorFallback from "../ErrorFallback";

import { IDataView } from "../types/i-data-view";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import GridView from "./GridView";
import ListView from "./ListView";

// TODO: load more or pagination feature
const DataView = ({
  error,
  isLoading,
  setPage,
  meta,
  isGrid,
  setIsGrid,
  changView = true,
  hasPagination = true,
  children,
}: PropsWithChildren<IDataView>) => {
  const { t } = useTranslation("common");

  const toggleView = () => {
    if (setIsGrid) setIsGrid(!isGrid);
  };

  if (error) {
    return <ErrorFallback error={error} />;
  }

  return (
    <>
      {changView && (
        <div className="absolute -top-16 flex justify-end mb-4">
          <Button
            className="flex gap-1 items-center"
            onClick={toggleView}
            variant="outlined"
          >
            {isGrid ? t("switch-to-list") : t("switch-to-grid")}
            {isGrid ? (
              <FontAwesomeIcon icon={faList} />
            ) : (
              <FontAwesomeIcon icon={faTableCellsLarge} />
            )}
          </Button>
        </div>
      )}

      {isLoading && <Skeleton type={isGrid ? "grid" : "list"} />}

      {!isLoading && isGrid ? (
        <GridView>{children}</GridView>
      ) : (
        <ListView>{children}</ListView>
      )}

      {hasPagination && (
        <div className="mt-6 flex gap-4 justify-end">
          <Button
            onClick={() => setPage(prev => prev - 1)}
            disabled={!meta?.has_previous}
            variant="outlined"
          >
            {t("prev")}
          </Button>
          <Button
            onClick={() => setPage(prev => prev + 1)}
            disabled={!meta?.has_next}
            variant="outlined"
          >
            {t("next")}
          </Button>
        </div>
      )}
    </>
  );
};

export default DataView;

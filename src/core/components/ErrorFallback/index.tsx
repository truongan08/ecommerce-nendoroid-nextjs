import Typography from "../Typography";
import { useTranslation } from "next-i18next";

const ErrorFallback = ({ error }: { error: any }) => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-gray-100 flex items-center justify-center h-full w-full">
      <div className="max-w-md m-4 p-8">
        <h1 className="text-2xl font-bold mb-4">{t("oops")}!</h1>
        <Typography variant="danger" size="xl">
          {t("try-again")}
        </Typography>
        {error && error.message && (
          <Typography size="md" variant="secondary">
            {error.message}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default ErrorFallback;

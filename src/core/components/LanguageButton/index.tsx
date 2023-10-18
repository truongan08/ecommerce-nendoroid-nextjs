import { useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";

const LanguageButton = () => {
  const { t } = useTranslation("common");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const changeLanguage = async (locale: string) => {
    setLoading(true);

    await router.push(router.pathname, router.asPath, { locale });
    document.dir = locale === "ar" ? "rtl" : "ltr";

    setLoading(false);
  };

  return (
    <button
      className={classNames(
        "ms-2 min-w-[5rem] flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        loading && "opacity-50 cursor-not-allowed"
      )}
      onClick={() => changeLanguage(router.locale === "en" ? "ar" : "en")}
    >
      {loading ? (
        <FontAwesomeIcon
          className="animate-spin h-5 w-5 text-white"
          icon={faSpinner}
        />
      ) : (
        t("change-language")
      )}
    </button>
  );
};

export default LanguageButton;

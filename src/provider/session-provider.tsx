"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Session } from "@/types/user";
import {
  selectIsLoggedInSession,
  selectLocalSessionData,
  setSessionFromLocalSessionData,
  useAppDispatch,
  useAppSelector,
} from "@/lib/redux";
import Loading from "@/components/Loading";
import Image from "next/image";

type SessionProviderProps = {
  children: ReactNode;
};

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);

  useEffect(() => {
    if (!isLoggedInSession) getLoggedInUserDataOrNone();
  }, []);

  const getLoggedInUserDataOrNone = () => {
    const localSessionData: Session | null = selectLocalSessionData();

    if (!localSessionData) {
      setIsLoading(true);
      router.refresh();
      return;
    }

    dispatch(setSessionFromLocalSessionData(localSessionData));
    setIsLoading(true);
  };

  return (
    <>
      {!isLoading ? (
        <Image src={"/images/figre.gif"} alt="figure-loading" fill />
      ) : (
        children
      )}
    </>
  );
};

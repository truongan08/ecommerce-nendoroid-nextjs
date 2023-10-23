"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Session } from "@/types/user";
import {
  selectIsLoggedInSession,
  selectLocalSessionData,
  setSessionFromLocalSessionData,
  useAppDispatch,
  useAppSelector,
} from "@/lib/redux";

type SessionProviderProps = {
  children: ReactNode;
};

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);

  useEffect(() => {
    if (!isLoggedInSession) getLoggedInUserDataOrRedirectToSignInPage();
  }, []);

  const getLoggedInUserDataOrRedirectToSignInPage = () => {
    const localSessionData: Session | null = selectLocalSessionData();

    if (!localSessionData) {
      // router.push("/");
      return;
    }

    dispatch(setSessionFromLocalSessionData(localSessionData));
  };

  return <>{isLoggedInSession ? children : "Loading ..."}</>;
};

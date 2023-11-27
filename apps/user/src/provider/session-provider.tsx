"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Session, cartItem } from "@/types/user";
import {
  selectIsLoggedInSession,
  selectLocalCartData,
  selectLocalSessionData,
  setCartFromLocalCartData,
  setSessionFromLocalSessionData,
  useAppDispatch,
  useAppSelector,
} from "@/lib/redux";
import Loading from "@/components/Loading/PageLoading";

type SessionProviderProps = {
  children: ReactNode;
};

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoggedInSession) {
      getLoggedInUserDataOrNone();
    }
  }, []);

  const getLoggedInUserDataOrNone = () => {
    const localSessionData: Session | null = selectLocalSessionData();
    const cartLocal: cartItem[] = selectLocalCartData();

    if (!localSessionData) {
      setIsLoading(true);
      router.refresh();
      return;
    }

    dispatch(setCartFromLocalCartData(cartLocal));

    dispatch(setSessionFromLocalSessionData(localSessionData));
    setIsLoading(true);
  };

  return (
    <div className="max-h-screen max-w-screen">
      {!isLoading ? <Loading /> : children}
    </div>
  );
};

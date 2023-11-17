"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Session, cart, cartItem } from "@/types/user";
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
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession);

  useEffect(() => {
    if (!isLoggedInSession) getLoggedInUserDataOrNone();
  }, []);

  const getLoggedInUserDataOrNone = () => {
    const localSessionData: Session | null = selectLocalSessionData();
    const cart: cartItem[] | null = selectLocalCartData();

    if (!localSessionData) {
      setIsLoading(true);
      router.refresh();
      return;
    }

    if (cart) {
      dispatch(setCartFromLocalCartData(cart));
    }

    dispatch(setSessionFromLocalSessionData(localSessionData));
    setIsLoading(true);
  };

  return (
    <div className="max-h-screen max-w-screen">
      {!isLoading ? <Loading /> : children}
    </div>
  );
};

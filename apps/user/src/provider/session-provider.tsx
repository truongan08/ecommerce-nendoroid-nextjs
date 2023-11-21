"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Session, cart, cartItem } from "@/types/user";
import {
  selectCartInState,
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
  const cartInState: cartItem[] = useAppSelector(selectCartInState);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoggedInSession) {
      getLoggedInUserDataOrNone();
    }
  }, [cartInState]);

  const getLoggedInUserDataOrNone = () => {
    const localSessionData: Session | null = selectLocalSessionData();
    const cartLocal: cartItem[] = selectLocalCartData();

    if (!localSessionData) {
      setIsLoading(true);
      router.refresh();
      return;
    }

    if (!cartInState) {
      dispatch(setCartFromLocalCartData(cartLocal));
    }

    if (cartLocal !== cartInState) {
      localStorage.setItem("cart", JSON.stringify(cartInState));
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

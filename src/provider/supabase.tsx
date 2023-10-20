"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import supabase from "@/utils/userAction";

const AuthSupabaseContext = createContext({});

export default function AuthSupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(false);
  const onAuthStateChange = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  useEffect(() => {
    onAuthStateChange();
  }, []);
  const value = useMemo(() => {
    return {
      user,
      signOut: () => supabase.auth.signOut(),
    };
  }, [user]);

  return (
    <AuthSupabaseContext.Provider value={{ value }}>
      <>{children}</>
    </AuthSupabaseContext.Provider>
  );
}

export const useAuthSupabaseContext = () => {
  const context = useContext(AuthSupabaseContext);

  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return context;
};

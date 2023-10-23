// "use client";

// import { createContext, useContext, useEffect, useMemo, useState } from "react";
// import supabase from "@/utils/userAction";
// import getCart from "@/action/getCart";

// const AuthSupabaseContext = createContext({});

// export default function AuthSupabaseContextProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [user, setUser] = useState(false);
//   const [cart, setCart] = useState([]);

//   const onCart = async () => {
//     try {
//       const {
//         data: { cart },
//       } = await getCart("812e87e8-1bf3-4e28-943c-3e4070371657");
//       if (cart) {
//         setCart(cart);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//     }
//   };

//   const onAuthStateChange = async () => {
//     try {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();
//       if (user) {
//         setUser(user);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//     }
//   };

//   useEffect(() => {
//     onAuthStateChange();
//     onCart;
//   }, []);

//   const value = useMemo(() => {
//     return {
//       cart,
//       user,
//       signOut: () => supabase.auth.signOut(),
//     };
//   }, [user]);

//   return (
//     <AuthSupabaseContext.Provider value={{ value }}>
//       <>{children}</>
//     </AuthSupabaseContext.Provider>
//   );
// }

// export const useAuthSupabaseContext = () => {
//   const { value } = useContext(AuthSupabaseContext);

//   return { value };
// };

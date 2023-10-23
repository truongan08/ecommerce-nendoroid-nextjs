import supabase from "@/utils/userAction";

// const getCart = async ({ session }: { session: Session | null }) => {
const getCart = async (id: string) => {
  //   const user = session?.user;
  try {
    let { data, error } = await supabase
      .from("cart")
      .select("cart_id, cart_item(product_id)")
      .eq("id", id);
    return data as any;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
export default getCart;

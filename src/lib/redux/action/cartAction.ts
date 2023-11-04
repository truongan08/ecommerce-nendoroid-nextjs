import { CartOutput, CustomError, cart } from "@/types/user";
import supabase from "@/utils/SupabaseUser";

export class CartSupabase implements CartOutput {
    async fetchCart(): Promise<{ cart: cart | null; error: CustomError | null; }> {
        const {data: cart, error} = await supabase.rpc(fetchCart())
    }
    async getCart(): Promise<{ cart: cart | null; error: CustomError | null; }> {
        const {data: cart, error} = await supabase.rpc(getCart())
    }
    
}
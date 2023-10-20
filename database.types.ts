export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cart: {
        Row: {
          cart_id: number
          customer_id: string
        }
        Insert: {
          cart_id?: number
          customer_id: string
        }
        Update: {
          cart_id?: number
          customer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cart_customer_id_fkey"
            columns: ["customer_id"]
            referencedRelation: "customer"
            referencedColumns: ["customer_id"]
          }
        ]
      }
      cart_item: {
        Row: {
          cart_id: number
          cart_item_id: number
          product_detail_id: number
          quantity: number
        }
        Insert: {
          cart_id: number
          cart_item_id?: number
          product_detail_id: number
          quantity: number
        }
        Update: {
          cart_id?: number
          cart_item_id?: number
          product_detail_id?: number
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "cart_item_cart_id_fkey"
            columns: ["cart_id"]
            referencedRelation: "cart"
            referencedColumns: ["cart_id"]
          },
          {
            foreignKeyName: "cart_item_product_detail_id_fkey"
            columns: ["product_detail_id"]
            referencedRelation: "product_detail"
            referencedColumns: ["product_detail_id"]
          }
        ]
      }
      category: {
        Row: {
          category_id: number
          description: string | null
          name: string
        }
        Insert: {
          category_id?: number
          description?: string | null
          name: string
        }
        Update: {
          category_id?: number
          description?: string | null
          name?: string
        }
        Relationships: []
      }
      customer: {
        Row: {
          address: string | null
          avatar_url: string | null
          city: string | null
          country: string | null
          customer_id: string
          email: string | null
          full_name: string | null
          phone: string | null
          postal_code: string | null
          state: string | null
          username: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          customer_id: string
          email?: string | null
          full_name?: string | null
          phone?: string | null
          postal_code?: string | null
          state?: string | null
          username?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          customer_id?: string
          email?: string | null
          full_name?: string | null
          phone?: string | null
          postal_code?: string | null
          state?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_customer_id_fkey"
            columns: ["customer_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      order: {
        Row: {
          created_at: string
          customer_id: string | null
          order_id: number
          payment_id: number | null
          shipping_fee: number
          staff_id: number | null
          status: string
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          order_id?: number
          payment_id?: number | null
          shipping_fee: number
          staff_id?: number | null
          status: string
          total_amount: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          order_id?: number
          payment_id?: number | null
          shipping_fee?: number
          staff_id?: number | null
          status?: string
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "order_customer_id_fkey"
            columns: ["customer_id"]
            referencedRelation: "customer"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "order_payment_id_fkey"
            columns: ["payment_id"]
            referencedRelation: "payment"
            referencedColumns: ["payment_id"]
          },
          {
            foreignKeyName: "order_staff_id_fkey"
            columns: ["staff_id"]
            referencedRelation: "staff"
            referencedColumns: ["staff_id"]
          }
        ]
      }
      order_detail: {
        Row: {
          order_detail_id: number
          order_id: number
          price: number
          product_id: number
          quantity: number
        }
        Insert: {
          order_detail_id?: number
          order_id: number
          price: number
          product_id: number
          quantity: number
        }
        Update: {
          order_detail_id?: number
          order_id?: number
          price?: number
          product_id?: number
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_detail_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "order_detail_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "product"
            referencedColumns: ["product_id"]
          }
        ]
      }
      payment: {
        Row: {
          amount: number
          order_id: number
          payment_id: number
          payment_method: string
          status: string
        }
        Insert: {
          amount: number
          order_id: number
          payment_id?: number
          payment_method: string
          status: string
        }
        Update: {
          amount?: number
          order_id?: number
          payment_id?: number
          payment_method?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "order"
            referencedColumns: ["order_id"]
          }
        ]
      }
      product: {
        Row: {
          category_id: number
          description: string | null
          image_url: string | null
          name: string
          price: string | null
          product_id: number
          status: string | null
        }
        Insert: {
          category_id: number
          description?: string | null
          image_url?: string | null
          name: string
          price?: string | null
          product_id?: number
          status?: string | null
        }
        Update: {
          category_id?: number
          description?: string | null
          image_url?: string | null
          name?: string
          price?: string | null
          product_id?: number
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "category"
            referencedColumns: ["category_id"]
          }
        ]
      }
      product_detail: {
        Row: {
          franchise: string | null
          product_detail_id: number
          product_id: number
          quantity_in_stock: number
          sets: string | null
          sku: string
          year: string | null
        }
        Insert: {
          franchise?: string | null
          product_detail_id?: number
          product_id: number
          quantity_in_stock: number
          sets?: string | null
          sku: string
          year?: string | null
        }
        Update: {
          franchise?: string | null
          product_detail_id?: number
          product_id?: number
          quantity_in_stock?: number
          sets?: string | null
          sku?: string
          year?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_detail_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "product"
            referencedColumns: ["product_id"]
          }
        ]
      }
      shipping: {
        Row: {
          address: string
          city: string
          country: string
          delivery_date: string
          order_id: number
          postal_code: string
          shipping_id: number
          state: string
        }
        Insert: {
          address: string
          city: string
          country: string
          delivery_date: string
          order_id: number
          postal_code: string
          shipping_id?: number
          state: string
        }
        Update: {
          address?: string
          city?: string
          country?: string
          delivery_date?: string
          order_id?: number
          postal_code?: string
          shipping_id?: number
          state?: string
        }
        Relationships: [
          {
            foreignKeyName: "shipping_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "order"
            referencedColumns: ["order_id"]
          }
        ]
      }
      staff: {
        Row: {
          address: string | null
          city: string | null
          country: string | null
          email: string
          first_name: string
          is_admin: boolean
          last_name: string
          phone: string | null
          staff_id: number
          state: string | null
          username: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          country?: string | null
          email: string
          first_name: string
          is_admin?: boolean
          last_name: string
          phone?: string | null
          staff_id?: number
          state?: string | null
          username: string
        }
        Update: {
          address?: string | null
          city?: string | null
          country?: string | null
          email?: string
          first_name?: string
          is_admin?: boolean
          last_name?: string
          phone?: string | null
          staff_id?: number
          state?: string | null
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

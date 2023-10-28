import { NextResponse, NextRequest } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { stripe } from '@/utils/Stripe';

export async function POST(req: NextRequest) {
    const supabase = createServerComponentClient({ cookies })

    try {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) throw Error()

        const body = await req.json();

        const res = await stripe.paymentIntents.create({
            amount: Number(body.amount),
            currency: 'vnd',
            automatic_payment_methods: { enabled: true },
        });

        return NextResponse.json(res);
    } catch (error) {
        console.log(error);
        return new NextResponse('Something went wrong', { status: 400 });
    }
}
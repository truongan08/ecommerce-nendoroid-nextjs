import { stripe } from "@/utils/Stripe";

const checkOut = async () => {
  try {
    let session;
    session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "required",
      customer,
      customer_update: {
        address: "auto",
      },
      line_items: [
        {
          price: price.id,
          quantity,
        },
      ],
      mode: "payment",
      allow_promotion_codes: true,
      success_url: `localhost:3000/account`,
      cancel_url: `$localhost:3000/`,
    });

    if (session) {
      return console.log(session);
    } else {
      return console.log("session undefine");
    }
  } catch (err: any) {
    console.log(err);
  }
};

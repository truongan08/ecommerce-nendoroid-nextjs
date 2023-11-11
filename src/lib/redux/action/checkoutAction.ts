import { stripe } from "@/utils/Stripe";

const checkOut = async ({ data }) => {
  try {
    let session;
    let priceId = data.priceId;
    session = await stripe.checkout.sessions.create({
      billing_address_collection: "required",
      customer_update: {
        address: "auto",
      },
      line_items: [
        {
          price: priceId,
          quantity: 10,
        },
      ],
      mode: "payment",
      success_url: `localhost:3000/`,
      cancel_url: `$localhost:3000/`,
    });

    if (session) {
      return session;
    } else {
      return console.log("session undefine");
    }
  } catch (err: any) {
    console.log(err);
  }
};

"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { provinces } from "vietnam-provinces";
import { getStripe } from "@/utils/StripeLoad";
import { StripeElement } from "@stripe/stripe-js";
import Stripe from "stripe";

const Checkout = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("existing-information");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId: "price_1O64MsC45JnkZGbwuokMsSvt" }),
    });
    const data = await response.json();
    window.location.assign(data);
  };

  // const stripeInit = async () => {
  //   const stripe = await getStripe();

  //   const response = await fetch("/api/checkout", {
  //     method: "POST",
  //     body: JSON.stringify({ amount: "2" }),
  //   });

  //   const result = await response.json();
  //   console.log(stripe, "day la stripe");
  //   console.log(result);

  // clientSecret.current = result.client_secret;

  // elements.current = stripe.current?.elements();
  // var style = {
  //   base: { fontSize: "18px" },
  //   invalid: {
  //     fontFamily: "Arial, sans-serif",
  //     color: "#EE4B2B",
  //     iconColor: "#EE4B2B",
  //   },
  // };
  // card.current = elements.current?.create("card", {
  //   hidePostalCode: true,
  //   style: style,
  // });

  // card.current.mount("#card-element");
  // card.current.on("change", function (event) {
  //   document.querySelector("button").disabled = event.empty;
  //   document.querySelector("#card-error").textContent = event.error
  // //    ? event.error.message
  //     : "";
  // });
  // setloading(false);
  // };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const formEntries = Object.fromEntries(formData);

  //   const fullname: string = formEntries.fullname as string;
  //   const country_id: string = formEntries.country_id as string;
  //   const telephone: string = formEntries.telephone as string;
  //   const city: string = formEntries.city as string;
  //   const street: string = formEntries.street as string;
  //   const email: string = formEntries.email as string;
  //   const postcode: string = formEntries.postcode as string;

  //   try {
  //     if (selectedOption === "existing-information") {
  //       setloading(false);
  //       const data = {
  //         fullname: "truong an",
  //         countryId: "704",
  //         street: "Phu Tan",
  //         city: "Ca Mau",
  //         telephone: "0912345678",
  //         postcode: "970000",
  //         email: "truonganfi@gmail.com",
  //       };

  // const res = await dispatch(Checkout({ method: payment }));
  // const check = unwrapResult(res);
  //       toast("Payment success");
  //       router.push("/");

  // return check;
  //     }

  //     if (selectedOption === "new-information") {
  //       setloading(false);
  //       const data = {
  //         fullname: fullname,
  //         countryId: country_id,
  //         street: street,
  //         city: city,
  //         telephone: telephone,
  //         postcode: postcode,
  //         email: email,
  //       };
  //       // await dispatch(CartAddress(data));
  //       // const res = await dispatch(Checkout({ method: payment }));
  //       // const check = unwrapResult(res);
  //       toast("Thanh Toán Thành Công");
  //       router.push("/");
  //       // return check;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // let result = await stripe.current?.confirmCardPayment(
  //   clientSecret.current,
  //   {
  //     payment_method: { card: card.current },
  //   }
  // );
  // if (result.error) {
  //   console.log(error);
  // } else {
  //   setloading(true);

  //   try {
  //     let response = await fetch("/api/orders/create", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         stripe_id: result.paymentIntent.id,
  //         name: addressDetails.name,
  //         address: addressDetails.address,
  //         zipcode: addressDetails.zipcode,
  //         city: addressDetails.city,
  //         country: addressDetails.country,
  //         products: cart.getCart(),
  //         total: cart.cartTotal(),
  //       }),
  //     });

  //     if (response.status == 200) {
  //       toast.success("Order Complete!", { autoClose: 3000 });
  //       return router.push("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong?", { autoClose: 3000 });
  //   }

  //   setloading(false);
  // }
  // };

  useEffect(() => {
    // setloading(true);
    // setTimeout(() => stripeInit(), 300);
  }, []);

  return (
    // <div className="mt-14">
    //   <h1 className="my-5 text-3xl font-bold text-center sm:w-screen">
    //     Address
    //   </h1>
    //   <ToastContainer />
    //   <div>
    //     <label className="flex items-center justify-center w-screen mb-2 ">
    //       <input
    //         type="radio"
    //         value="existing-information"
    //         checked={selectedOption === "existing-information"}
    //         className="ml-2 mr-2"
    //         onClick={() => setSelectedOption("existing-information")}
    //       />
    //       Exist information
    //     </label>
    //     <label className="flex items-center justify-center w-screen mb-2">
    //       <input
    //         type="radio"
    //         value="new-information"
    //         checked={selectedOption === "new-information"}
    //         className="mr-2 "
    //         onClick={() => setSelectedOption("new-information")}
    //       />
    //       New address
    //     </label>

    //     {selectedOption === "existing-information" && (
    //       <div className="max-w-2xl mx-auto">
    <form
      onSubmit={handleSubmit}
      className="pb-1 pl-12 pr-12 pt-8 shadow-2xl border-2 rounded-3xl mt-16"
    >
      <div className="block mb-8">
        <h1 className="font-bold mb-2">Method payment</h1>
        <label className="block ml-2">
          <input
            type="radio"
            name="payment-method"
            value="delivery"
            checked={true}
          />
          <span className="ml-2">Payment on delivery</span>
        </label>
        <label className="block ml-2">
          <input type="radio" name="payment-method" value="stripe" />
          <span className="ml-2">Stripe</span>
        </label>
      </div>
      <div className="mx-auto flex justify-center">
        <button
          className="w-1/2  px-4 py-2 mb-8 mr-4 font-bold  text-white bg-gray-700 rounded hover:bg-gray-900 focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={() => router.back()}
        >
          Cancel
        </button>

        <button
          // disabled={loading ? true : false}
          type="submit"
          className="w-1/2  px-4 py-2 mb-8 font-bold cursor-pointer text-white bg-gray-700 rounded hover:bg-blue-900 focus:outline-none focus:shadow-outline"
        >
          Check out
        </button>
      </div>
    </form>
    //       </div>
    //     )}

    //     {selectedOption === "new-information" && (
    //       <div className="max-w-2xl mx-auto">
    //         <form
    //           onSubmit={handleSubmit}
    //           className="pb-1 pl-12 pr-12 pt-8 mb-8 shadow-2xl border-2 rounded-3xl"
    //         >
    //           <label
    //             className="block mb-2 font-bold text-gray-700"
    //             htmlFor="fullname"
    //           >
    //             Fullname:
    //           </label>
    //           <input
    //             className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    //             id="lastname"
    //             type="text"
    //             placeholder="Enter your fullname"
    //             required
    //             title="Please add your name"
    //           />

    //           <label
    //             className=" block mb-2 font-bold text-gray-700"
    //             htmlFor="street"
    //           >
    //             Street:
    //           </label>
    //           <input
    //             className="w-full block px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    //             id="street"
    //             type="text"
    //             placeholder="Enter your street"
    //             required
    //             pattern="[0-9A-Za-z\s\-\,\./]+"
    //           />

    //           <label
    //             className="block mb-2 font-bold text-gray-700"
    //             htmlFor="city"
    //           >
    //             City:
    //           </label>
    //           <select
    //             className=" w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    //             id="city"
    //             required
    //           >
    //             <option value=""> City </option>
    //             {provinces
    //               .sort((a, b) => a.name.localeCompare(b.name))
    //               .map((province) => (
    //                 <option key={province.code} value={province.name}>
    //                   {province.name}
    //                 </option>
    //               ))}
    //           </select>

    //           <label
    //             className="block mb-2 font-bold text-gray-700"
    //             htmlFor="country_id"
    //           >
    //             Country:
    //           </label>
    //           <select
    //             className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    //             id="country_id"
    //             required
    //           >
    //             <option value=""> Select country </option>
    //             <option value="704"> Vietnam </option>
    //           </select>

    //           <label
    //             className="block mb-2 font-bold text-gray-700"
    //             htmlFor="telephone"
    //           >
    //             Telephone:
    //           </label>
    //           <input
    //             className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    //             id="telephone"
    //             type="tel"
    //             placeholder="Enter your telephone"
    //             name="phone"
    //             pattern="0\d{1,3}[\-\s]?\d{8,}"
    //             required
    //             title="Telephone"
    //           />

    //           <label
    //             className="block mb-2 font-bold text-gray-700"
    //             htmlFor="email"
    //           >
    //             Email:
    //           </label>
    //           <input
    //             className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    //             id="email"
    //             type="email"
    //             placeholder="Enter your email address"
    //             required
    //           />

    //           <label
    //             className="block mb-2 font-bold text-gray-700"
    //             htmlFor="postcode"
    //           >
    //             Postcode:
    //           </label>
    //           <input
    //             className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    //             id="postcode"
    //             type="text"
    //             placeholder="Enter your number postcode"
    //             pattern="^[0-9a-zA-Z]{5,}$"
    //             required
    //             title="Postcode"
    //           />

    //           <div className="block mb-8">
    //             <h1 className="font-bold mb-2">Method payment</h1>
    //             <label className="block ml-2">
    //               <input
    //                 type="radio"
    //                 name="payment-method"
    //                 value="delivery"
    //                 checked={true}
    //               />
    //               <span className="ml-2">Payment on delivery</span>
    //             </label>
    //             <label className="block ml-2">
    //               <input type="radio" name="payment-method" value="stripe" />
    //               <span className="ml-2">Stripe</span>
    //             </label>
    //           </div>

    //           <div className="mx-auto flex justify-center">
    //             <button
    //               className="w-1/2  px-4 py-2 mb-8 mr-4 font-bold text-white bg-gray-700 rounded hover:bg-gray-900 focus:outline-none focus:shadow-outline"
    //               type="reset"
    //               onClick={() => router.back()}
    //             >
    //               Cancal
    //             </button>

    //             <button
    //               disabled={loading ? true : false}
    //               className="w-1/2  px-4 py-2 mb-8 font-bold cursor-pointer text-white bg-blue-700 rounded hover:bg-blue-900 focus:outline-none focus:shadow-outline"
    //             >
    //               Check out
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Checkout;

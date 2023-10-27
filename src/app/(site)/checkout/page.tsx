"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { provinces } from "vietnam-provinces";

const Checkout = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("existing-information");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);

    const fullname: string = formEntries.fullname as string;
    const country_id: string = formEntries.country_id as string;
    const telephone: string = formEntries.telephone as string;
    const city: string = formEntries.city as string;
    const street: string = formEntries.street as string;
    const email: string = formEntries.email as string;
    const postcode: string = formEntries.postcode as string;

    try {
      if (selectedOption === "existing-information") {
        setloading(false);
        const data = {
          fullname: "truong an",
          countryId: "704",
          street: "Phu Tan",
          city: "Ca Mau",
          telephone: "0912345678",
          postcode: "970000",
          email: "truonganfi@gmail.com",
        };

        // const res = await dispatch(Checkout({ method: payment }));
        // const check = unwrapResult(res);
        toast("Thanh Toán Thành Công");
        router.push("/");

        // return check;
      }

      if (selectedOption === "new-information") {
        setloading(false);
        const data = {
          fullname: fullname,
          countryId: country_id,
          street: street,
          city: city,
          telephone: telephone,
          postcode: postcode,
          email: email,
        };
        // await dispatch(CartAddress(data));
        // const res = await dispatch(Checkout({ method: payment }));
        // const check = unwrapResult(res);
        toast("Thanh Toán Thành Công");
        router.push("/");
        // return check;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-14">
      <h1 className="my-5 text-3xl font-bold text-center sm:w-screen">
        Address
      </h1>
      <ToastContainer />
      <div>
        <label className="flex items-center justify-center w-screen mb-2 ">
          <input
            type="radio"
            value="existing-information"
            checked={selectedOption === "existing-information"}
            className="ml-2 mr-2"
            onClick={() => setSelectedOption("existing-information")}
          />
          Exist information
        </label>
        <label className="flex items-center justify-center w-screen mb-2">
          <input
            type="radio"
            value="new-information"
            checked={selectedOption === "new-information"}
            className="mr-2 "
            onClick={() => setSelectedOption("new-information")}
          />
          New address
        </label>

        {selectedOption === "existing-information" && (
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="pb-1 pl-12 pr-12 pt-8 shadow-2xl border-2 rounded-3xl"
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
                  disabled={loading ? true : false}
                  className="w-1/2  px-4 py-2 mb-8 font-bold cursor-pointer text-white bg-gray-700 rounded hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                >
                  Check out
                </button>
              </div>
            </form>
          </div>
        )}

        {selectedOption === "new-information" && (
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="pb-1 pl-12 pr-12 pt-8 mb-8 shadow-2xl border-2 rounded-3xl"
            >
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="fullname"
              >
                Fullname:
              </label>
              <input
                className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="lastname"
                type="text"
                placeholder="Enter your fullname"
                required
                title="Please add your name"
              />

              <label
                className=" block mb-2 font-bold text-gray-700"
                htmlFor="street"
              >
                Street:
              </label>
              <input
                className="w-full block px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="street"
                type="text"
                placeholder="Enter your street"
                required
                pattern="[0-9A-Za-z\s\-\,\./]+"
              />

              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="city"
              >
                City:
              </label>
              <select
                className=" w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="city"
                required
              >
                <option value=""> City </option>
                {provinces
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((province) => (
                    <option key={province.code} value={province.name}>
                      {province.name}
                    </option>
                  ))}
              </select>

              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="country_id"
              >
                Country:
              </label>
              <select
                className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="country_id"
                required
              >
                <option value=""> Select country </option>
                <option value="704"> Vietnam </option>
              </select>

              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="telephone"
              >
                Telephone:
              </label>
              <input
                className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="telephone"
                type="tel"
                placeholder="Enter your telephone"
                name="phone"
                pattern="0\d{1,3}[\-\s]?\d{8,}"
                required
                title="Telephone"
              />

              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
                required
              />

              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="postcode"
              >
                Postcode:
              </label>
              <input
                className="w-full px-3 py-2 mb-5 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="postcode"
                type="text"
                placeholder="Enter your number postcode"
                pattern="^[0-9a-zA-Z]{5,}$"
                required
                title="Postcode"
              />

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
                  className="w-1/2  px-4 py-2 mb-8 mr-4 font-bold text-white bg-gray-700 rounded hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  type="reset"
                  onClick={() => router.back()}
                >
                  Cancal
                </button>

                <button
                  disabled={loading ? true : false}
                  className="w-1/2  px-4 py-2 mb-8 font-bold cursor-pointer text-white bg-blue-700 rounded hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                >
                  Check out
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
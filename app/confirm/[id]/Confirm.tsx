"use client";
import BackArrow from "@/components/Icons/BackArrow";
import CreditCard from "@/components/Icons/CreditCard";
import { useAuth } from "@/hooks/useAuth";
import { Credentials, Rental } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FieldValue, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface props {
  rental: Rental;
  params: { id: string };
}

const Confirm = ({ params, rental }: props) => {
  const user = JSON.parse(localStorage.getItem("order") as string);
  const { email } = useAuth();
  console.log(rental);

  const router = useRouter();
  const year = new Date().getFullYear();
  console.log(user);

  const image = rental.gallery.map((image) => (
    <Image
      key={image.id}
      className="w-full h-[24.5rem] object-cover md:rounded-r-xl"
      width={300}
      height={300}
      src={image.imageUrl}
      alt="Image of a rental"
    />
  ));

  const { register, handleSubmit } = useForm();

  interface BookingData extends Credentials {
    message: string;
  }

  const onSubmit = async (data: FieldValue<BookingData>) => {
    const { message } = data as BookingData;
    const firstName = user.firstName;
    const lastName = user.lastName;
    const phone = user.phone;
    const userEmail = email;
    try {
      const res = await fetch(
        `http://localhost:3000/api/booking/${params.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
            firstName,
            lastName,
            phone,
            userEmail,
          }),
        }
      );
      if (res.status === 201) {
        router.push("/");
        toast.success("Your booking has been placed");
        console.log(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <article>
        <BackArrow />
        <h1 className="text-4xl font-semibold text-center my-8">
          Your trip details
        </h1>
        <div className="max-w-[90rem] md:max-h-[30rem] bg-base-100 shadow-xl mx-auto rounded-xl sm:border">
          <div className="grid md:grid-cols-2">
            <div className="py-10 px-10">
              <h2 className="text-3xl font-semibold">{rental?.name}</h2>
              <hr className="my-10 border-gray-300" />
              <div className="flex justify-between gap-2">
                <div className="flex flex-col gap-10 text-xl">
                  <div>
                    <p>
                      {rental?.dateArrival}
                      <span className="mx-3">-</span>
                      {rental?.dateDeparture}
                    </p>
                    <p className="text-gray-400">{year}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>{rental.address}</p>
                    <p>
                      {rental.city}, {rental.city_short}
                    </p>
                    <p className="text-gray-400">{rental.country}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-xl">
                  <div className="flex gap-1">
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                  </div>
                  <p>{email}</p>
                  <div>
                    <CreditCard />
                    <p className="text-gray-400 text-lg">XXXX-XXXX-XXXX-XXX</p>
                  </div>
                </div>
              </div>
            </div>
            {image[0]}
          </div>
        </div>
      </article>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-[90rem] shadow-xl mx-auto sm:rounded-xl border bg-primary py-10 px-10 md:px-20 mt-20">
          <h2 className="text-center text-white text-4xl font-semibold mb-8">
            Message to host
          </h2>

          <textarea
            rows={8}
            {...register("message")}
            className="w-full resize-none py-10 px-5 md:px-20 rounded-xl text-xl focus:outline-none"
            placeholder="Additional information... "
          />
        </div>
        <button
          type="submit"
          className="btn rounded-none uppercase md:mt-12 absolute left-0 w-full h-20 bg-primary text-3xl text-white hover:bg-primary_hover duration-300"
        >
          confirm
        </button>
      </form>
    </section>
  );
};

export default Confirm;

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUsersPostMutation } from "../../redux/features/users/usersApi";
import ReusableForm from "../../reusuable form/ReusuableForm";
import { useDonationPostMutation } from "../../redux/features/donations/donationsApi";

const CreateDonation = () => {
  const { register, handleSubmit, reset } = useForm();
  const [postDonation, { isLoading, isError, isSuccess }] =
    useDonationPostMutation();

  const handleonSubmit = (data) => {
    console.log(data);
    postDonation(data);
    if (data) {
      alert("Added  Successfully !!!!");
    }
  };

  const donationFormFields = [
    { type: "text", name: "name", placeholder: "Enter your name" },
    { type: "email", name: "email", placeholder: "Enter your email" },
    { type: "text", name: "title", placeholder: "Enter Donation title" },
    {
      type: "text",
      name: "description",
      placeholder: "Enter Description",
    },
    { type: "text", name: "amount", placeholder: "Enter Donation Amount" },
    { type: "text", name: "img", placeholder: "Enter your picture" },
    { type: "text", name: "category", placeholder: "Enter Donation Category" },
    { type: "text", name: "phone", placeholder: "Enter your phone no" },
  ];

  const styles = {
    colr: {
      color: "#2A9D8F",
    },
    paraColr: {
      color: "#8D8D8D",
    },
    bg: {
      background:
        "radial-gradient(50% 127.87% at 50% 50%, #65C4B8 0%, rgba(217, 217, 217, 0) 100%)",
    },
  };
  return (
    <div className=" px-2 md:px-6">
      {/* grid grid-cols-1 md:grid-cols-2 gap-x-6 */}
      <div className="w-[800px] mx-auto ">
        <div className="max-w-md"></div>
        <div className="px-10 md:px-0 md:p-4 pt-10">
          <h1 className="text-center md:text-4xl text-2xl text-accent my-2 mt-10  font-semibold">
            Please Donate Now
          </h1>
          <p style={styles.paraColr} className="mb-8 text-center">
            YOUR DONATION IS SOMEONE'S DREAM!!!!
          </p>
          <div>
            <div className="">
              <ReusableForm
                onSubmit={handleonSubmit}
                inputFields={donationFormFields}
              />

              <p className="text-black mb-4">
                Already Registered ?{" "}
                <Link to="/" className="text-[#2A9D8F]">
                  Back to Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDonation;

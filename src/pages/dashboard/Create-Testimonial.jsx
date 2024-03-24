import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ReusableForm from "../../reusuable form/ReusuableForm";
import { useTestimonialPostMutation } from "../../redux/features/testimonial/testimonialApi";

const CreateTestimonial = () => {
  const { register, handleSubmit, reset } = useForm();
  const [postTestimonial, { isLoading, isError, isSuccess }] =
    useTestimonialPostMutation();

  const handleonSubmit = (data) => {
    console.log(data);
    postTestimonial(data);
    if (data) {
      alert("Added  Successfully !!!!");
    }
  };

  const testimonialFormFields = [
    { type: "text", name: "name", placeholder: "Enter your name" },
    { type: "email", name: "email", placeholder: "Enter your email" },
    { type: "text", name: "review", placeholder: "Enter your review" },
    {
      type: "text",
      name: "rating",
      placeholder: "Enter rating",
    },
    { type: "text", name: "img", placeholder: "Enter your picture" },
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
                inputFields={testimonialFormFields}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTestimonial;

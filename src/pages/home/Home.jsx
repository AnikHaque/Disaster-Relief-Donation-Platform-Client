import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUsersPostMutation } from "../../redux/features/users/usersApi";
import HeroSection from "../../components/Hero-Section/HerSection";

const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  const [postuser, { isLoading, isError, isSuccess }] = useUsersPostMutation();
  const onSubmit = (data) => {
    console.log(data);
    postuser(data);
    if (data) {
      alert("Added  Successfully !!!!");
    }
  };

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
    <div>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Home;

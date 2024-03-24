// configuration
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
// custom css file

import { Link, useLoaderData } from "react-router-dom";
import { useDonationsGetQuery } from "../../redux/features/donations/donationsApi";
import DonationCard from "./DonationCard";

const Donation = () => {
  const {
    data: donations,
    isLoading,
    isError,
    isSuccess,
  } = useDonationsGetQuery();
  const [search, setSearch] = useState("");
  console.log(search);

  let content = null;

  if (isLoading && !isError) {
    content = <p>Loading</p>;
  }
  if (!isLoading && isError) {
    content = <p>An error occured</p>;
  }
  if (!isLoading && !isError && donations.length === 0) {
    content = <p>No Data Found</p>;
  }
  if (!isLoading && !isError && donations.length > 0) {
    content = (
      <div className="grid grid-cols-1 lg: grid-cols-3 gap-4">
        {donations
          .filter((donation) => {
            return search?.toLowerCase() === ""
              ? donation
              : donation?.title?.toLowerCase().includes(search);
          })
          .map((donation) => (
            <DonationCard donation={donation}></DonationCard>
          ))}
      </div>
    );
  }

  return (
    <div>
      <div className="relative  flex justify-end items-center md:mr-6 my-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          className=" p-2 bg-white text-black rounded-md"
          placeholder="Organization Search"
        />
        <div className="absolute text-black  pin-r pin-t mt-3 mr-4 ">
          <p className="cursor-pointer mb-2">
            <BsSearch />
          </p>
        </div>
      </div>
      <div className="ml-10 mr-10">{content}</div>
    </div>
  );
};

export default Donation;

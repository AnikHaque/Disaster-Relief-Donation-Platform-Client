import React from "react";

const DonationCard = ({ donation }) => {
  return (
    <div>
      <div className="card max-w-sm bg-base-100 shadow-xl">
        <figure>
          <img src={donation.img} alt="Shoes" className="w-full h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {donation.title}
            <div className="badge badge-secondary">{donation.category}</div>
          </h2>
          <p></p>
          <div className="card-actions justify-left">
            <div className="badge ">
              <b>Amount:</b> $ {donation.amount}
            </div>
          </div>
          <div className="card-actions justify-end">
            <div className="btn btn-accent">View Details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;

import React from "react";
import { Rating } from "@mui/material";
import profilePng from "../../images/Profile.png";

const ReviewCard = ({ review }) => {
  return (
    <div className="reviewCard flex flex-col items-center shadow-md border border-solid border-gray-600 w-2/6 m-2 p-8">
      <img src={profilePng} alt="User" className="w-[10%]" />
      <p className="text-gray-800 font-semibold text-base font-Roboto">
        {review.name}
      </p>
      <Rating defaultValue={review.rating} precision={0.5} readOnly />
      <span className="text-gray-600 font-light text-sm font-Roboto">
        {review.comment}
      </span>
    </div>
  );
};

export default ReviewCard;

import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { Link, useParams } from "react-router-dom";

const ReviewItem = ({ details }) => {
  const { picture, name, rating, review, id} = details;
  return (
    <Link to={`/review/${id}`}>
      <div className="border-2 bg-slate-100 rounded-md hover:drop-shadow-xl duration-200 cursor-pointer p-3">
        <div className="flex justify-around items-center">
          <h1 className="text-3xl text-black font-medium font-serif">{name}</h1>
          <div className="w-3/12">
            <img src={picture} alt={name} className="w-full rounded-full" />
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div className="">
            <div>
              <span className="flex justify-items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <h1 className="text-left font-mono text-gray-800"> {review}</h1>
              </span>
            </div>
            <div className="mt-2">
              <h1 className="text-2xl font-medium">
                Rating :{" "}
                <span className="text-2xl text-teal-500">{rating}</span>{" "}
              </h1>
            </div>
          </div>
          <div className="w-6/12 mx-2 mt-4">
            <img
              src="https://w0.peakpx.com/wallpaper/620/932/HD-wallpaper-ulysses-nardin-blue-clock-clocks-fossil-luxury-rotary-watch-watches-zenith-thumbnail.jpg"
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReviewItem;

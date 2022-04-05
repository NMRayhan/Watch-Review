import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Home.css";

const Home = () => {
  const [Review, setReview] = useState([]);
  useEffect(() => {
    axios.get("reviewData.json").then((response) => setReview(response.data));
  }, []);

  return (
    <div>
      <div className="mt-4 container mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 md:text-center lg:text-left sm:text-left justify-items-center items-center header-container">
          <div className="">
            <div>
              <h1 className="text-6xl text-left text-sky-600 font-mono font-bold">
                Watch your time
              </h1>
              <h1 className="text-6xl text-left text-fuchsia-500 font-serif font-bold">
                Go fast for life
              </h1>
            </div>

            <div>
              <p className="text-justify text-2xl font-normal text-gray-500 mt-5">
                These product details can be one sentence, a short paragraph or
                bulleted. They can be serious, funny or quirky. They can be
                located right next to or underneath product titles and product
                images. They can be scannable selling points or have strong
                readability.
              </p>
            </div>

            <div className="mt-4">
              <Link to="/contact" className="header-button text-center font-medium text-blue-100 bg-blue-600 rounded-sm p-3 text-2xl hover:bg-blue-500 hover:text-blue-100 duration-200">
                Learn More
              </Link>
            </div>
          </div>
          <div className="header-img md:mt-6 sm:mt-6">
            <img
              className="w-100"
              src="https://w0.peakpx.com/wallpaper/620/932/HD-wallpaper-ulysses-nardin-blue-clock-clocks-fossil-luxury-rotary-watch-watches-zenith-thumbnail.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="py-8 container mx-auto review-item">
        <h1 className="text-4xl text-center font-mono text-blue-500 py-3">
          Some Our Happy Customer
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {Review.slice(0, 3).map((item) => (
            <ReviewItem
              details={item}
              key={item._id}
            ></ReviewItem>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/review"
            className=" text-3xl bg-sky-500 hover:text-sky-200 text-teal-100 p-3 rounded-md hover:bg-sky-600 duration-100"
          >
            See all Review
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

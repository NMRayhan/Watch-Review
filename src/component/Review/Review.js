import React from "react";
import useItems from "../../hooks/getReview";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [Items, setItems] = useItems();

  return (
    <div className="pt-4 container mx-auto"><br />
      <h2 className="text-5xl font-bold text-red-600">
        Total Review {Items.length}
      </h2>
      <br /><br />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {Items.map((item) => (
          <ReviewItem details={item} key={item._id}></ReviewItem>
        ))}
      </div>
    </div>
  );
};

export default Review;

import React from "react";
import useItems from "../../hooks/useItems";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [Items, setItems] = useItems();
  return (
    <div className="pt-4 container mx-auto">
      <br />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {Items.map((item) => (
          <ReviewItem details={item} key={item.id}></ReviewItem>
        ))}
      </div>
    </div>
  );
};

export default Review;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsReview = () => {
  const { id } = useParams();

  const [Items, setItems] = useState([]);
  useEffect(() => {
    fetch("reviewData.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [id]);
  return (
    <div>
      <h1>{Items.length}</h1>
    </div>
  );
};

export default DetailsReview;

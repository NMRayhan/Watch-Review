import { useEffect, useState } from "react";

const useItems = () => {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    fetch("reviewData.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return [Items, setItems];
};


export default useItems;

import { useEffect, useState } from "react";

const useDashboard = () => {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    fetch("DashBoard.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return [Items, setItems];
};

export default useDashboard;

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

const useDashboard = () => {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    fetch("DashBoard.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return [Items, setItems];
};

export { useItems, useDashboard };

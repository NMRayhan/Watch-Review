import React from "react";
import useDashboard from "../../hooks/useDashboard";

const Dashboard = () => {
  const [Items, setItems] = useDashboard();

  console.log(Items);
  return (
    <div className="pt-4 container mx-auto">
      <h2 className="text-5xl text-center font-bold text-red-600">DashBoard</h2>

      

    </div>
  );
};

export default Dashboard;

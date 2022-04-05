import React from "react";
import { Bar } from "rechart";
import {
  Area,
  AreaChart,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useDashboard from "../../hooks/useDashboard";

const Dashboard = () => {
  const [Items, setItems] = useDashboard();

  console.log(Items);
  return (
    <div className="pt-4 container mx-auto">
      <div className="grid grid-cols-2 justify-between items-center mt-8">
        <div>
          <LineChart
            width={500}
            height={300}
            data={Items}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis dataKey="investment" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          </LineChart>
          <h1 className="text-left text-3xl text-teal-400 font-serif font-semibold">Investment vs revenue </h1>
        </div>
        <div>
          <AreaChart
            width={500}
            height={400}
            data={Items}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sell"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
          <h1 className="text-left text-3xl text-teal-400 font-serif font-semibold">Sell Average </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

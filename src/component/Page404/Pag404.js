import React from "react";
import "./Page404.css";

const Page404 = () => {
  return (
    <div>
      <div className="page-container">
          <div>
              <h1 className="text-6xl text-left text-indigo-600 font-bold font-mono">404</h1>
          </div>
          <div>
              <h1 className="text-4xl font-extrabold text-gray-700 font-mono">Page Not Found</h1>
              <p className="text-2xl font-extralight text-gray-500 font-mono">Please check the URL and the address bar and try agin</p>
          </div>
      </div>
    </div>
  );
};

export default Page404;

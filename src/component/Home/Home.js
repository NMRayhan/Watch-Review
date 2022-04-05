import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="pt-4 container mx-auto">
        <div className="grid grid-cols-2 justify-items-center items-center header-container">
          <div className="">
              <div>
                  <h1 className="text-6xl text-left text-sky-600 font-mono font-bold">Watch your time</h1>
                  <h1 className="text-6xl text-left text-fuchsia-500 font-serif font-bold">Go fast for life</h1>
              </div>

              <div>
                  <p className="text-justify text-2xl font-normal text-gray-500 mt-5">These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky. They can be located right next to or underneath product titles and product images. They can be scannable selling points or have strong readability.</p>
              </div>

              <div className="mt-4">
                  <button className="header-button text-center font-medium text-blue-100 bg-blue-600 rounded-sm p-3 text-2xl hover:bg-blue-500 hover:text-blue-100 duration-200">Learn More</button>
              </div>
          </div>
          <div className="header-img">
            <img
              src="https://w0.peakpx.com/wallpaper/620/932/HD-wallpaper-ulysses-nardin-blue-clock-clocks-fossil-luxury-rotary-watch-watches-zenith-thumbnail.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

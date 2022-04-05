import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="py-3">
        <div className="container mx-auto w-9/12">
          <div className="form-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="mt-8 flex items-start justify-start gap-6">
              <h1 className="text-2xl font-serif font-light">Contact Name</h1>
              <input
                type="text"
                placeholder="Your Contact name..."
                className="text-slate-100 bg-teal-200 font-bold font-serif text-2xl w-6/12 p-4 focus:bg-slate-100 focus:text-slate-900 duration-150"
              />
            </div>
            <div className="mt-8 flex items-start justify-start gap-6">
              <h1 className="text-2xl font-serif font-light">Contact Number</h1>
              <input
                type="number"
                placeholder="Contact Number ..."
                className="text-slate-100 bg-teal-200 font-bold font-serif text-2xl w-6/12 p-4 focus:bg-slate-100 focus:text-slate-900 duration-150"
              />
            </div>
            <div className="mt-8 flex items-start justify-start gap-6 col-span-2">
              <h1 className="text-2xl font-serif font-light">Contact Number</h1>
              <div className="w-full">
                <textarea
                  name=""
                  placeholder="Contact Number ..."
                  className="text-slate-100 bg-teal-200 font-bold font-serif text-2xl w-6/12 p-4 focus:bg-slate-100 focus:text-slate-900 duration-150"
                  rows="10"
                  cols="30"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="text-white p-4 rounded-lg hover:bg-slate-200 hover:text-slate-800 duration-150 hover:shadow-md mt-4 bg-slate-500 border-0 text-center">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

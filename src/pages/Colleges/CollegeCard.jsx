import React from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({ data }) => {
  const { college_name, image_url, admission_date, research_history } = data;
  console.log();
  return (
    <div className="mb-4 p-0 sm:p-4 md:w-full">
      {" "}
      {/* Card container */}
      <div className="group border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
        {/* :CARD IMAGE */}
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
          src={image_url}
          alt="blog"
        />

        {/* :CARD CATEGORY */}
        <h2 className="pt-4 pb-1 px-6 inline-block text-xs title-font font-semibold text-red-400 uppercase tracking-widest cursor-pointer hover:font-bold">
          {college_name}
        </h2>

        {/* :CARD BODY */}
        <div className="py-8 px-6">
          {/* ::Card title */}
          <h1 className="mb-3 inline-block title-font text-xl font-extrabold text-gray-800 tracking-wide cursor-pointer">
            Admission : {admission_date}
          </h1>
          {/* ::Card excerpt */}
          <p className="line-clamp-6 mb-3 pb-3 overflow-hidden leading-relaxed text-gray-500 cursor-pointer">
            Research Papers : {research_history[2].total}
          </p>
          <Link to="/" className="p-3 text-white rounded-lg bg-red-700">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;

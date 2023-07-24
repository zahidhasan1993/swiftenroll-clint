import React, { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("https://swift-enroll-server.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  // console.log(colleges);
  return (
    <div>
        <h1 className="text-4xl font-semibold pt-28 mb-5">Best Coll<span className="text-red-700">eges</span></h1>
      <div className="md:grid md:grid-cols-3">
        {colleges.map((college) => (
          <CollegeCard key={college.Id} data={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;

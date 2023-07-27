import React, { useEffect, useState } from "react";
import "@tailwindcss/aspect-ratio";
import { Link } from "react-router-dom";


const BestColleges = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swift-enroll-server.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  // const value = useContext(DataProvider);
  // console.log(value);
  // console.log(data);
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-700">
          Some Colle<span className="text-red-700">ges</span>
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {data.map((college) => (
              <div key={college._id} className="group ">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={college.image_url}
                    alt="campus photo"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex justify-between mt-5 mb-20">
                  <div className=" ml-1">
                    <h3 className=" text-xl text-gray-900">
                      <span className="absolute inset-0" />
                      {college.college_name}
                    </h3>
                    <p className="text-base font-semibold text-gray-900 mt-2">
                      Admission Date :{" "}
                      <span className="font-normal ml-1">
                        {" "}
                        {college.admission_date}
                      </span>
                    </p>
                    <ul className="text-gray-900 mt-2">
                      College Events :
                      {college.events.map((event, index) => (
                        <li key={index} className="text-sm text-gray-600 mt-1">
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/details/${college._id}`}
                    className=" mt-44 mr-5 p-4 text-white font-bold bg-red-700 rounded-md hover:bg-red-600 hover:text-xl"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestColleges;

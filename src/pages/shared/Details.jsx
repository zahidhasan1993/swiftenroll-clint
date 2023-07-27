import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const college = useLoaderData();

  // console.log(college);
  return (
    <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
      <div className="relative flex-col items-start m-auto align-middle">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
          <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
            <div className="max-w-xl text-center lg:text-left">
              <div>
                <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                  {college.college_name}
                </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-red-700">
                  {college.college_details.motto}
                </p>
              </div>
            </div>
          </div>
          <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
            <img
              className="object-cover object-center w-full mx-auto bg-gray-300 border lg:ml-auto"
              alt="hero"
              src={college.image_url}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="pt-12 mx-auto lg:max-w-7xl">
          <dl className="grid grid-cols-1 gap-6 space-y-0 text-center lg:gap-24 lg:grid-cols-3 lg:text-left">
            <div>
              <div>
                <p className="mt-5 text-lg font-medium leading-6 text-black">
                  College Details
                </p>
              </div>
              <div className="mt-2 text-base text-gray-500">
                {`Founded : ${college.college_details.founded_year}`}
                <br />
                {`Location : ${college.college_details.location}`}
                <br />
                {`Student Count : ${college.college_details.student_count}`}
              </div>
            </div>
            <div>
              <div>
                <p className="mt-5 text-lg font-medium leading-6 text-black">
                  Events
                </p>
              </div>
              <div className="mt-2 text-base text-gray-500">
                <ul>
                  {college.events.map((event,index) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div>
                <p className="mt-5 text-lg font-medium leading-6 text-black">
                  Research
                </p>
              </div>
              <div className="mt-2 text-base text-gray-500">
                <ul>
                  {college.research_history.map((research,index) => (
                    <p key={index}>{research.title}</p>
                  ))}
                </ul>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Details;

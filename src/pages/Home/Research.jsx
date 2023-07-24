import React from "react";

const Research = () => {
  return (
    <div className="bg-white  mt-10">
      <div className="overflow-x-auto">
        <table className="table-auto w-1/2 md:w-full">
          <thead className="border-b">
            <tr className="bg-gray-100">
              <th className="text-left p-4 font-medium">Name</th>
              <th className="text-left p-4 font-medium">Email</th>
              <th className="text-left p-4 font-medium">Paper Link</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Lucie Waters</td>
              <td className="p-4">basic@example.com</td>
              <td className="p-4"><a href="https://www.researchgate.net/profile/Jonas-Hallstroem/publication/279189030_Technology_for_a_Sustainable_Life_Images_in_Swedish_Children%27s_Literature/links/558d451b08ae18cfc19db3c5/Technology-for-a-Sustainable-Life-Images-in-Swedish-Childrens-Literature.pdf###page=238">Link</a></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Anahi</td>
              <td className="p-4">admin@example.com</td>
              <td className="p-4"><a href="https://www.researchgate.net/profile/Jonas-Hallstroem/publication/279189030_Technology_for_a_Sustainable_Life_Images_in_Swedish_Children%27s_Literature/links/558d451b08ae18cfc19db3c5/Technology-for-a-Sustainable-Life-Images-in-Swedish-Childrens-Literature.pdf###page=238">Link</a></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Zazi</td>
              <td className="p-4">admin@example.com</td>
              <td className="p-4"><a href="https://www.researchgate.net/profile/Jonas-Hallstroem/publication/279189030_Technology_for_a_Sustainable_Life_Images_in_Swedish_Children%27s_Literature/links/558d451b08ae18cfc19db3c5/Technology-for-a-Sustainable-Life-Images-in-Swedish-Childrens-Literature.pdf###page=238">Link</a></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Stefen</td>
              <td className="p-4">admin@example.com</td>
              <td className="p-4"><a href="https://www.researchgate.net/profile/Jonas-Hallstroem/publication/279189030_Technology_for_a_Sustainable_Life_Images_in_Swedish_Children%27s_Literature/links/558d451b08ae18cfc19db3c5/Technology-for-a-Sustainable-Life-Images-in-Swedish-Childrens-Literature.pdf###page=238">Link</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Research;

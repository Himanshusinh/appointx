import React from "react";
import RotatingSearchList from "./RotatingSearchList";

const Findservice = () => {
  return (
    <div className="bg-[#384C6A] w-[83vw] rounded-2xl flex justify-center gap-20 ">
      <div className="flex justify-center flex-col -ml-32">
        <h1 className="font-clash text-6xl text-white mb-6">Find your service</h1>
        <ul className="list-disc ml-6 font-poppins text-white text-lg font-medium">
  <li>Browse Services: Explore categories to find what you need.</li>
  <li>Search: Use the search bar to quickly locate a specific service.</li>
  <li>Filters: Apply filters for date, time, location, and more.</li>
</ul>

      </div>
        <div>
            <RotatingSearchList />
        </div>
      
    </div>
  );
};

export default Findservice;

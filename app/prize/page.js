// @flow strict

import { prizeData } from "@/utils/data/prize-data"; // Assuming this is where prizeData is stored
import PrizeCard from "/app/components/prize/prize-card.jsx";
//app\components\prize\prize-card.jsx
function page() {
  return (
    <div className="py-8">
      {/* Title Section */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            My Prizes
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Prize Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          prizeData.map((prize, i) => (
            <PrizeCard prize={prize} key={i} />
          ))
        }
      </div>
    </div>
  );
}

export default page;

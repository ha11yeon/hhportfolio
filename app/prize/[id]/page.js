// /prize/[id]/page.js
import { prizeData } from "@/utils/data/prize-data"; // Import prize data

// Function to fetch prize data based on dynamic ID
async function getPrize(id) {
  const prize = prizeData.find((prize) => prize.id === parseInt(id, 10)); // Find prize by id

  if (!prize) {
    throw new Error("Prize not found"); // Error if id does not match any prize
  }

  return prize;
}

// PrizeDetails component that dynamically renders based on ID
async function PrizeDetails({ params }) {
  const { id } = params; // Get id from URL parameters
  const prize = await getPrize(id); // Fetch prize data based on id

  return (
    <div className="container mx-auto p-6">
      {/* Display Title */}
      <h1 className="text-3xl font-bold text-white mb-6">{prize.title}</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Prize Image */}
        <div className="w-full md:w-1/3">
          <img
            src={prize.image}
            alt={prize.title}
            width={1920}
            height={1080}
            className="rounded-lg"
          />
        </div>

        {/* Prize Details */}
        <div className="w-full md:w-2/3 space-y-4">
          <p className="text-4xl text-[#16f2b3]">{prize.prize}</p>
          <p className="text-lg text-[#16f2b3]">Issued by: {prize.issue}</p>
          <p className="text-lg text-[#16f2b3]">Date: {prize.time}</p>
          <p className="text-base lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 whitespace-pre-line lg:line-clamp-5"
          >

            
            {prize.contribution}</p>
        </div>
      </div>
    </div>
  );
}

export default PrizeDetails;

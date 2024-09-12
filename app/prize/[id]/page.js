// /prize/[id]/page.js
import { prizeData } from "@/utils/data/prize-data"; // 상 데이터 가져오기

// 동적 id에 맞는 prize 데이터를 가져오는 함수
async function getPrize(id) {
  // id에 맞는 prizeData에서 해당 상을 찾음
  const prize = prizeData.find((prize) => prize.id === parseInt(id));

  if (!prize) {
    throw new Error("Prize not found");
  }

  return prize;
}

async function PrizeDetails({ params }) {
  const { id } = params;
  const prize = await getPrize(id); // 동적으로 id에 맞는 데이터 가져오기

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-6">{prize.title}</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* 상 이미지 */}
        <div className="w-full md:w-1/3">
          <img
            src={prize.image}
            alt={prize.title}
            width={1920}
            height={1080}
            className="rounded-lg"
          />
        </div>

        {/* 상 상세 정보 */}
        <div className="w-full md:w-2/3">
          <p className="text-lg text-[#16f2b3] mb-2">Company: {prize.company}</p>
          <p className="text-base text-[#d3d8e8] mb-4">{prize.description}</p>
          <p className="text-sm text-gray-400">Duration: {prize.duration}</p>
        </div>
      </div>
    </div>
  );
}

export default PrizeDetails;

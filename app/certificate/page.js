import { certificateData } from "@/utils/data/certificate-data.js"; // 경험 데이터 가져오기
import Image from "next/image"; // 이미지 컴포넌트
import { BsPersonWorkspace } from "react-icons/bs"; // 아이콘 라이브러리
import GlowCard from "/app/components/helper/glow-card.jsx"; // 카드 UI 컴포넌트
import Navbar from "/app/components/navbar.jsx"; // Navbar 컴포넌트 추가

export default function CertificatePage() {
  const handleCardClick = (link) => {
    window.open(link, '_blank');
  };
  return (
    
    <div id="certificate" className="relative z-50 border-t mb-12 lg:mb-24 border-[#25213b]">
      {/* 배경 이미지 */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* 상단 타이틀 */}
      <div className="flex justify-center mb-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white mt-10 p-2 px-5 text-xl rounded-md">
            Certificate
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 mx-20 gap-8 lg:gap-16">

          {/* GlowCard를 활용한 경험 목록 */}
          <div>
            <div className="flex flex-col gap-6">
              {certificateData.map((certificateData) => (
                <GlowCard 
                key={certificateData.id} 
                identifier={`certificate-${certificateData.id}`}
                
                >
                  <div className="p-3 relative">
                    {/* 카드 배경 이미지 */}
                    {/*<Image
                      src="/blur-23.svg"
                      alt="Background"
                      width={1080}
                      height={100}
                      className="absolute bottom-0 opacity-80"
                    />*/}


                    {/* 아이콘 및 경험 정보 */}
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {certificateData.title}
                        </p>
                        <p className="text-sm sm:text-base mb-2 font-medium uppercase">
                          {certificateData.company}
                        </p>
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {certificateData.duration}
                      </p>
                        
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

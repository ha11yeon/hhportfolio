// components/prize/PrizeCard.jsx
import Link from 'next/link';
import Image from 'next/image';

function PrizeCard({ prize }) {
  return (
    <Link href={`/prize/${prize.id}`} passHref>
      <div className="border border-[#1d293a] hover:border-[rgb(70,76,106)] transition-all duration-500 bg-[#1b203e] rounded-lg relative hover:shadow-2xl shadow-white hover:-translate-y-2 transform cursor-pointer">
        <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
          <Image
            src={prize?.image}
            height={1080}
            width={1920}
            alt={prize.title}
            className="h-full w-full group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="p-2 sm:p-3 flex flex-col">
          <p className="my-2 lg:my-3 text-lg text-white sm:text-xl font-medium hover:text-violet-500 transition-all duration-300">
            {prize.title}
          </p>
          <p className="text-sm text-[#16f2b3]">
            {prize.company}
          </p>
          <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6">
            {prize.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PrizeCard;

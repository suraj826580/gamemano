import Image from "next/image";
import RatingFilter from "./RatingFilter";

export default function GameSection({ game }) {
  return (
    <section className="px-6 py-16 md:px-20 border-t border-gray-800 h-[615px] bg-primary text-white relative overflow-hidden">
      <div
        className={`
    max-w-5xl relative 
    ${game.position === "center" ? "mx-auto" : ""}
    ${game.position === "left" ? "mr-auto" : ""}
    ${game.position === "right" ? "ml-auto" : ""}
  `}
        style={
          game.position === "left"
            ? { left: game.positionValue || 0 }
            : game.position === "right"
            ? { right: game.positionValue || 0 }
            : {}
        }
      >
        <div className="flex justify-between  ">
          <h2 className="font-bold mb-4 font-aoboshi text-[70px] ">
            {game.title}
          </h2>
          <div className="h-40 ">
            <div className="bg-primary rounded-full font-poppins ">
              <div className="bg-[#2a2a2a] text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: "#00FF0A",
                    boxShadow: "0px 0px 4px 2px #7CFF8299",
                  }}
                ></span>
                <span>40 of your friends are playing</span>
              </div>
              <RatingFilter stars={3} label="" />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-1 uppercase">
          RELEASE DATE: {game.releaseDate}
        </p>

        <p className="text-gray-300 mb-6 max-w-2xl font-prosto text-[18px]">
          {game.description}
        </p>

        <div className={`flex flex-wrap gap-4 items-center font-poppins `}>
          <div className="flex flex-wrap gap-4 items-center font-poppins">
            <button className="bg-[#E58E27] hover:bg-yellow-600  font-bold py-2 px-6 rounded-full transition-all">
              Try for free
            </button>
            <div className="flex items-center gap-2 font-poppins">
              <span className="text-sm font-bold">Available on:</span>
              <div className="flex gap-1 items-center">
                <span className=" border-gray-700 px-2 py-0.5 rounded text-xs">
                  <Image
                    src={"/IOS.png"}
                    alt="image"
                    height={150}
                    width={150}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        {game.price && (
          <p className="text-sm text-gray-400 mt-4">
            Buy now for ${game.price} only
          </p>
        )}
      </div>
    </section>
  );
}

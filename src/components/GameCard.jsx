import RatingFilter from "./RatingFilter";

export default function GameCard({ game, game: { onlineCount = 1200 } }) {
  const stars = Math.round(game.rating);
  return (
    <div className=" h-[383px] bg-secondary rounded-xl overflow-hidden  hover:border-yellow-500/50 transition-all hover:shadow-lg hover:shadow-yellow-500/10 text-textPrimary">
      {/* Game Image */}
      <div className="relative h-40 border">
        {onlineCount && (
          <div className="absolute top-3 left-3 bg-primary rounded-full font-poppins">
            <div className="bg-[#2a2a2a] text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: "#00FF0A",
                  boxShadow: "0px 0px 4px 2px #7CFF8299",
                }}
              ></span>
              <span>{onlineCount} Online</span>
            </div>
          </div>
        )}
      </div>

      {/* Game Info */}
      <div className="p-4">
        <h3 className="font-400 text-[30px] text-lg mb-1 font-aoboshi">
          {game.title}
        </h3>
        <div className="flex mb-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < stars ? "text-orange-500 fill-orange-500" : "text-gray-400"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        {/* Game Details */}
        <div className="text-red-500 text-sm mb-1 font-bold font-poppins">
          {Array.isArray(game.category) && game.category.length > 0
            ? game.category.map((ele, index) => (
                <span key={index}>
                  {ele}
                  {index < game.category.length - 1 && <span> • </span>}
                </span>
              ))
            : null}
        </div>

        {/* Description Details */}
        <span className="font-poppins text-sm font-500">
          {game.description?.substring(0, 120) + "..."}
        </span>

        {/* Rating and Price */}
        <div className="flex justify-between items-center gap-5 font-poppins mt-4 ">
          <span className="font-600 text-black text-[22px]">${game.price}</span>
          {/* Button */}
          <button className="w-full bg-[#E58F28] text-white py-2 rounded-full text-[18px] font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

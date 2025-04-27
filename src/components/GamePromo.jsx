export default function GamePromo({
  title = "LEAGUE OF LEGENDS",
  releaseDate = "10TH DECEMBER",
  rating = 4.5,
  playerCount = 2459,
  description = "Wild Rift! Built from the ground up for mobile-first PvP. Wild Rift is a 5v5 multiplayer online battle arena (MOBA) game with real-time action where your skills, strategy, and combat senses are put to the test. Wild Rift is packed with content and fresh features for the ultimate PvP multiplayer experience.\n\nEnjoy fast-paced MOBA combat, real-time strategy, smooth controls, and diverse 5v5 gameplay. Team up with friends, lock in your champion, and play to win!",
  platforms = ["iOS"],
  ctaText = "Try For Free",
}) {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="relative w-full max-w-[80%] border-gray-800 mx-auto">
      {/* Border overlay */}
      <div
        className="absolute inset-0 border border-[#8a7248] rounded-lg"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 98% 0, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0 98%, 0 2%)",
        }}
      ></div>

      <div className="bg-[#1e1a14] rounded-lg overflow-hidden p-5">
        <div className="bg-[#121212] p-3 flex justify-between items-center max-w-86 max-w-sm relative ">
          <div className="text-xs text-gray-300">
            RELEASE DATE: {releaseDate}
          </div>
          <br />
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < filledStars
                    ? "text-yellow-500 fill-yellow-500"
                    : i === filledStars && hasHalfStar
                    ? "text-yellow-500"
                    : "text-gray-600"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {i === filledStars && hasHalfStar ? (
                  <path
                    fill="currentColor"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2v15.27z"
                  />
                ) : (
                  <path
                    fill="currentColor"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                )}
              </svg>
            ))}
          </div>
        </div>

        {/* Game title and CTA */}
        <div className="p-8 flex flex-col items-center justify-center text-center">
          <h2 className="font-wallpoet text-5xl md:text-6xl text-[#d0b882] tracking-wider mb-8">
            {title.split(" ").map((word, i) => (
              <div key={i} className="leading-tight">
                {word}
                {i === 0 && title.split(" ").length > 1 && (
                  <span className="text-3xl md:text-4xl"> OF</span>
                )}
              </div>
            ))}
          </h2>

          <button className="bg-[#e78e24] hover:bg-[#f59c2a] text-white font-medium py-2.5 px-8 rounded-full transition-colors">
            {ctaText}
          </button>

          <div className="flex items-center gap-2 mt-4 text-sm">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-green-500">
              {playerCount.toLocaleString()} players already enrolled
            </span>
          </div>

          <div className="flex items-center gap-2 mt-6 text-gray-300">
            <span>Available on:</span>
            <div className="flex gap-2">
              {platforms.map((platform) => (
                <div key={platform} className="flex items-center gap-1">
                  {platform === "iOS" && (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  )}
                  {platform === "Android" && (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16.61 15.15c-.46 0-.84.37-.84.84v4.38c0 .47.38.84.84.84.47 0 .84-.37.84-.84V16c.01-.47-.36-.85-.84-.85m-9.2 0c-.46 0-.84.37-.84.84v4.38c0 .47.38.84.84.84.47 0 .84-.37.84-.84V16c.01-.47-.36-.85-.84-.85m2.86-8.95L11.5 3.36l1.04 1.04L10.5 6.44l-1.04-1.04.81-1.2M6.41 7.22c-2.67 0-4.95 1.86-5.54 4.33l-.07.42v.64c0 .93.76 1.69 1.69 1.69h.33v4.4c0 .47.38.84.84.84h.84v-5.24h8.4v5.24h.84c.46 0 .84-.37.84-.84v-4.4h.33c.93 0 1.69-.76 1.69-1.69v-.64l-.07-.42a5.89 5.89 0 0 0-5.54-4.33H6.41m10.03 2.7c-.7 0-1.27.57-1.27 1.27s.57 1.27 1.27 1.27 1.27-.57 1.27-1.27-.57-1.27-1.27-1.27m-8.86 0c-.7 0-1.27.57-1.27 1.27s.57 1.27 1.27 1.27 1.27-.57 1.27-1.27-.57-1.27-1.27-1.27m7.79-2.03l-1.04-1.04 1.04-1.04 1.04 1.04-1.04 1.04z" />
                    </svg>
                  )}
                  {platform === "PC" && (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 4h18v12H3V4m0 14h18v2H3v-2z" />
                    </svg>
                  )}
                  <span>{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Game description */}
        <div className="px-8 pb-8 text-gray-300">
          <p className="mb-6 leading-relaxed">
            {description.split("\n\n").map((paragraph, i) => (
              <span key={i}>
                {paragraph}
                {i < description.split("\n\n").length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </span>
            ))}
          </p>

          <div className="mt-10">
            <h3 className="text-[#d0b882] font-wallpoet text-lg mb-2">
              CHOOSE YOUR
            </h3>
            <h2 className="text-[#d0b882] font-wallpoet text-4xl mb-4">
              CHAMPION
            </h2>
            <p className="text-gray-300">
              Whether you like to dive straight into the fray, support your
              teammates, or something in between, there's a spot for you on the
              Rift.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

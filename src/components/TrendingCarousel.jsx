"use client";

import { useState } from "react";
import GameCard from "../components/GameCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TrendingCarousel({ games }) {
  const [fade, setFade] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(games.length / itemsPerPage);

  const nextSlide = () => {
    const nextIndex =
      currentIndex + itemsPerPage >= games.length
        ? 0
        : currentIndex + itemsPerPage;
    handleChangeSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      currentIndex - itemsPerPage < 0
        ? Math.max(0, games.length - itemsPerPage)
        : currentIndex - itemsPerPage;
    handleChangeSlide(prevIndex);
  };

  const handleChangeSlide = (newIndex) => {
    setFade(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(false);
    }, 300);
  };

  const visibleGames = games.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        {visibleGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              Math.floor(currentIndex / itemsPerPage) === index
                ? "bg-yellow-500"
                : "bg-gray-700"
            }`}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {games.length > itemsPerPage && (
        <>
          <button
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary  transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
}

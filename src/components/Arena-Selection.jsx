"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "../lib/utils";

const reviews = [
  {
    rating: 4,
    author: "Player123",
    text: "This arena provides a unique balance of challenges and opportunities. The terrain features create strategic advantages for those who know how to use them. Definitely worth trying.",
    recommended: true,
  },
  {
    rating: 5,
    author: "GameMaster",
    text: "Absolutely stunning arena design with perfect balance between open spaces and cover. The lighting effects create an immersive atmosphere that enhances gameplay.",
    recommended: true,
  },
  {
    rating: 3,
    author: "ProGamer",
    text: "Decent arena but lacks some of the advanced features found in others. The spawn points could be better positioned to avoid early confrontations. Still enjoyable for casual matches.",
    recommended: false,
  },
  {
    rating: 4,
    author: "TacticalPlayer",
    text: "Great arena for team-based gameplay with well-designed choke points and multiple pathways. The environmental hazards add an interesting layer of complexity.",
    recommended: true,
  },
];

const arenas = [
  { id: 1, name: "Arena 1" },
  { id: 2, name: "Arena 2" },
  { id: 3, name: "Arena 3" },
];

export default function ArenaSelection() {
  const [selectedArena, setSelectedArena] = useState(null);

  return (
    <div className="min-h-screen bg-primary text-white p-6 my-5 flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <div className="text-center mb-6">
              <h2 className="text-[#D4AF37] text-xl mb-2">
                CHOOSE FROM MULTIPLE
              </h2>
              <h1 className="text-[#D4AF37] text-4xl font-bold tracking-wider mb-4">
                ARENAS
              </h1>
              <p className="text-gray-400 text-sm max-w-lg mx-auto">
                Master various in-game formats with our selection of carefully
                designed arenas. Each arena offers unique challenges that will
                test your skills.
              </p>
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Circle outline */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400 animate-pulse"></div>

              {/* Inner content */}
              <div className="absolute inset-0 flex items-center justify-center">
                {selectedArena ? (
                  <div className="text-center">
                    <h3 className="text-[#D4AF37] text-2xl font-bold">
                      Arena {selectedArena}
                    </h3>
                    <p className="text-gray-400 mt-2">Selected</p>
                  </div>
                ) : (
                  <div className="text-center text-gray-400">
                    <p>Select an arena</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            {arenas.map((arena) => (
              <div
                key={arena.id}
                className={cn(
                  "border border-gray-700 p-4 cursor-pointer transition-all",
                  selectedArena === arena.id
                    ? "bg-[#D4AF37]/10 border-[#D4AF37]"
                    : "hover:bg-gray-900"
                )}
                onClick={() => setSelectedArena(arena.id)}
              >
                <h3 className="text-[#D4AF37]">{arena.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl">Reviews from other top players</h2>
            <div className="text-sm text-gray-400">VIEW ALL →</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#D4AF37]/20 p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < review.rating
                            ? "fill-[#D4AF37] text-[#D4AF37]"
                            : "text-gray-600"
                        )}
                      />
                    ))}
                  </div>
                  <div className="text-xs">
                    {review.recommended ? (
                      <span className="text-green-400">Recommended</span>
                    ) : (
                      <span className="text-gray-400">Not recommended</span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-gray-300 line-clamp-4 mb-2">
                  {review.text}
                </p>
                <p className="text-xs text-[#D4AF37]">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

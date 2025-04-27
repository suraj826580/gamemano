"use client";

import React, { useEffect } from "react";
import GameSection from "../components/GameSection";
import TrendingCarousel from "../components/TrendingCarousel";
import HeroSection from "../components/HeroSection";
import GameSearchResults from "./Games";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
// Game data for cards
const featuredGames = [
  {
    id: 5,
    title: "Evolution",
    category: "STRATEGY",
    description:
      "Players assume the role of Creator vs. Man, a timeless battle of survival and growth. In this game, you'll need to adapt to changing environments, develop new traits, and compete for resources to ensure your species thrives.",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=400",
    price: "$39",
    position: "right",
    // positionValue: 100,
  },
  {
    id: 6,
    title: "Valorant",
    category: "FPS",
    description:
      "Players assume the role of Creator vs. Man, a tactical shooter where precision and strategy are key. With a diverse cast of characters, each with unique abilities, you'll need to coordinate with teammates to secure objectives and outmaneuver enemies.",
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=400",
    price: "$40",
    position: "center",
    positionValue: 300,
  },
  {
    id: 7,
    title: "Warlords",
    category: "STRATEGY",
    description:
      "Players assume the role of Creator vs. Man, a tactical strategy game where you'll lead armies to victory. Build your empire, research technologies, forge alliances, and conquer your enemies in this epic battle for supremacy.",
    rating: 4.4,
    image: "/placeholder.svg?height=200&width=400",
    price: "$45",
    position: "left",
    // positionValue: 500,
  },
];

export default function Home() {
  const router = useRouter();
  const { showGamesDetailsPage, gamesData } = useSelector(
    (store) => store.games
  );
  const fetchData = async (query) => {
    try {
      await dispatch(getGamesFunc(query));
    } catch (err) {
      console.error("API Error:", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex-1 overflow-y-auto pb-10 bg-primary">
      {/* Hero Section */}
      {!showGamesDetailsPage ? (
        <>
          <HeroSection />
          {/* Trending Section */}
          <section className="px-6 py-12 md:px-12 backdrop-blur-[450px] bg-[#312A1D]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-[#DAB785] font-pressStart tracking-wider">
                MOST TRENDING
              </h2>
              <button
                className="text-lg font-bold hover:text-cream"
                onClick={() => router.push("/games")}
              >
                GO TO GAME STORE →
              </button>
            </div>
            <TrendingCarousel games={gamesData} />
          </section>
        </>
      ) : (
        <GameSearchResults />
      )}

      {/* Game Sections */}
      {featuredGames.map((game) => (
        <GameSection key={game.id} game={game} />
      ))}
    </main>
  );
}

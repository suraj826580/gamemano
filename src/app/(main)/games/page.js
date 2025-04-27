import React from "react";
import GameSearchResults from "../../../components/Games";
import GameSection from "../../../components/GameSection";

const featuredGames = [
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
    id: 7,
    title: "Battle of the Warlords",
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

export default function page() {
  return (
    <>
      <GameSearchResults />
      {featuredGames.map((game) => (
        <GameSection key={game.id} game={game} />
      ))}
    </>
  );
}

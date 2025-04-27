import React from "react";
import GamePromo from "../../../components/GamePromo";
import ArenaSelection from "../../../components/Arena-Selection";
export default function GameDetail() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#1a1410] to-[#0d0b08] py-12 px-4">
        <GamePromo
          title="LEAGUE OF LEGENDS"
          releaseDate="10TH DECEMBER"
          rating={4.5}
          playerCount={2459}
          platforms={["iOS"]}
          description="Wild Rift! Built from the ground up for mobile-first PvP. Wild Rift is a 5v5 multiplayer online battle arena (MOBA) game with real-time action where your skills, strategy, and combat senses are put to the test. Wild Rift is packed with content and fresh features for the ultimate PvP multiplayer experience.\n\nEnjoy fast-paced MOBA combat, real-time strategy, smooth controls, and diverse 5v5 gameplay. Team up with friends, lock in your champion, and play to win!"
          ctaText="Try For Free"
        />
        <ArenaSelection />
      </div>
    </>
  );
}

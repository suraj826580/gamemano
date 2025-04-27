import React from "react";
import Image from "next/image";
export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:px-12 border-b border-gray-800 h-[600px]">
        <div className="w-full">
          <h1 className="text-5xl font-bold  font-wallpoet tracking-wider text-[70px]">
            Days Gone
          </h1>
          <h5 className="mb-4 p-2  text-[12px]">
            RELEASE DATE : 30TH DECEMBER
          </h5>
          <p className="text-gray-300 mb-6 max-w-2xl font-prosto  text-[18px]">
            Players assume the role of Deacon St. John, a former bounty hunter
            struggling to survive in a post-apocalyptic world filled with
            zombie-like creatures called Freaks. Though players are surrounded
            by death and danger on all sides, the world that they get to explore
            feels as though it&apos;s truly alive, which can encourage players
            to take risks when they probably shouldn&apos;t.
          </p>
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
          <span className="text-sm font-bold">Buy now for $40 only</span>
          <div className="text-white text-xs py-1 rounded-full flex items-center gap-2 w-64 mt-5 ">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor: "#00FF0A",
                boxShadow: "0px 0px 4px 2px #7CFF8299",
              }}
            ></span>
            <span>40 of your friends are playing</span>
          </div>
          <div className="flex mt-8 gap-2 justify-center">
            <span className="w-2 h-2 rounded-full bg-cream"></span>
            <span className="w-2 h-2 rounded-full bg-gray-700"></span>
            <span className="w-2 h-2 rounded-full bg-gray-700"></span>
          </div>
        </div>
      </section>
    </>
  );
}

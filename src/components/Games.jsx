"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import GameCard from "./GameCard";
import RatingFilter from "./RatingFilter";
import { FilterCheckbox } from "./FilterCheckbox";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/reducer/gamesReducer/action";

const options = [
  { label: "Release date: Old to New", color: "#E58E27", value: "old_to_new" },
  { label: "Release date: New to Old", color: "#E58E27", value: "new_to_old" },
  { label: "Price: Low to High", color: "#E58E27", value: "low_to_high" },
  { label: "Price: High to Low", color: "#E58E27", value: "high_to_low" },
];

export default function GameSearchResults() {
  const [sortOption, setSortOption] = useState({});
  const dispatch = useDispatch();
  const { searchQuery, gamesData, categoryList } = useSelector(
    (store) => store?.games
  );

  async function fetchCategories() {
    try {
      await dispatch(getCategories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);
  function sortValue(option) {
    console.log(option);
    setSortOption(option);
  }
  return (
    <div className="min-h-screen bg-primary text-white p-4 md:p-6">
      <div className="mx-auto">
        <div className="mb-6">
          <h1 className="text-xl font-medium mb-1">
            Search results for {searchQuery}
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              {gamesData.length} results found
            </p>
            <SortDropdown currentOption={sortOption} onSelect={sortValue} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar with filters - now with proper sticky positioning */}
          <div className="w-full md:w-64 shrink-0">
            <FilterSidebar categoryList={categoryList} />
          </div>

          {/* Game grid - now with its own scrollable container */}
          <div className="flex-1 overflow-y-auto">
            {gamesData.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gamesData.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <h2 className="text-lg font-medium">
                    Checkout games similar to {searchQuery}
                  </h2>
                  <button className="text-sm flex items-center text-white-80 hover:text-white">
                    VIEW ALL <ChevronDown className="ml-1 w-4 h-4 rotate-270" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full text-center">
                <h1 className="font-pressStart text-2xl">Data not found</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FilterSidebar({ categoryList = [] }) {
  return (
    <div className="rounded-lg p-6 text-white sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-hide bg-black/20 backdrop-blur-sm border border-white/10">
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Categories</h3>
        <div className="space-y-3">
          {categoryList.map((ele) => (
            <FilterCheckbox key={ele.name} label={ele?.name} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Platforms</h3>
        <div className="space-y-3">
          <FilterCheckbox label="PC" />
          <FilterCheckbox label="PlayStation 5" />
          <FilterCheckbox label="PlayStation 4" />
          <FilterCheckbox label="Xbox Series" />
          <FilterCheckbox label="Nintendo Switch" />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Type</h3>
        <div className="space-y-3">
          <FilterCheckbox label="Paid" />
          <FilterCheckbox label="Free" />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Price</h3>
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center h-10 px-3 bg-[#2C2824] border border-[#3A3631] rounded-md w-24">
            <span className="text-sm mr-1">$</span>
            <input
              type="text"
              className="bg-transparent w-full focus:outline-none text-sm"
              defaultValue="40"
            />
          </div>
          <span>-</span>
          <div className="flex items-center h-10 px-3 bg-[#2C2824] border border-[#3A3631] rounded-md w-24">
            <span className="text-sm mr-1">$</span>
            <input
              type="text"
              className="bg-transparent w-full focus:outline-none text-sm"
              defaultValue="55"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Ratings</h3>
        <div className="space-y-3">
          <RatingFilter stars={5} label="& Up" />
          <RatingFilter stars={4} label="& Up" />
          <RatingFilter stars={3} label="& Up" />
          <RatingFilter stars={2} label="& Up" />
          <RatingFilter stars={1} label="& Up" />
        </div>
      </div>

      <button className="w-full bg-[#F08B2C] hover:bg-[#E67E22] text-white py-3 rounded-full font-medium">
        Apply Filters
      </button>
    </div>
  );
}

function SortDropdown({ currentOption, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center bg-primary/20 backdrop-blur-sm border border-white/10 text-white hover:bg-black/30 rounded-full px-4 py-1 h-auto text-sm"
      >
        Sort by: {currentOption.label}{" "}
        <ChevronDown
          className={`ml-1 w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute p-3 right-0 mt-2 z-10 w-56 bg-primary border border-white/10 rounded-lg overflow-hidden">
          <div className="py-1 ">
            {options.map((option) => (
              <button
                key={option.label}
                className={`w-full rounded-full text-left px-4  py-2 my-1 text-sm hover:bg-[#E58E27] bg-[${
                  currentOption.label === option.label ? option.color : ""
                }] `}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

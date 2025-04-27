"use client";

import React, { useState, useEffect } from "react";
import { getGamesFunc } from "../redux/reducer/gamesReducer/action";
import { useDispatch, useSelector } from "react-redux";
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery);
  const dispatch = useDispatch();
  useEffect(() => {
    if (debouncedQuery.trim()) {
      fetchData(debouncedQuery);
    } else {
      fetchData("");
    }
  }, [debouncedQuery]);

  const fetchData = async (query) => {
    try {
      await dispatch(getGamesFunc(query));
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  return (
    <input
      type="text"
      placeholder="What are you looking for?"
      className="bg-transparent text-white text-sm focus:outline-none w-full placeholder-gray-400 font-poppins"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

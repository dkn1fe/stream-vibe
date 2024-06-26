import { createAsyncThunk } from "@reduxjs/toolkit";
import { _mainUrl } from "./api";

export const fetchSearchFilms = createAsyncThunk(
  "searchFilms",
  async (text: string) => {
    const data = fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${text}&page=1`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "a07595fb-3216-4757-8370-6b97eaaf595e",
          "Content-Type": "application/json",
        },
      }
    );
    return (await data).json();
  }
);

export const fetchPossibleFilm = createAsyncThunk("possibleFilms", async () => {
  const data = fetch(
    `${_mainUrl}/films?order=RATING&type=ALL&ratingFrom=8&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "a07595fb-3216-4757-8370-6b97eaaf595e",
        "Content-Type": "application/json",
      },
    }
  );
  return (await data).json();
});

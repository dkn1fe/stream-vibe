import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchFilms = createAsyncThunk(
  "searchFilms",
  async (text: string) => {
    const data = fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${text}&page=1`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "709dce91-58d6-4f9c-9a10-60b3da427909",
          "Content-Type": "application/json",
        },
      }
    );
    return (await data).json();
  }
);

export const fetchPossibleFilm = createAsyncThunk("possibleFilms", async () => {
  const data = fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=8&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "709dce91-58d6-4f9c-9a10-60b3da427909",
        "Content-Type": "application/json",
      },
    }
  );
  return (await data).json();
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomNumber } from "../utils/utils";
import { _mainUrl } from "./api";

export const onGetMoviesList = createAsyncThunk(
  "movies/onGetMoviesList",
  async () => {
    const randomNumberArray = getRandomNumber();

    const requests = randomNumberArray.map((item) =>
      fetch(`${_mainUrl}/films/${item}`, {
        method: "GET",
        headers: {
          "X-API-KEY": "709dce91-58d6-4f9c-9a10-60b3da427909",
          "Content-Type": "application/json",
        },
      })
    );

    const responses = await Promise.all(requests);
    const movies = await Promise.all(responses.map((item) => item.json()));
    return movies;
  }
);

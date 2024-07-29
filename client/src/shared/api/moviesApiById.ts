import { createAsyncThunk } from "@reduxjs/toolkit";
import { _mainUrl } from "./api";

export const onGetMoviesAndShowById = createAsyncThunk(
  "fetch/onGetMoviesById",
  async (id: string | undefined) => {
    const data = fetch(`${_mainUrl}/films/${id}`, {
      method: "GET",
      headers: {
        "X-API-KEY": "a07595fb-3216-4757-8370-6b97eaaf595e",
        "Content-Type": "application/json",
      },
    });
    return (await data).json();
  }
);

export const onGetStaffById = createAsyncThunk(
  "fetch/onGetStaffById",
  async (id: string | undefined) => {
    const data = fetch(
      `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`,
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

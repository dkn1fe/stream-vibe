import { createAsyncThunk } from "@reduxjs/toolkit";
import { _mainUrl } from "./api";

export const onGetMoviesById = createAsyncThunk(
  "fetch/onGetMoviesById",
  async (id: string | undefined) => {
    const data = fetch(`${_mainUrl}/films/${id}`, {
      method: "GET",
      headers: {
        "X-API-KEY": "828e27e0-7181-4ca9-a019-cb15dd15d2ca",
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
          "X-API-KEY": "828e27e0-7181-4ca9-a019-cb15dd15d2ca",
          "Content-Type": "application/json",
        },
      }
    );
    return (await data).json();
  }
);

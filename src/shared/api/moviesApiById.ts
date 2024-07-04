import { createAsyncThunk } from "@reduxjs/toolkit";
import { _mainUrl } from "./api";

export const onGetMoviesAndShowById = createAsyncThunk(
  "fetch/onGetMoviesById",
  async (id: string | undefined) => {
    const data = fetch(`${_mainUrl}/films/${id}`, {
      method: "GET",
      headers: {
        "X-API-KEY": "709dce91-58d6-4f9c-9a10-60b3da427909",
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
          "X-API-KEY": "709dce91-58d6-4f9c-9a10-60b3da427909",
          "Content-Type": "application/json",
        },
      }
    );
    return (await data).json();
  }
);

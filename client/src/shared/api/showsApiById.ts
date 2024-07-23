import { createAsyncThunk } from "@reduxjs/toolkit";
import { _mainUrl } from "./api";

export const onGetShowEpisodeById = createAsyncThunk(
  "fetch/onGetShowById",
  async (id: string | undefined) => {
    const response = await fetch(`${_mainUrl}/films/${id}/seasons`, {
      method: "GET",
      headers: {
        "X-API-KEY": "828e27e0-7181-4ca9-a019-cb15dd15d2ca",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
);

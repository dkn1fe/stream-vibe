import { createAsyncThunk } from "@reduxjs/toolkit";
import { _mainUrl } from "./api";

export const onGetShowEpisodeById = createAsyncThunk(
  "fetch/onGetShowById",
  async (id: string | undefined) => {
    const response = await fetch(`${_mainUrl}/films/${id}/seasons`, {
      method: "GET",
      headers: {
        "X-API-KEY": "a07595fb-3216-4757-8370-6b97eaaf595e",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
);

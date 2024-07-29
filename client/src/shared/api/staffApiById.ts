import { createAsyncThunk } from "@reduxjs/toolkit";
import { _mainUrl } from "./api";

export const onGetStaffById = createAsyncThunk(
    'staff/onGetStaffById',
    async (id: number) => {
        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff/${id}`, {
            method: "GET",
            headers: {
                "X-API-KEY": "6fb7ab11-5a6e-4096-894c-6ac1a00ec0b9",
                "Content-Type": "application/json",
            },
        })
        return await response.json()
    }
)

export const onGetMoviesStaff = createAsyncThunk(
    'staff/onGetMoviesStaff',
    async (moviesIdList: number[]) => {
        const request = moviesIdList.map((item) => fetch(`${_mainUrl}/films/${item}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': '45bbc453-f198-47ff-a7a7-c3c1bd307027',
                'Content-Type': 'application/json'
            }
        }))
        const responses = await Promise.all(request)
        const movies = await Promise.all(responses.map((item) => item.json()))
        return movies
    }
)
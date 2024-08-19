import { createAsyncThunk } from "@reduxjs/toolkit";
import { _mainUrl } from "./api";

export const genresApi = createAsyncThunk(
    'fetchGenresApi',
    async () => {
        const pages = [1, 2, 3, 4, 5];
        const requests = pages.map(item =>
            fetch(`${_mainUrl}/films?genres=3&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${item}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': '92ad054a-39e2-4ffb-a4e5-6576b6ada450',
                    'Content-Type': 'application/json',
                },
            })
        );

        const responses = await Promise.all(requests);
        const movies = await Promise.all(responses.map(response => response.json()));
        return movies;
    }
);

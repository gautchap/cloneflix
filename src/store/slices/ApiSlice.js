import { createSlice } from "@reduxjs/toolkit";

const ApiSlice = createSlice({
    name: "API",
    initialState: {
        url: "https://api.themoviedb.org/3/",
        key: `?api_key=${process.env.REACT_APP_API_KEY}&language=fr`,
        moviesTopRated: [],
        seriesTopRated: [],
        moviesGenres: [],
        seriesGenres: [],
        moviesPerGenres: [],
        seriesPerGenres: [],
        moviesUpcoming: [],
        search: [],
    },
    reducers: {
        setMoviesTopRated: (state, action) => {
            state.moviesTopRated = action.payload.rated;
        },
        setSeriesTopRated: (state, action) => {
            state.seriesTopRated = action.payload.rated;
        },
        setMoviesGenres: (state, action) => {
            state.moviesGenres = action.payload.genre;
        },
        setSeriesGenres: (state, action) => {
            state.seriesGenres = action.payload.genre;
        },
        setMoviesPerGenres: (state, action) => {
            state.moviesPerGenres = [
                ...state.moviesPerGenres,
                { name: action.payload.movies.name, id: action.payload.movies.id, arr: action.payload.movies.arr },
            ];
        },
        setSeriesPerGenres: (state, action) => {
            state.seriesPerGenres = [
                ...state.seriesPerGenres,
                { name: action.payload.series.name, id: action.payload.series.id, arr: action.payload.series.arr },
            ];
        },
        setMoviesUpcoming: (state, action) => {
            state.moviesUpcoming = action.payload.upcoming;
        },
        setSearchBar: (state, action) => {
            action.payload.results.map((object) => Object.assign(object, { type: action.payload.type }));
            state.search = [...state.search, ...action.payload.results];
        },
        emptySearchBar: (state) => {
            state.search = [];
        },
    },
});

export const {
    setMoviesTopRated,
    setSeriesTopRated,
    setMoviesGenres,
    setSeriesGenres,
    setMoviesPerGenres,
    setSeriesPerGenres,
    setMoviesUpcoming,
    setSearchBar,
    emptySearchBar,
} = ApiSlice.actions;
export default ApiSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';


export const fetchTournaments = createAsyncThunk(
    'tournaments/fetchTournaments',
    async () => {
        const response = await fetch(baseUrl + 'tournaments');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    tournamentsArray: [],
    isLoading: true,
    errMsg: ''
};

const tournamentsSlice = createSlice({
    name: 'tournaments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTournaments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTournaments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.tournamentsArray = action.payload;
            })
            .addCase(fetchTournaments.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch failed';
            });
    }
});

export const tournamentsReducer = tournamentsSlice.reducer;

export const selectAllTournaments = (state) => {
    return state.tournaments.tournamentsArray;
};

export const selectCurrentTournaments = (state) => {
    const today = new Date().toISOString().split('T')[0];
    return state.tournaments.tournamentsArray.filter(tournament => tournament.date_utc.startsWith(today));
};

export const selectPastTournaments = (state) => {
    //return filter of past tournaments
    const today = new Date().toISOString();
    return state.tournaments.tournamentsArray.filter(tournament => tournament.date_utc < today);
};

export const selectUpcomingTournaments = (state) => {
    //return filter of past tournaments
    const today = new Date().toISOString();
    return state.tournaments.tournamentsArray.filter(tournament => tournament.date_utc > today);
};

export const selectTournamentById = (id) => (state) => {
    return state.tournaments.tournamentsArray.find(
        (tournament) => tournament.id === parseInt(id)
    );
};

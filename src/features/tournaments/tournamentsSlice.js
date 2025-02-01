import { createSlice } from '@reduxjs/toolkit';
import { TOURNAMENTS } from '../../app/shared/TOURNAMENTS';


const initialState = {
    tournamentsArray: TOURNAMENTS
};

const tournamentsSlice = createSlice({
    name: 'tournaments',
    initialState
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

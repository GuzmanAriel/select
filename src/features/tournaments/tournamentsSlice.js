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

export const selectTournamentById = (id) => (state) => {
    return state.tournaments.tournamentsArray.find(
        (tournament) => tournament.id === parseInt(id)
    );
};

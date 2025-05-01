import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchAllTournamentData = createAsyncThunk(
    'tournaments/fetchAllTournamentData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error(`Unable to fetch, status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    tournaments: [],
    teams: [],
    pools: [],
    brackets: [],
    isLoading: true,
    errMsg: ''
};

const tournamentsSlice = createSlice({
    name: 'tournaments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTournamentData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllTournamentData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.tournaments = action.payload.tournaments;
                state.teams = action.payload.teams;
                state.pools = action.payload.pools;
                state.brackets = action.payload.brackets;
            })
            .addCase(fetchAllTournamentData.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.payload || 'Fetch failed';
            });
    }
});

export const tournamentsReducer = tournamentsSlice.reducer;

// Selectors
export const selectAllTournaments = (state) => state.tournaments.tournaments;

export const selectTournamentById = (id) => (state) =>
    state.tournaments.tournaments.find(t => t.id === parseInt(id));

export const selectTeamsByTournamentId = (id) => (state) =>
    state.tournaments.teams.filter(t => t.tournamentId === parseInt(id));

export const selectPoolsByTournamentId = (id) => (state) =>
    state.tournaments.pools.filter(p => p.tournamentId === parseInt(id));

export const selectBracketsByTournamentId = (id) => (state) =>
    state.tournaments.brackets.filter(b => b.tournamentId === parseInt(id));

export const selectUpcomingTournaments = (state) => {
    const today = new Date().toISOString();
    return state.tournaments.tournaments.filter(t => t.date_utc > today);
};

export const selectPastTournaments = (state) => {
    const today = new Date().toISOString();
    return state.tournaments.tournaments.filter(t => t.date_utc < today);
};

export const selectCurrentTournaments = (state) => {
    const today = new Date().toISOString().split('T')[0];
    return state.tournaments.tournaments.filter(t => t.date_utc.startsWith(today));
};

export const selectFeaturedTournaments = (state) =>
    state.tournaments.tournaments.filter(t => t.is_featured);

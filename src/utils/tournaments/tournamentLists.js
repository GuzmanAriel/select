import { TOURNAMENTS } from '../../app/shared/TOURNAMENTS';


export const selectAllTournaments = () => {
    return TOURNAMENTS;
};

export const selectUpcomingTournaments = () => {
    return TOURNAMENTS.find(()=>{});
};

export const selectPastTournaments = () => {
    return TOURNAMENTS;
};
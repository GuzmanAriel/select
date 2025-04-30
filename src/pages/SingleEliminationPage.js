import React from 'react';
import { useParams } from 'react-router-dom';
import { SingleEliminationBracket, Match } from '@g-loot/react-tournament-brackets';

  
const SingleEliminationPage = () => {
  const { id } = useParams();

  // placeholder/fake bracket
  const fakeMatches = {
    participants: [
      { id: 'p1', name: 'Team 1' },
      { id: 'p2', name: 'Team 2' },
      { id: 'p3', name: 'Team 3' },
      { id: 'p4', name: 'Team 4' },
      { id: 'p5', name: 'Team 5' },
      { id: 'p6', name: 'Team 6' },
      { id: 'p7', name: 'Team 7' },
      { id: 'p8', name: 'Team 8' }
    ],
    matches: [
      // Round 1
      {
        id: 1,
        nextMatchId: 5,
        tournamentRoundText: 'Round 1',
        startTime: '2025-04-30T10:00:00Z',
        state: 'SCHEDULED',
        participants: [
          { id: 'p1', resultText: null, isWinner: false },
          { id: 'p2', resultText: null, isWinner: false }
        ]
      },
      {
        id: 2,
        nextMatchId: 5,
        tournamentRoundText: 'Round 1',
        startTime: '2025-04-30T10:00:00Z',
        state: 'SCHEDULED',
        participants: [
          { id: 'p3', resultText: null, isWinner: false },
          { id: 'p4', resultText: null, isWinner: false }
        ]
      },
      {
        id: 3,
        nextMatchId: 6,
        tournamentRoundText: 'Round 1',
        startTime: '2025-04-30T10:00:00Z',
        state: 'SCHEDULED',
        participants: [
          { id: 'p5', resultText: null, isWinner: false },
          { id: 'p6', resultText: null, isWinner: false }
        ]
      },
      {
        id: 4,
        nextMatchId: 6,
        tournamentRoundText: 'Round 1',
        startTime: '2025-04-30T10:00:00Z',
        state: 'SCHEDULED',
        participants: [
          { id: 'p7', resultText: null, isWinner: false },
          { id: 'p8', resultText: null, isWinner: false }
        ]
      },
  
      // Semifinals
      {
        id: 5,
        nextMatchId: 7,
        tournamentRoundText: 'Semifinals',
        startTime: '2025-04-30T12:00:00Z',
        state: 'SCHEDULED',
        participants: []
      },
      {
        id: 6,
        nextMatchId: 7,
        tournamentRoundText: 'Semifinals',
        startTime: '2025-04-30T12:00:00Z',
        state: 'SCHEDULED',
        participants: []
      },
  
      // Finals
      {
        id: 7,
        nextMatchId: null,
        tournamentRoundText: 'Finals',
        startTime: '2025-04-30T14:00:00Z',
        state: 'SCHEDULED',
        participants: []
      }
    ]
  };

  return (
    <div className="container mt-4">
      <h2>Single Elimination Bracket - Tournament {id}</h2>
      <SingleEliminationBracket matches={fakeMatches.matches} matchComponent={Match} />
    </div>
  );
};

export default SingleEliminationPage;

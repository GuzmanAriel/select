import {useState} from 'react';
import Login from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';
import {Route, Routes, Navigate} from "react-router-dom";
import Header from './components/Header';


const TOURNAMENT_LIST = [
  {
    id: 0,
    name: "Jason's Birthday Tournament",
    date: "5/17/2025",
    start_time: "9:00am",
    location: "Zilker Park",
    tournament_type: "BYO4",
    playoff_elimination_type: "Single",
    playoff_bracket_number: 2,
    prizes: {
      first_place: "$1000 and gift card",
      second_place: "$500 and gift card",
      third_place: "$100"
    },
    additional_notes: "We will be in the far side of Zilker park, parking is available in the lot across the park or accross the street"
  },
  {
    id: 1,
    name: "First Tournament",
    date: "4/20/2025",
    start_time: "9:00am",
    location: "Zilker Park - first",
    tournament_type: "BYO3",
    playoff_elimination_type: "Single",
    playoff_bracket_number: 1,
    prizes: {
      first_place: "$1000 and gift card",
      second_place: "$500 and gift card",
      third_place: "$100"
    },
    additional_notes: "We will be in the far side of Zilker park, parking is available in the lot across the park or accross the street"
  },
  {
    id: 2,
    name: "End of Year Tournament",
    date: "11/18/2024",
    start_time: "9:00am",
    location: "Zilker Park",
    tournament_type: "BYO4",
    playoff_elimination_type: "Single",
    playoff_bracket_number: 1,
    prizes: {
      first_place: "$1000 and gift card",
      second_place: "$500 and gift card",
      third_place: "$100"
    },
    additional_notes: "We will be in the far side of Zilker park, parking is available in the lot across the park or accross the street"
  }
]


function App() {
  const [tournamentList, setTournamentList] = useState(TOURNAMENT_LIST);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Header/>
      <Routes>
        {/* Redirect to /dashboard if logged in */}
        <Route
          path="/login"
          element={
              <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        {/* Protect the dashboard route */}
        <Route
          path="/dashboard"
          element={
              <Dashboard tournamentList={tournamentList} />
          }
        />

        {/* Default route */}
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
        />
      </Routes>
      
    </div>
  );
}

export default App;

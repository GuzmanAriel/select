import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, Link, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchTournaments } from './features/tournaments/tournamentsSlice';
import Login from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';
import Header from './components/Header';
import Signup from './pages/SignUpPage';
import { selectAllTournaments } from './utils/tournaments/tournamentLists';
import TournamentDetailsPage from './pages/TournamentDetailsPage';
import CreateTournamentButton from './components/createTournaments/CreateTournamentButton';
import CreateATournament from './pages/CreateTournamentPage';
import SelectTournaments from './pages/SelectTournamentsPage'; // Import your new home page

function App() {
  const tournamentList = selectAllTournaments();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current route

  useEffect(() => {
    dispatch(fetchTournaments());
  }, [dispatch]);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  return (
    <div>
      <header className="border-secondary border-bottom">
        <Header isLoggedIn={isLoggedIn} />
      </header>

      {/* ✅ Hide the button when the route is `/create-tournament` */}
      {location.pathname !== "/create-tournament" && (
        <div className="ts-alignment ts-create-tournament">
          <Link to={`/create-tournament`}>
            <CreateTournamentButton />
          </Link>
        </div>
      )}

      <Routes>
        {/* Default Route (Home Page) */}
        <Route path="/" element={<SelectTournaments />} />

        {/* Redirect to dashboard if logged in */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard tournamentList={tournamentList} />
            </ProtectedRoute>
          }
        />

        {/* Sign-up page */}
        <Route path="/sign-up" element={<Signup />} />

        {/* Tournament Details */}
        <Route path="/tournament/:tournamentId" element={<TournamentDetailsPage />} />

        {/* Create Tournament Page */}
        <Route path="/create-tournament" element={<CreateATournament />} />
      </Routes>
    </div>
  );
}

export default App;

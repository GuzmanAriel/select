import { useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Login from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';
import Header from './components/Header';
import Signup from './pages/SignUpPage';
import { selectAllTournaments } from './utils/tournaments/tournamentLists';
import TournamentDetailsPage from './pages/TournamentDetailsPage';

function App() {
  const tournamentList = selectAllTournaments();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  return (
    <div>
      <header className="border-secondary border-bottom">
        <Header isLoggedIn={isLoggedIn} />
      </header>

      <Routes>
        {/* Redirect to /dashboard if logged in */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Protect the Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard tournamentList={tournamentList} />
            </ProtectedRoute>
          }
        />

        {/* Default route */}
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
        />

        <Route path="/sign-up" element={<Signup />} />

        <Route path="tournament/:tournamentId" element={<TournamentDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

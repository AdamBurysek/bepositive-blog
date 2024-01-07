import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import PageNavbar from "./components/navbar";
import Login from "./components/login";
import HomePage from "./components/homePage";
import LocationPage from "./components/locationPage";

interface User {
  username: string;
  userId: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  function handleLogin(loginValues: User) {
    setUser(loginValues);
  }

  function handleLogout() {
    setUser(null);
  }

  function visitLocation(locationId: number) {
    navigate(`/info?locationId=${locationId}`);
  }

  return (
    <>
      <PageNavbar user={user?.username} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<HomePage handleReadAboutButtonClick={visitLocation} />}
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/info" element={<LocationPage user={user} />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import PageNavbar from "./components/navbar";
import Login from "./components/login";
import HomePage from "./components/homePage";
import LocationPage from "./components/locationPage";
import NotFound from "./components/notFound";
import Footer from "./components/footer";

interface User {
  username: string;
  userId: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  function onLogin(loginValues: User) {
    setUser(loginValues);
  }

  function onLogout() {
    setUser(null);
  }

  function handleReadAboutButtonClick(locationId: number) {
    navigate(`/info?locationId=${locationId}`);
  }

  return (
    <div className="content">
      <PageNavbar user={user?.username} onLogout={onLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage handleReadAboutButtonClick={handleReadAboutButtonClick} />
          }
        />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/info" element={<LocationPage user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

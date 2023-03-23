import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Registration, Error, PrivateRoute } from "./pages";
import { Home, Local, Global, Profile } from "./pages/dashboardPages";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="local" element={<Local />} />
          <Route path="global" element={<Global />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="login" element={<Registration />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

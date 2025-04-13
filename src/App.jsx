import { useEffect } from "react";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginequest } from "./config/authConfig";
import RoleBasedComponent from "./components/RoleBasedComponent";
import { useNavigate, Routes, Route } from "react-router-dom";
import View from "./components/View";
import "./App.css";

function App() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      instance.loginPopup(loginequest).catch((e) => {
        console.error("Login error:", e);
      });

//      instance.loginRedirect(loginequest);
    } else {
      navigate("/view"); // 👈 navigate to /view after login
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route path="/" element={<div>Logging in...</div>} />
      <Route path="/view" element={<View />} />
    </Routes>
  );
}

export default App;

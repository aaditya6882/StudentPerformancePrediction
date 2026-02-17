import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import LoginPage from "./pages/Login/Loginpage.js";
import DashboardPage from "./pages/Dashboard/Dashboardpage.js";
import PredictionPage from "./pages/Prediction/PredictionPage.js";
import ResultPage from "./pages/Result/ResultPage.js";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/predict" element={<PredictionPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;

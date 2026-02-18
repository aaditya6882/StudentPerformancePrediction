import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboardpage from "./pages/Dashboard/Dashboardpage";
import PredictionPage from "./pages/Prediction/PredictionPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboardpage />} />
        <Route path="/prediction" element={<PredictionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

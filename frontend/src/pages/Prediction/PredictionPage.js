import React, { useState } from "react";
import { getPrediction } from "../../services/predictionService";

function PredictionPage() {
  const [studyHours, setStudyHours] = useState("");
  const [attendance, setAttendance] = useState("");
  const [previousScore, setPreviousScore] = useState("");
  const [result, setResult] = useState("");

  const handlePredict = async () => {
    try {
      const data = {
        studyHours,
        attendance,
        previousScore,
      };

      const res = await getPrediction(data);
      setResult(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Prediction Page</h2>

      <div>
        <label>Study Hours:</label>
        <input
          type="number"
          value={studyHours}
          onChange={(e) => setStudyHours(e.target.value)}
        />
      </div>

      <div>
        <label>Attendance:</label>
        <input
          type="number"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        />
      </div>

      <div>
        <label>Previous Score:</label>
        <input
          type="number"
          value={previousScore}
          onChange={(e) => setPreviousScore(e.target.value)}
        />
      </div>

      <button onClick={handlePredict}>Predict</button>

      {result && <h3>Prediction Result: {result}</h3>}
    </div>
  );
}

export default PredictionPage;

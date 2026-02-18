import React, { useEffect, useState } from "react";
import { getStudents } from "../../services/studentService";

function Dashboardpage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents()
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      {students.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.score}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboardpage;

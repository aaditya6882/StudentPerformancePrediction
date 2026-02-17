import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#282c34" }}>
      <Link style={linkStyle} to="/">
        Login
      </Link>
      <Link style={linkStyle} to="/dashboard">
        Dashboard
      </Link>
      <Link style={linkStyle} to="/predict">
        Prediction
      </Link>
      <Link style={linkStyle} to="/result">
        Result
      </Link>
    </nav>
  );
}

const linkStyle = {
  marginRight: "20px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Navbar;

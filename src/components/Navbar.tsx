import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f8f8f8', borderBottom: '1px solid #eee' }}>
      <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#333' }}>Home</Link>
      <Link to="/scheduler" style={{ textDecoration: 'none', color: '#333' }}>Scheduler</Link>
    </nav>
  )
}

export default Navbar
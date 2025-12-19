import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div style={{ textAlign: "none", float: "left"}}>
        <nav style={{ backgroundColor: "grey", borderRadius: "5px", height: "60%", width: "100%", padding: "10px"}}>
          <ul style={{ listStyleType: "none", margin: 0, padding: 0, overflow: "hidden"}}>
            <li style={{ float: "left", padding: "10px", fontSize: "2rem"}}>
              <Link style={{color: "black", textDecoration: "none", backgroundColor: "lightgray", borderRadius: "5px", padding: "10px"}} to="/">Home</Link>
            </li>
            <li style={{ float: "left", padding: "10px", fontSize: "2rem"}}>
              <Link style={{color: "black", textDecoration: "none", backgroundColor: "lightgray", borderRadius: "5px", padding: "10px"}} to="/First">page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
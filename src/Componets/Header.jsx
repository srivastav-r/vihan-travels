import React from "react";

export const Header = ({ setActiveTab }) => {
  return (
    <div
      className="header"
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#0078D7",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo or Title */}
      <div style={{ fontWeight: "bold", fontSize: "1.5em" }}>VIHANA TRAVELS</div>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>
        <button
          onClick={() => setActiveTab("services")}
        >
          Services
        </button>
        <button
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
};


export default Header;

import React from "react";

export const Service = ({ title, description }) => {
  return (
    <div
      className="service-container"
      style={{
        padding: "16px",
        maxWidth: "345px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)")}
    >
      <div className="service-content">
        <h3 style={{ margin: "0 0 8px 0", fontSize: "1.25rem" }}>{title}</h3>
        <p style={{ margin: "0", color: "#666", fontSize: "0.9rem" }}>{description}</p>
      </div>
    </div>
  );
};

export default Service;

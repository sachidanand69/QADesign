import React from "react";

const ReviewComponent = ({ ratings }) => {
  const maxRating = Math.max(...ratings);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "60%",
        margin: "0 auto",
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "18px", marginBottom: "16px" }}>
        Customer Reviews
      </h2>
      {ratings.map((count, index) => {
        const rating = 5 - index;
        const barWidth = (count / maxRating) * 100;

        return (
          <div key={rating} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <span style={{ width: "32px", fontWeight: "bold" }}>{rating}★</span>
            <div
              style={{
                flex: 1,
                backgroundColor: "#e0e0e0",
                height: "6px",
                borderRadius: "4px",
                overflow: "hidden",
                marginLeft: "8px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${barWidth}%`,
                  backgroundColor: "yellow",
                }}
              ></div>
            </div>
            <span style={{ marginLeft: "8px", fontSize: "12px", color: "#666" }}>{count}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewComponent;

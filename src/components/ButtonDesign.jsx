import React, { useState } from "react";
import "../css/buttondesign.css";

const ButtonDesign = () => {
  // Track which buttons have been clicked
  const [selected, setSelected] = useState([]);

  // Handle button click
  const handleClick = (label) => {
    let updated = [...selected];

    // Add button to selected list if not already present
    if (!updated.includes(label)) {
      updated.push(label);
    }

    // Allow max 2 selections only
    if (updated.length > 2) {
      updated = [updated[1], updated[2]]; // keep the last two
    }

    setSelected(updated);
  };

  // Disable logic based on which two buttons are clicked
  const isDisabled = (label) => {
    if (selected.includes("Good") && selected.includes("Fast")) {
      return label === "Cheap";
    }
    if (selected.includes("Good") && selected.includes("Cheap")) {
      return label === "Fast";
    }
    if (selected.includes("Fast") && selected.includes("Cheap")) {
      return label === "Good";
    }
    return false;
  };

  return (
    <div className="container">
      <h2>Component Design</h2>
      <div className="button-group">
        <button
          className="custom-btn"
          onClick={() => handleClick("Good")}
          disabled={isDisabled("Good")}
        >
          Good
        </button>
        <button
          className="custom-btn"
          onClick={() => handleClick("Fast")}
          disabled={isDisabled("Fast")}
        >
          Fast
        </button>
        <button
          className="custom-btn"
          onClick={() => handleClick("Cheap")}
          disabled={isDisabled("Cheap")}
        >
          Cheap
        </button>
      </div>

      {/* Show what the user selected */}      <p className="status">
        {selected.length > 0
          ? `You selected: ${selected.join(" + ")}`
          : "Select two options"}
      </p>
    </div>
  );
};

export default ButtonDesign;

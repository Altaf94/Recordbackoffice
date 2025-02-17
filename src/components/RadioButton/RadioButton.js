import React from "react";

const RadioButton = ({ label, value, selectedValue, onChange }) => {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
        width: "45%",
      }}
    >
      <input
        type="radio"
        value={value}
        checked={selectedValue === value}
        onChange={onChange}
        style={{
          transform: "scale(1.2)", // Increases button size
          marginRight: "10px", // Ensures spacing
          verticalAlign: "middle",
        }}
      />
      <span style={{ flex: 1 }}>{label}</span>
    </label>
  );
};

export default RadioButton;

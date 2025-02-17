import React from "react";

const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`); // Sample data

const ScrollableDataPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Data List</h2>
      <div style={styles.scrollBox}>
        {data.map((item, index) => (
          <div key={index} style={styles.itemBox}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  heading: {
    marginBottom: "10px",
  },
  scrollBox: {
    width: "300px",
    height: "400px",
    overflowY: "auto",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  itemBox: {
    padding: "10px",
    marginBottom: "8px",
    backgroundColor: "#f8f9fa",
    borderRadius: "4px",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default ScrollableDataPage;

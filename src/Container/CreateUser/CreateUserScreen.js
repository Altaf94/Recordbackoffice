import React, { useState } from "react";
import "./createUser.css";
import { connect } from "react-redux";

const CreateUserScreen = () => {
  const [data, setData] = useState(
    Array.from({ length: 50 }, (_, index) => ({
      date: `2025/02/${15 - (index % 28)} ${10 + (index % 10)}:23:00`,
      cnic: `42101061133${index + 10}`,
      firstName: `User${index + 1}`,
      lastName: `Test${index + 1}`,
      dateOfBirth: `19${70 + (index % 30)}/01/01`, // Simulating different birth years
      newMobile: `0322${Math.floor(1000000 + Math.random() * 9000000)}`,
      newEmail: `user${index + 1}@email.com`,
      status:
        index % 3 === 0
          ? "Pending"
          : index % 3 === 1
          ? "Form Sent"
          : "Form Received",
    }))
  );

  const [statusFilter, setStatusFilter] = useState("");
  const [cnicFilter, setCnicFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const pageSize = 10;

  const filteredData = data.filter((item) => {
    return (
      (statusFilter === "" || item.status === statusFilter) &&
      (cnicFilter === "" || item.cnic.includes(cnicFilter)) &&
      (startDate === "" || new Date(item.date) >= new Date(startDate)) &&
      (endDate === "" || new Date(item.date) <= new Date(endDate))
    );
  });

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const currentData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const clearFilters = () => {
    setStatusFilter("");
    setCnicFilter("");
    setStartDate("");
    setEndDate("");
    setCurrentPage(1);
  };

  const updateStatus = (index, newStatus) => {
    const updatedData = [...data];
    updatedData[index].status = newStatus;
    setData(updatedData);
  };

  return (
    <div className="new-email-container">
      <h2 style={{ padding: "10px" }}> Create User (Above 18)</h2>

      {selectedDetail && (
        <div className="detail-overlay">
          <div className="detail-box">
            <h3>Detail Information</h3>
            <p>
              <strong>Date:</strong> {selectedDetail.date}
            </p>
            <p>
              <strong>CNIC:</strong> {selectedDetail.cnic}
            </p>
            <p>
              <strong>Name:</strong> {selectedDetail.firstName}{" "}
              {selectedDetail.lastName}
            </p>
            <p>
              <strong>Date of Birth:</strong> {selectedDetail.dateOfBirth}
            </p>
            <p>
              <strong>New Mobile:</strong> {selectedDetail.newMobile}
            </p>
            <p>
              <strong>New Email:</strong> {selectedDetail.newEmail}
            </p>
            <p>
              <strong>Status:</strong> {selectedDetail.status}
            </p>
            <button
              className="detail-Activebox"
              onClick={() => setSelectedDetail(null)}
            >
              Activate User
            </button>
            <button
              className="detail-Canclebox"
              onClick={() => setSelectedDetail(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="filters">
        <select
          onChange={(e) => setStatusFilter(e.target.value)}
          value={statusFilter}
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Form Sent">Form Sent</option>
          <option value="Form Received">Form Received</option>
        </select>
        <input
          type="text"
          placeholder="Search CNIC"
          value={cnicFilter}
          onChange={(e) => setCnicFilter(e.target.value)}
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button className="clear-filters-button" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date/Time Request Received</th>
              <th>CNIC</th>
              <th>First Name</th>
              <th>Date of Birth</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.cnic}</td>
                <td>{item.firstName}</td>
                <td>{item.dateOfBirth}</td>
                <td>{item.newMobile}</td>
                <td>{item.newEmail}</td>
                <td>
                  <select
                    value={item.status}
                    onChange={(e) => updateStatus(index, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Form Sent">Form Sent</option>
                    <option value="Form Received">Form Received</option>
                  </select>
                </td>
                <td>
                  <button
                    className="details-button"
                    onClick={() => setSelectedDetail(item)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.loggedIn,
});

export default connect(mapStateToProps)(CreateUserScreen);

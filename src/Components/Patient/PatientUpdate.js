import React, { useState } from "react";
import "../Nabvar.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const PatientUpdate = () => {
  const id = useParams();
  // submit form
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    contactDetails: "",
    medicalHistory: "",
    insuranceDetails: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPatient({ ...patient, [e.target.name]: value });
  };
  const HandelSubmit = async (e) => {
    e.preventDefault();

    const base_url = "http://localhost:8102/patient/update/" + id;
    await axios
      .post(base_url, patient)
      .then((res) => alert("Doctor added successfully."))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="doctor">
        <h1>Add Patient</h1>
        <form onSubmit={HandelSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={patient.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="exampleInputPassword1"
              value={patient.lastName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contact Details
            </label>
            <input
              type="text"
              name="contactDetails"
              className="form-control"
              id="exampleInputPassword1"
              value={patient.contactDetails}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Medical History
            </label>
            <input
              type="text"
              name="medicalHistory"
              className="form-control"
              id="exampleInputPassword1"
              value={patient.medicalHistory}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Insurance Details
            </label>
            <input
              type="text"
              name="insuranceDetails"
              className="form-control"
              id="exampleInputPassword1"
              value={patient.insuranceDetails}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PatientUpdate;

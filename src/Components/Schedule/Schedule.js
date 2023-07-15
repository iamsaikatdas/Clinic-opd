import React, { useEffect, useState } from "react";
import "../Nabvar.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Patient = () => {
  // get all patient
  const [allPatient, setAllPatient] = useState();
  const base_url = "http://localhost:8102/patient/getAll";
  useEffect(() => {
    axios.get(base_url).then((res) => setAllPatient(res.data));
  }, []);

  // add patient
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
  const HandelSubmit = (e) => {
    e.preventDefault();

    const base_url = "http://localhost:8102/patient/add";
    axios
      .post(base_url, patient)
      .then((res) => alert("Doctor added successfully."))
      .catch((e) => console.log(e));
  };

  // DELETE patient
  const DeletePatient = async (id) => {
    const delete_base_url = `http://localhost:8102/patient/delete/${id}`;
    axios.delete(delete_base_url).then((res) => {
      console.log(res);
      alert("Doctor deleted successfully", id);
    });
  };

  return (
    <>
      <div className="show-doctor">
        <div className="container">
          <h1>All Patient</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Contact Details</th>
                <th>Medical History</th>
                <th>Insurance Details</th>
                <th>Action</th>
              </tr>
            </thead>
            {allPatient ? (
              <tbody>
                {allPatient?.map((d) => {
                  return (
                    <>
                      <tr key={d.patientId}>
                        <td>{d.patientId}</td>
                        <td>{d.firstName}</td>
                        <td>{d.lastName}</td>
                        <td>{d.contactDetails}</td>
                        <td>{d.medicalHistory}</td>
                        <td>{d.insuranceDetails}</td>
                        <td className="d-flex justify-content-around align-items-center">
                          <p className="ed">
                            <Link to={`/doctor/updateDoctor/${d.patientId}`}>
                              Edit
                            </Link>
                          </p>
                          <p
                            className="ed"
                            onClick={() => DeletePatient(d.patientId)}
                          >
                            Delete
                          </p>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            ) : (
              "Please add doctor"
            )}
          </table>
        </div>
      </div>
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

export default Patient;

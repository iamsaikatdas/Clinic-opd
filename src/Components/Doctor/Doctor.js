import React, { useEffect, useState } from "react";
import "../Nabvar.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Doctor = () => {
  const [allDoctor, setAllDoctor] = useState();

  const base_url = "http://localhost:8100/doctor/getAll";
  useEffect(() => {
    axios.get(base_url).then((res) => setAllDoctor(res.data[0].content));
  }, []);
  // console.log(allDoctor);

  // submit form
  const [doctor, setDoctor] = useState({
    firstName: "",
    lastName: "",
    contactDetails: "",
    specialization: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setDoctor({ ...doctor, [e.target.name]: value });
  };

  const HandelSubmit = (e) => {
    e.preventDefault();

    const base_url = "http://localhost:8100/doctor/add";
    axios
      .post(base_url, doctor)
      .then((res) => alert("Doctor added successfully."))
      .catch((e) => console.log(e));
  };

  // DELETE doctor
  const DeleteDoctor = (id) => {
    const base_url = `http://localhost:8100/delete/${id}`;
    axios.delete(base_url).then((res) => {
      console.log(res);
      alert("Doctor deleted successfully");
    });
  };

  return (
    <>
      <div className="show-doctor">
        <div className="container">
          <h1>All doctors</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Contact Details</th>
                <th>Specialization</th>
                <th>Action</th>
              </tr>
            </thead>
            {allDoctor ? (
              <tbody>
                {allDoctor?.map((d) => {
                  return (
                    <>
                      <tr key={d.doctorId}>
                        <td>{d.doctorId}</td>
                        <td>{d.firstName}</td>
                        <td>{d.lastName}</td>
                        <td>{d.contactDetails}</td>
                        <td>{d.specialization}</td>
                        <td className="d-flex justify-content-around align-items-center">
                          <p className="ed">
                            <Link to={`/doctor/updateDoctor/${d.doctorId}`}>
                              Edit
                            </Link>
                          </p>
                          <p className="ed" onClick={DeleteDoctor(d.doctorId)}>
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
        <h1>Add Doctor</h1>
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
              value={doctor.firstName}
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
              value={doctor.lastName}
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
              value={doctor.contactDetails}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Specialization
            </label>
            <select
              name="specialization"
              class="form-select"
              aria-label="Default select example"
              value={doctor.specialization}
              onChange={(e) => handleChange(e)}
            >
              <option selected>Select One</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Doctor;

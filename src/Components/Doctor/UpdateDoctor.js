import React, { useState } from "react";
import "../Nabvar.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateDoctor = () => {
  const { id } = useParams();
  console.log("udpatedoctor", id);
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

  const HandelSubmit = async (e) => {
    e.preventDefault();

    const base_url = "http://localhost:8100/doctor/update/" + id;
    await axios
      .post(base_url, doctor)
      .then((res) => alert("Doctor updated successfully."))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="doctor">
        <h1>Update Doctor</h1>
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
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Gyanacology">Gyanacology</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateDoctor;

import React, { useEffect, useState } from "react";
import "../Nabvar.css";
import axios from "axios";
import { Link } from "react-router-dom";


const DeleteAppointment = async (id) => {
  const delete_base_url = `http://localhost:7000/appointment/delete/${id}`;
  axios.delete(delete_base_url).then((res) => {
    console.log(res);
    alert("Doctor deleted successfully", id);
  });
}

const Appointment = () => {

  // get all doctor
  const [allDoctor, setAllDoctor] = useState();
  const base_url_doctor = "http://localhost:8100/doctor/getAll";
  useEffect(() => {
    axios.get(base_url_doctor).then((res) => setAllDoctor(res.data));
  }, []);


  // get all patient
  const [allPatient, setAllPatient] = useState();
  const base_url_patient = "http://localhost:8102/patient/getAll";
  useEffect(() => {
    axios.get(base_url_patient).then((res) => setAllPatient(res.data));
  }, []);

  // get all patient
  const [allAppointment, setAllAppointment] = useState();
  const base_url = "http://localhost:7000/appointment/getAll";
  useEffect(() => {
    axios.get(base_url).then((res) => setAllAppointment(res.data));
  }, []);



  // add patient
  const [appointment, setAppointment] = useState({
    status: "",
    patientId: "",
    doctorId: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setAppointment({ ...appointment, [e.target.name]: value });
  };
  const HandelSubmit = (e) => {
    e.preventDefault();

    const base_url = "http://localhost:7000/appointment/add";
    axios
      .post(base_url, appointment)
      .then((res) => alert("Doctor added successfully."))
      .catch((e) => console.log(e));
  };

  // DELETE patient
  function deleteAppointment(id) {
    DeleteAppointment(id);
  };

  return (
    <>
      <div className="show-doctor">
        <div className="container">
          <h1>All Appointment</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Status</th>
                <th>Doctor Id</th>
                <th>Patient Id</th>
              </tr>
            </thead>
            {allAppointment ? (
              <tbody>
                {allAppointment?.map((d) => {
                  return (
                    <>
                      <tr key={d.appointmentId}>
                        <td>{d.appointmentId}</td>
                        <td>{d.appointmentDate}</td>
                        <td>{d.appointmentTime}</td>
                        <td>{d.status}</td>
                        <td>{d.patientId}</td>
                        <td>{d.doctorId}</td>
                        <td className="d-flex justify-content-around align-items-center">
                          <p className="ed">
                            <Link to={`/doctor/updateDoctor/${d.appointmentId}`}>
                              Edit
                            </Link>
                          </p>
                          <p className="ed" onClick={deleteAppointment(d.appointmentId)}>
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
        <h1>Add Appointment</h1>
        <form onSubmit={HandelSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Status
            </label>
            <input
              type="text"
              name="status"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={appointment.status}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Patient Name
            </label>
            <select type="text" name="selectPatient" className="form-select" aria-label="Default select example" value={appointment.patientId} onChange={(e) => handleChange(e)}>
              <option defaulatValue>Select One</option>
              {allPatient ?

                allPatient.map((p) => {
                  return (
                    <>
                      <option value={p.patientId}>{p.firstName} {p.lastName}</option>
                    </>
                  )
                })

                : <option  value="Patient not found">Patient not found</option>}

            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Doctor Name
            </label>
            <select type="text" name="selectDoctor" className="form-select" aria-label="Default select example" value={appointment.doctorId} onChange={(e) => handleChange(e)}>
              <option defaulatValue>Select One</option>
              {allDoctor ?

                allDoctor.map((p) => {
                  return (
                    <>
                      <option value={p.doctorId}>{p.firstName} {p.lastName}</option>
                    </>
                  )
                })

                : <option value="Doctor not found">Doctor not found</option>}

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

export default Appointment;

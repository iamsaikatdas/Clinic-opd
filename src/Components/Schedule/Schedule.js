import React, { useEffect, useState } from "react";
import "../Nabvar.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Schedule = () => {
  // get all patient
  const [allSchedule, setAllSchedule] = useState();
  const base_url = "http://localhost:8320/schedule/getAll";
  useEffect(() => {
    axios.get(base_url).then((res) => setAllSchedule(res.data));
  }, []);

  // add patient
  const [schedule, setSchedule] = useState({
    dayOfWeek: "",
    timeSlot: "",
    availability: "",
    doctorId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setSchedule({ ...schedule, [e.target.name]: value });
  };
  const HandelSubmit = (e) => {
    e.preventDefault();

    const base_url = "http://localhost:8320/schedule/add";
    axios
      .post(base_url, schedule)
      .then((res) => alert("Schedule added successfully."))
      .catch((e) => console.log(e));
  };

  // DELETE patient
  const DeleteSchedule = async (id) => {
    const delete_base_url = `http://localhost:8320/schedule/delete/${id}`;
    axios.delete(delete_base_url).then((res) => {
      console.log(res);
      alert("Schedule deleted successfully", id);
    });
  };

  return (
    <>
      <div className="show-doctor">
        <div className="container">
          <h1>All Schedule</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Day of Week</th>
                <th>Time Slot</th>
                <th>Availability</th>
                <th>Doctor Id</th>
              </tr>
            </thead>
            {allSchedule ? (
              <tbody>
                {allSchedule?.map((d) => {
                  return (
                    <>
                      <tr key={d.scheduleId}>
                        <td>{d.scheduleId}</td>
                        <td>{d.dayOfWeek}</td>
                        <td>{d.timeSlot}</td>
                        <td>{d.availability}</td>
                        <td>{d.doctorId}</td>
                        <td className="d-flex justify-content-around align-items-center">
                          <p className="ed">
                            <Link
                              to={`/schedule/updateSchedule/${d.scheduleId}`}
                            >
                              Edit
                            </Link>
                          </p>
                          <p
                            className="ed"
                            onClick={() => DeleteSchedule(d.scheduleId)}
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
              "Please add Schedule"
            )}
          </table>
        </div>
      </div>
      <div className="doctor">
        <h1>Add Schedule</h1>
        <form onSubmit={HandelSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Day of Week
            </label>
            <input
              type="text"
              name="dayOfWek"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={schedule.dayOfWeek}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Time Slot
            </label>
            <input
              type="text"
              name="timeSlot"
              className="form-control"
              id="exampleInputPassword1"
              value={schedule.timeSlot}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Availability
            </label>
            <input
              type="text"
              name="availability"
              className="form-control"
              id="exampleInputPassword1"
              value={schedule.availability}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Doctor Id
            </label>
            <input
              type="text"
              name="doctorId"
              className="form-control"
              id="exampleInputPassword1"
              value={schedule.doctorId}
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

export default Schedule;

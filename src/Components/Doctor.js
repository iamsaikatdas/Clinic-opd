import React, { useEffect, useState } from "react";
import "./Nabvar.css";
import axios from "axios";

const Doctor = () => {
  const [allDoctor, setAllDoctor] = useState();

  const base_url = "http://localhost:8080/blog/getAllBlog";
  useEffect(() => {
    axios.get(base_url).then((res) => setAllDoctor(res.data[0].content));
  }, []);

  // console.log(allDoctor);

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
                {allDoctor?.map((d, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{d.title}</td>
                        <td>{d.title}</td>
                        <td>{d.description}</td>
                        <td>{d.keyWord}</td>
                        <td className="d-flex justify-content-around align-items-center">
                          <p className="ed">Edit</p>
                          <p className="ed">Delete</p>
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
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
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

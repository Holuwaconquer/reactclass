import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    course: "",
    phoneNumber: "",
    regNum: "",
  });

  // fetch single student
  useEffect(() => {
    axios
      .get(`http://localhost:3001/Users/${id}`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
    console.log(e);
  }

  function handleUpdate(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/Users/${id}`, student)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="w-3/4 bg-white shadow p-4! mx-auto!">
      <div className="flex flex-col gap-4">
        <h1>Edit Info</h1>

        <form onSubmit={handleUpdate} className="w-full flex flex-col gap-4">
          <div className="w-full grid md:grid-cols-2 gap-4 ">
            <div>
              <label htmlFor="firstname">Fistname</label>
              <input
                name="firstname"
                value={student.firstname}
                onChange={handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
              />
            </div>
            <div>
              <label htmlFor="lastname">Lastname</label>
              <input
                name="lastname"
                value={student.lastname}
                onChange={handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
              />
            </div>
          </div>
          <div className="w-full grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                value={student.email}
                onChange={handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                name="phoneNumber"
                value={student.phoneNumber}
                onChange={handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
              />
            </div>
          </div>
          <div className="w-full grid md:grid-cols-2 gap-4 ">
            <div>
              <label htmlFor="course">Course</label>
              <input
                name="course"
                value={student.course}
                onChange={handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
              />
            </div>
            <div>
              <label htmlFor="regNum">Registration No:</label>
              <input
                name="regNum"
                value={student.regNum}
                onChange={handleChange}
                className="w-full rounded-[6px] bg-gray-50 shadow outline-0 p-4!"
              />
            </div>
          </div>

          <button
            type="submit"
            className="p-4! bg-blue-400 hover:bg-blue-700 active:bg-red-400 transition-all duration-500 rounded-md w-[50%] mx-auto!"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;

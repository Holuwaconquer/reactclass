import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentTable = () => {
  const [student, setstudent] = useState([]);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  function fetchingData() {
    axios
      .get(`http://localhost:3001/Users`)
      .then((res) => {
        console.log(res.data);
        setstudent(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log("there was an error fetching", err);
        setloading(false);
      });
  }
  useEffect(() => {
    fetchingData();
  }, []);
  function deleteStudent(id) {
    axios
      .delete(`http://localhost:3001/Users/${id}`)
      .then(() => {
        setstudent(student.filter((s) => s.id !== id));
      })
      .catch((err) => {
        console.error("failed to delete", err);
      });
  }

  return (
    <div>
      {loading ? (
        <p>loading....</p>
      ) : (
        <table className="stable border-collapse w-150 lg:w-full  ">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Telephone</th>
              <th>Reg Num</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {JSON.stringify(student)} */}

            {student.map((data, index) => (
              <tr key={data?.id || index}>
                <td>{index + 1}</td>
                <td>
                  {data.firstname} {data.lastname}
                </td>
                <td>{data.email}</td>
                <td>{data.course || "Nil"}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.regNum || "nil"} </td>
                <td className="items-center flex justify-evenly">
                  <button
                    className="mx-1! p-2! bg-green-400 hover:bg-green-800  hover:scale-110 transition-all  duration-400"
                    onClick={() => {
                      navigate(`/edit/${data.id}`);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className=" mx-1! p-2! bg-red-400 hover:bg-red-800  hover:scale-110 transition-all  duration-400 text-white"
                    onClick={() => deleteStudent(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentTable;

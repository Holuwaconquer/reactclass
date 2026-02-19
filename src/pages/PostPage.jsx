import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import StudentTable from "./StudentTable";

const PostPage = () => {
  const [postData, setpostData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setisError] = useState(false);
  const navigate = useNavigate();
  const apiUrl = "http://localhost:3001/posts";

  const getAllPost = () => {
    setIsFetching(true);

    axios
      .get(apiUrl)
      .then((response) => {
        // console.log(response.data);
        setpostData(response.data);
        setIsFetching(false);
      })
      .catch((err) => {
        setisError(true);
        console.error("There is an error while fetching the data", err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    getAllPost();
  }, []);
  //   console.log(typeof postData);

  return (
    <div className="w-full flex flex-col gap-4 !px-8">
      {/* for the header and the create button */}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Posts</h1>
        <button
          onClick={() => navigate("/create-post")}
          className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
          type="button"
        >
          <div className="bg-green-400 rounded-xl h-12 w-1/4 flex flex-col items-center justify-center absolute -left-2 top-1 group-hover:w-[184px] z-10 duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 512"
              height="45px"
              width="45px"
            >
              <path
                d="M480 480V224H224v-32h256V0h32v192h192v32H512v256z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <p className="translate-x-3">Create Post</p>
        </button>
      </div>
      {/* for allpost */}
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 ">
        {postData.map((data, index) => (
          <div
            onClick={() =>
              navigate(`/postdetails/${data.id}`, { state: { data } })
            }
            key={data.id}
            className=" px-3! py-2! border! w- h-40 rounded-sm bg-blue-300  shadow-md"
          >
            <div className="leading-loose">
              <h1>userId:{data.userId}</h1>
              <p>Title: {data.title.split(" ").splice(0, 4).join(" ")} </p>
              <p>body: {data.body.split(" ").splice(0, 6).join(" ")} </p>
            </div>{" "}
          </div>
        ))}
      </div>{" "}
      <div className=" my-4! ">
        <span className="text-3xl text-blue-500 "> Students Table </span>{" "}
        <StudentTable />{" "}
      </div>
    </div>
  );
};

export default PostPage;

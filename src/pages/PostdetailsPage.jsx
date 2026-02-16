import axios from "axios";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router";

const PostdetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const [datav, setdatav] = useState(null);
  axios
    .get(apiUrl)
    .then((response) => {
      setdatav(response.data);
    })
    .catch((err) => {
      console.error("There is an error while fetching the data", err);
    })
    .finally(() => {});
    
    const data = location.state?.data || datav;
    console.log(data);

  if (!data) {
    return <p>loading...</p>;
  }

  return (
    <div className="px-9! flex flex-col justify-evenly box-border w-3/4 border h-80 mx-auto! rounded-md bg-red-200 ">
      <h1>userId:{data?.userId}</h1>
      <p>Title: {data?.title.split(" ").splice(0, 10).join(" ")} </p>
      <p>body: {data?.body.split(" ").splice(0, 10).join(" ")} </p>
    </div>
  );
};

export default PostdetailsPage;

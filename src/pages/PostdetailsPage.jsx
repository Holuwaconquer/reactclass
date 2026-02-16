import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const PostdetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const apiUrl = `http://localhost:3001/posts/${id}`;
  const [datav, setdatav] = useState(null);
 const navigate = useNavigate()
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

  if (!data) {
    return <p>loading...</p>;
  }

  return (
    <div className="px-9! flex flex-col justify-evenly box-border w-3/4 border h-80 mx-auto! rounded-md bg-red-200 ">
      <h1>userId:{data?.userId}</h1>
      <p>Title: {data?.title.split(" ").splice(0, 10).join(" ")} </p>
      <p>body: {data?.body.split(" ").splice(0, 10).join(" ")} </p>
      <button onClick={() => navigate(`/edit-post/${data.id}`)}>Edit Post</button>
      <button onClick={() => {
        axios.delete(`http://localhost:3001/posts/${id}`)
        .then((res) => {
          alert('the post has been deleted')
          window.location.href = '/'
        })
      }}>Delete Post</button>
    </div>
  );
};

export default PostdetailsPage;

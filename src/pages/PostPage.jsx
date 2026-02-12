import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const PostPage = () => {
    const [postData, setpostData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setisError] = useState(false);
    const navigate = useNavigate();
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    const getAllPost = () => {
        setIsFetching(true);

        axios.get(apiUrl)
        .then((response) => {
            console.log(response.data);
            setpostData(response.data);
            setIsFetching(false);
        }).catch((err) => {
            setisError(true);
            console.error('There is an error while fetching the data', err);
        }).finally(() => {
            setIsFetching(false);
        })
    }

    useEffect(() => {
      getAllPost();

    }, [])
    
  return (
    <div className='w-full flex flex-col gap-4 !px-8'>
        {/* for the header and the create button */}
        <div className='w-full flex items-center justify-between'>
            <h1 className='text-3xl font-bold'>All Posts</h1>
            <button
            onClick={() => navigate('/create-post')}
            className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
            type="button"
            >
            <div
                className="bg-green-400 rounded-xl h-12 w-1/4 flex flex-col items-center justify-center absolute -left-2 top-[4px] group-hover:w-[184px] z-10 duration-500"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    height="45px"
                    width="45px"
                >
                    <path d="M480 480V224H224v-32h256V0h32v192h192v32H512v256z" fill="currentColor"></path>
                </svg>
            </div>
            <p className="translate-x-2">Create Post</p>
            </button>

        </div>

        {/* for allpost */}
        
    </div>
  )
}

export default PostPage
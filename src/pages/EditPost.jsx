import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const EditPost = () => {

    const { id } = useParams()

  const [title, settitle] = useState('')
  const [body, setbody] = useState('')
  const [userId, setuserId] = useState('')
  const navigate = useNavigate()

  const fetchPost = () => {
    axios.get(`http://localhost:3001/posts/${id}`)
    .then((res) => {
        console.log(res);
        settitle(res.data.title)
        setbody(res.data.body)
        setuserId(res.data.userId)
    })
  }

  useEffect(() => {
    fetchPost()
  }, [])
  
  const editPost = (e) => {
    e.preventDefault()
    console.log("user data: ", {title, body, userId});
    if(title.trim().length <=0 || body.trim().length <=0 || userId.trim().length <=0){
      alert('Make sure all input are field')
    }else{
      axios.patch(`http://localhost:3001/posts/${id}`, {userId} )
      .then((res) => {
        console.log(res);
        if(res.status === 201){
          alert('Your post has been updated successfully')
          settitle('')
          setbody('')
          setuserId('')
          if(prompt('Do you want to create a new post or go to the home page?')) {
            navigate('/')
          }
        }
        if(res.status === 200){
          alert('Your post has been Updated  successfully')
          settitle('')
          setbody('')
          setuserId('')
          if(prompt('Do you want to create a new post or go to the home page?')) {
            navigate('/')
          }
        }
        
      }).catch((error) => {
        console.log('There is an error while making the post request: ', error);
        
      })
    }

    
  }

  return (
    <div className='w-3/4 bg-white shadow p-4! rounded-[10px] mx-auto! flex flex-col items-center'>
      <div className='w-full flex flex-col gap-4 items-start justify-center'>
        <h1 className='text-3xl font-bold text-center w-full'>Create Post</h1>
        <div className='w-full'>
          <form onSubmit={(e) => editPost(e)} action="" className='w-full flex flex-col gap-6'>
            {/* for the title */}
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="title" className='text-2xl'>Title</label>
              <input type="text" value={title} onChange={(inputEvent) => settitle(inputEvent.target.value)}  className='w-full bg-gray-200 border-none shadow-lg rounded-[10px] p-4! outline-0' />
            </div>
            {/* for the body */}
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="title" className='text-2xl'>Body</label>
              <textarea value={body} onChange={(inputEvent) => setbody(inputEvent.target.value)} rows={7} className='w-full bg-gray-200 border-none shadow-lg rounded-[10px] p-4! outline-0 resize-none'></textarea>
            </div>
            {/* for userid */}
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="title" className='text-2xl'>User ID</label>
              <input type="number" value={userId} onChange={(inputEvent) => setuserId(inputEvent.target.value)} className='w-full bg-gray-200 border-none shadow-lg rounded-[10px] p-4! outline-0' />
            </div>
            <button className='py-3! bg-blue-600 text-white rounded-[10px] cursor-pointer hover:bg-blue-800 transition-all'>Edit Post</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditPost
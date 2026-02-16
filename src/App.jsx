// // import { Button } from "./components/Button"
// // import Navbar from "./components/Navbar"

// // const App = () => {
// //   const InTouchName = {
// //     color: "red",
// //     backgroundColor: "blue",
// //     padding: "10px 20px",
// //     borderRadius: "20px",
// //     border: "none",
// //     cursor: "pointer",
// //     transition: "0.3s ease-in-out",
// //   }
  
// //   const nameToShow = 'Conquer';

// //   return (
// //     <div>
// //       <h1 className={` text-3xl text-blue-900 bg-[${InTouchName.backgroundColor}]`}>{ nameToShow } </h1>
// //       <p className={``} style={{color: InTouchName.color}}> This is the color of the text: {InTouchName.color}  </p>
// //       <Navbar />
// //       <Button customBorder={InTouchName.borderRadius} text={nameToShow}/>
// //     </div>
// //   )

// // }

// // export default App


// import React from 'react'
// import Props from './components/StudentCard'
// import { Button } from './components/Button'
// import StudentsPage from './pages/StudentsPage'
// import StaffPage from './pages/StaffPage'

// const App = () => {
//   const users = [
//     {
//       id: 1,
//       avatar: 'https://images.pexels.com/photos/32526354/pexels-photo-32526354.jpeg',
//       name: 'John Doe',
//       age: 28,
//       gender: 'male',
//       email: 'conquer@gmail.com'
//     },
//     {
//       id: 2, 
//       avatar: 'https://images.pexels.com/photos/27523299/pexels-photo-27523299.jpeg',
//       name: 'Jane Smith',
//       age: 32,
//       gender: 'female',
//       email: 'jane@gmail.com'
//     },
//     {
//       id: 3, 
//       avatar: 'https://images.pexels.com/photos/32526354/pexels-photo-32526354.jpeg',
//       name: 'Sarah Johnson',
//       age: 28,
//       gender: 'female',
//       email: 'sarah@gmail.com'
//     },
//     {
//       id: 4, 
//       avatar: 'https://images.pexels.com/photos/27661934/pexels-photo-27661934.jpeg',
//       name: 'Jamie Carragher',
//       age: 28,
//       gender: 'male',
//       email: 'jamie@gmail.com'
//     },
//     {
//       id: 5, 
//       avatar: 'https://images.pexels.com/photos/27992044/pexels-photo-27992044.jpeg',
//       name: 'Elizabeth Brown',
//       age: 28,
//       gender: 'female',
//       email: 'elizabeth@gmail.com'
//     }
//   ]

//   const staffs = [
//     {
//       id: 1,
//       avatar: 'https://images.pexels.com/photos/32526354/pexels-photo-32526354.jpeg',
//       name: 'Mr Emmanuel',
//       age: 28,
//       gender: 'male',
//       email: 'conquer@gmail.com'
//     },
//     {
//       id: 2, 
//       avatar: 'https://images.pexels.com/photos/27523299/pexels-photo-27523299.jpeg',
//       name: 'Mr Ojo',
//       age: 32,
//       gender: 'male',
//       email: 'ojo@gmail.com'
//     },
//     {
//       id: 3, 
//       avatar: 'https://images.pexels.com/photos/32526354/pexels-photo-32526354.jpeg',
//       name: 'Mrs Sarah Johnson',
//       age: 28,
//       gender: 'female',
//       email: 'sarah@gmail.com'
//     },
//     {
//       id: 4, 
//       avatar: 'https://images.pexels.com/photos/27661934/pexels-photo-27661934.jpeg',
//       name: 'Mr Williams',
//       age: 28,
//       gender: 'male',
//       email: 'jamie@gmail.com'
//     },
//     {
//       id: 5, 
//       avatar: 'https://images.pexels.com/photos/27992044/pexels-photo-27992044.jpeg',
//       name: 'Miss Stella',
//       age: 28,
//       gender: 'female',
//       email: 'elizabeth@gmail.com'
//     }
//   ]
//   const nameToShow = 'Conquer';
//   return (
//     <div>
//       <StudentsPage data={users} nameToShow={nameToShow}/>

//       <StaffPage info={staffs} />
//     </div>
//   )
// }

// export default App


// // routing
// // react-router

// import React, { useEffect, useState } from 'react'
// import Home from './pages/Home'
// import { BrowserRouter as Samad, Route, Routes } from 'react-router'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Navbar from './components/Navbar'
// import LandingPage from './pages/LandingPage'
// import AdminPage from './pages/AdminPage'
// import Overview from './pages/Overview'
// import AdminDashboard from './pages/AdminDashboard'
// import ProductPage from './pages/ProductPage'
// import ProductDetails from './pages/ProductDetails'




// const App = () => {
  
//   const [count, setcount] = useState(0)

//   function sayHello(){
//     setcount(count + 1)
//   }

//   useEffect(() => {

//     setInterval(() => {
      
//       sayHello()
//     }, 2000);

//   }, [count])
  
//   return (
//     <>
//     <Samad>
//         <Routes>
//             <Route path='/' element={<LandingPage />}>

//               <Route index element={<Home />} />

//               <Route path='/about' element={<About />}/>
//               <Route path='/contact' element={<Contact />}/>

//               <Route path='/products' element={<ProductPage />} />
//               <Route path='/products/:id' element={<ProductDetails />} />
//             </Route>

//             <Route path='/admin' element={<AdminPage />}>

//               <Route index element={<Overview />} />
//               <Route path='/admin/dashboard'  element={<AdminDashboard />} />
//             </Route>

            

//           <Route path='*' element={<h1>404 Not Found</h1>} />
//         </Routes>
//         <h1>{count}</h1>
//         <button onClick={sayHello}>Count</button>
    
//     </Samad>

//     </>
//   )
// }

// export default App


// USEFFECT
// axios


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [products, setproducts] = useState([])
//   // api method - GET, POST, PUT, PATCH, DELETE

//   const apiUrl = 'https://dummyjson.com/products';
//   axios.get(apiUrl)
//   .then((response) => {
//     // console.log(response.data.products);
//     setproducts(response.data.products)

//   })

//   useEffect(() => {
//     console.log(products);
    
//   }, [products])
  

//   return (
//     <div>App</div>
//   )
// }

// export default App

// post page - list of all posts, 
// single post page, 
// create post page, 
// update post page, 
// delete post page

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import PostPage from './pages/PostPage'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import PostdetailsPage from './pages/PostdetailsPage'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import EditPost from './pages/EditPost'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<PostPage />} />
        <Route path='/postdetails/:id' element={<PostdetailsPage />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/edit-post/:id' element={<EditPost />} />
        <Route path='/update-post' element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
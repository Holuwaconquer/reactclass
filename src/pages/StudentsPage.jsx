// import React, { useState } from 'react'
// import StudentCard from '../components/StudentCard'

// const StudentsPage = ({ data }) => {
//   const tag = 'student'

//   const clickMe = () =>{
//     alert('I am a student')
//   }

//   return (
//     <div className='py-4!'>
//       <h1 className='text-center my-4! text-5xl font-bold'>All Student</h1>
//       <div className='w-full grid md:grid-cols-3 justify-center items-center gap-4'>
//           {data.map(student => (
//             <StudentCard handleClick={clickMe} key={student.id} item={student} tag={tag} />
//           ))}
//       </div>
//     </div>
//   )
// }

// export default StudentsPage
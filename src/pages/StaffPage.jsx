// import React, { useState } from 'react'
// import StudentCard from '../components/StudentCard'

// const StaffPage = ({ info }) => {
//   const tag = 'staff'
//   const clickMe = () =>{
//     alert('I am a staff member')
//   }
//   return (
//     <div className='py-4!'>
//       <h1 className='text-center my-4! text-5xl font-bold'>All Staff</h1>
//       <div className='w-full grid md:grid-cols-3 justify-center items-center gap-4'>
//           {info.map(staff => (
//             <StudentCard handleClick={clickMe} key={staff.id} item={staff} tag={tag} />
//           ))}
//       </div>
//     </div>
//   )
// }

// export default StaffPage
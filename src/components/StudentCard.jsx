// import React from 'react'

// const StudentCard = ({ item, tag, handleClick }) => {
//   // console.log(item);
  
//   return (
//     <div onClick={handleClick} className='py-8! relative rounded-br-[30px] rounded-tl-[30px] drop-shadow-xl bg-white flex flex-col gap-4 items-center justify-center'>
//       {/* avatar */}
//       <div className='w-15 h-15 rounded-full border-2 border-blue-500 bg-gray-300'>
//         <img className='w-full h-full object-cover rounded-full' src={item.avatar} alt={item.name} />
//       </div>
//       {/* for item name */}
//       <h1 className='font-bold text-2xl'> <span className='font-medium'>Name:</span>{item.name}</h1>
//       <h1 className='font-bold text-2xl'> <span className='font-medium'>Email:</span>{item.email}</h1>
//       <h1 className='font-bold text-2xl'> <span className='font-medium'>Age:</span>{item.age}</h1>
//       <h1 className='font-bold text-2xl'> <span className='font-medium'>Gender:</span>{item.gender}</h1>

//       <div className='absolute top-0 right-0 bg-green-500 text-white px-3! py-1! rounded-[20px] text-sm font-bold'>
//         {tag}
//       </div>
//     </div>
//   )
// }

// export default StudentCard

// // subject - subject = ''
// // PARENT - CHILD
// // Props are read only

// // app.jsx -> flash sales component -> product card component
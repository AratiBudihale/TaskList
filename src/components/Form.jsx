import React,{useState} from 'react'

const Form = ({createTodo}) => {

  const[value,setValue]=useState('')

  const handleSubmit= e=>{
    e.preventDefault();
    createTodo(value)
    setValue('')
  }

  return (
   <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
     <input type="text" className="outline-none bg-transparent border border-grey-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300"placeholder='What task do you have' onChange={(e)=>setValue(e.target.value)} value={value}/>
     <button>Add task</button>
   </form>
  )
}

export default Form
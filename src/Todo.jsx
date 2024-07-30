import React from 'react'
import moment from 'moment';
import './App.css';
import { useState } from 'react'



const Todo = () => {


    const [text ,setText] =useState('');
    const [todo,setTodo] =useState([]);
  
    function addtodo(e){
  
      if(text.trim()==''){
        alert("please enter some text to  enetr in todo")
      }
      else{
    
    
      setTodo([...todo,text])
    //  console.log("todo-->",todo)
      setText('')
    
    }
    
     }
    
      
      function editBtn(index){
        
        let newvalue =prompt("enter the edit value")
        todo.splice(index,1,newvalue)
        setTodo([...todo])
        
        // console.log("edit hu me",index,todo)
      }
    
    
      function deleteBtn(index){
    
        todo.splice(index,1)
        
        setTodo([...todo])
        // console.log("deldte",index,todo)
    
    
    
      
      }
    
   



  return (

      <>      
     

<p className='bg-blue-500 text-2xl text-center text-white font-semibold'>Todo App with time </p>

<div className='p-2 m-2'>
 <input type="text" name="" autoFocus id="userInput" placeholder='Enter the Message' className='p-2 m-2 px-5 rounded-md shadow text-gray-800' onChange={(e)=>setText(e.target.value )}  value={text}/>
 <button id='addBtn' onClick={addtodo} className='bg-blue-500 px-5 p-2 rounded-md shadow-lg hover:bg-blue-400'>Add todo</button>



</div>

<div>
 <ul id='addList'>

    {todo.map((item,index)=>{
     return <li key={index} className=' m-2 p-2 w-max rounded-md shadow-md hover:bg-gray-800 font-semibold'>
       {index}
     <span className='m-2'>{item}</span> 
     <span className='m-2 p-2'>{moment().format('LT')}</span>
     <button className='bg-blue-500 px-6 py-1 m-2 hover:bg-blue-400' onClick={()=>editBtn(index)}>Edit</button>
     <button className='bg-red-500 px-6 py-1 m-2 hover:bg-red-400' onClick={()=>deleteBtn(index)}>Delete</button>
   </li> 

    })}
  
 </ul>
</div>








      
    </>
  )
}

export default Todo
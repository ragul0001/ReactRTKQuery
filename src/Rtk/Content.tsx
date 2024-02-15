import React, { useState } from 'react'
import { useGetDataQuery,useAddTodoMutation,useUpdateTodoMutation,useDeleteTodoMutation } from './serviceApi/Api'


function Content() {
    const [page,setPage]=useState(1);
    const [todo,setNewTodo]=useState('');
    const {data:studyData = [],error,isLoading,isSuccess}=useGetDataQuery({ page });
    const [addTodo]=useAddTodoMutation();
    const  [updateTodo]=useUpdateTodoMutation();
    const  [deleteTodo]=useDeleteTodoMutation();

    const handleSubmit=(e:any)=>{
         e.preventDefault();
         addTodo({userId:1,title:todo,completed:false});
         setNewTodo('');
    }

    console.log(studyData);

    const newItem=
    <form onSubmit={handleSubmit}>
            <div className='flex justify-center my-4'> 
                <div>
                    <input type="text" id='new-todo' className='w-96 border p-2 rounded-xl'  value={todo} onChange={(e:any)=>setNewTodo(e.target.value)} placeholder='Enter a Todo' />
                </div>
                <div className='flex items-center ml-3'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                    </svg>
                </div>
            </div>      
    </form>

    let content;
    if(isLoading) {
        content =<p>Loading...</p>
    }
    else if(isSuccess){
       content=studyData.map((todo:any) =>{
          return (
               <div>
                   <div className='w-[500px] mx-auto my-3'>
                          <div key={todo.id} className='flex justify-between items-center '>
                                <div className='todo'>
                                     <input type="checkbox" 
                                        checked={todo.completed}
                                        id={todo.id}
                                        onChange={()=>updateTodo({...todo,completed:!todo.completed})}
                                     />
                                    
                                </div>
                                <div>
                                     <label htmlFor={todo.id} className='text]'>{todo.title}</label>
                                </div>
                                <div>
                                     <button onClick={()=>deleteTodo({id:todo.id})}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                    </button>
                                </div>
                          </div>
                           
                   </div>
               </div>
          )
       })
    } 
    else if(error){
        content=<p>Errors...</p>
     } 

  

  return (
    <>
{/* 
            <div className='container mx-auto lg:px-8 max-w-7xl'>
                  <div className='flex justify-center'>
                      <h1>Welcome to API RTK Query React</h1>
                  </div>
                  {studyData.map((item:any) => (
                    <div key={item.id} className="border p-2 my-2">
                        <h2>Title: {item.title}</h2>
                        <p>User ID: {item.userId}</p>
                        <p>ID: {item.id}</p>
                        <p>Completed: {item.completed ? 'Yes' : 'No'}</p>
                    </div>
                ))}   
        
                <div className='flex '>
                    <button className='border p-2 bg-orange-500' disabled={page <= 1}
                        onClick={() => setPage((prev) => prev - 1)}>Prev</button>
                    <button className='border p-2 bg-purple-500' disabled={studyData.length < 10}
                        onClick={() => setPage((prev) => prev + 1)}>Next</button>
                </div>
            </div> */}
            {newItem}
            {content}
                
    
    </>
  )
}

export default Content
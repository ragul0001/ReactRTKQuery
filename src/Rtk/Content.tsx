import React, { useState } from 'react'
import { useGetDataQuery } from './serviceApi/Api'


function Content() {
    const [page,setPage]=useState(1);
    const {data:studyData = [],error,isLoading}=useGetDataQuery({ page });
    console.log(studyData)
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>error</div>
    if(!studyData) return <div>No data available...</div>

  

  return (
    <>

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
            </div>
    
    </>
  )
}

export default Content
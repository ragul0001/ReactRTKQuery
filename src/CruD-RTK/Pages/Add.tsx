import React, { useState } from 'react'
import { useAddDataMutation } from '../Apiconnections/Service';
import { Link } from 'react-router-dom';
import View from './View';
import { useNavigate } from 'react-router-dom';

function Add() {
    const navigate=useNavigate();
    const initalState={name:'',email:"",company:""};
   const[values,setValue]=useState(initalState)


   const [getData]=useAddDataMutation();
   const handleChange=(e:any)=>{
         const {name,value}=e.target;
         setValue({...values,[name]:value});
   }
    const handleSubmit=async (e:any)=>{
        e.preventDefault(); // Prevent default form submission behavior
        console.log(values)
        alert("Form successfully Submitted");
    
        try {
           await getData(values); // Assuming addData is a function that sends a POST request to your API
           // Optionally, you can clear the form fields after successful submission
           setValue({ name: '', email: '', company: '' });
           navigate('/')
        } catch (error) {
           console.error('Error occurred while adding data:', error);
           // Handle error gracefully, show error message to the user, etc.
        }
    }

  return (
    <>
       <div className='container mx-auto max-w-7xl lg:px-8'>
            <div className='flex justify-center place-items-center'>
                  <form action="#" onSubmit={handleSubmit} className='border p-2 space-y-3'>
                            <div>
                                <input type="text" name='name' onChange={handleChange} className='w-96 border border-black rounded-xl p-3' placeholder='Enter Your Name'/>
                            </div>
                            <div>
                                <input type="email" name='email' onChange={handleChange}  className='w-96 border border-black rounded-xl p-3' placeholder='Enter Your email'/>
                            </div>      
                            <div>
                                <input type="text" name='company' onChange={handleChange} className='w-96 border border-black rounded-xl p-3' placeholder='Enter Your company'/>
                            </div>
                            <div className='flex justify-center space-x-2' >
                                 <button className='p-2 bg-green-400 rounded-xl text-white' >Submit</button>
                                <Link to='/' ><button className='p-2 bg-purple-400 rounded-xl text-white' >View</button></Link> 
                            </div>
                  </form>
            </div>
       </div> 
    </>
  )
}

export default Add
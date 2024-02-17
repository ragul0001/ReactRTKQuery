import React, { useState, useEffect } from 'react';
import { useUpdateDataMutation, useGetDataQuery } from '../Apiconnections/Service';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Update() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // Parse id as string
  const [values, setValues] = useState({ name: '', email: '', company: '' });
  const { data: userData } = useGetDataQuery('parameters');
  const [updateData] = useUpdateDataMutation();
   
  useEffect(() => {
    if (userData) {
      const userToUpdate = userData.find((user:any) => user.id === id); // Parse id as integer
      if (userToUpdate) {
        setValues({ ...userToUpdate });
      }
    }
  }, [userData, id]);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await updateData({ id, ...values });
      alert("Data updated successfully");
      navigate('/');
    } catch (error) {
      console.error('Error occurred while updating data:', error);
    }
  }

  return (
    <>
      <div className='container mx-auto max-w-7xl lg:px-8'>
        <div className='flex justify-center place-items-center'>
          <form onSubmit={handleSubmit} className='border p-2 space-y-3'>
            <div>
              <input type="text" name='name' value={values.name} onChange={handleChange} className='w-96 border border-black rounded-xl p-3' placeholder='Enter Your Name' />
            </div>
            <div>
              <input type="email" name='email' value={values.email} onChange={handleChange} className='w-96 border border-black rounded-xl p-3' placeholder='Enter Your email' />
            </div>
            <div>
              <input type="text" name='company' value={values.company} onChange={handleChange} className='w-96 border border-black rounded-xl p-3' placeholder='Enter Your company' />
            </div>
            <div className='flex justify-center space-x-2' >
              <button className='p-2 bg-green-400 rounded-xl text-white' >Update</button>
              <Link to='/' ><button className='p-2 bg-purple-400 rounded-xl text-white' >Cancel</button></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;

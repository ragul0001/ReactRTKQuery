import React, { useState } from 'react';

function Design() {
  const [cart, setCart] = useState<any>([]);
  const [courses, setCourses] = useState([
    {
      title: 'The Full Stack Development for React and Next js',
      author: 'Robert Downey Jr'
    },
    {
      title: 'The Full Stack Web Development for React and Vite js',
      author: 'Win Disel P'
    },
    {
      title: 'CyberSecurity and Ethical Hacking for Latest version',
      author: 'Jordan Whiley'
    },
    {
      title: 'Block Chain and Banking System',
      author: 'Nolan Phillips'
    }
  ]);

  const addToCart = (course: any) => {
    setCart([...cart, course]); // Append the course to the cart array
    setCourses(courses.filter((c: any) => c !== course));
  };

  return (
    <>
      <div className='container mx-auto max-w-7xl lg:px-8'>
        <div className='flex justify-center'>
          <div className='border p-2'>
            <div className='border p-3'>
              {/* Cart */}
              <div className='flex flex-col justify-evenly gap-3'>
                {cart.map((course: any, index: any) => (
                  <div key={index} className='w-[300px] h-[200px] bg-gray-200 rounded-lg'>
                    <h1 className='text-[20px] w-[300px] font-semibold text-gray-500'>{course.title}</h1>
                    <p>{course.author}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Courses */}
            {courses.map((course, index) => (
              <div key={index} className='flex justify-evenly gap-3 my-2'>
                <div className='w-[300px] h-[190px] bg-gray-200 rounded-lg'></div>
                <div className='flex items-center'>
                  <div>
                    <h1 className='text-[20px] w-[400px] font-semibold text-gray-500'>{course.title}</h1>
                    <p>{course.author}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <button className='border bg-blue-600 rounded-lg p-2 text-white' onClick={() => addToCart(course)}>Add</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;

import React from 'react';
import { useContactQuery } from '../Apiconnections/Service';
import { useParams } from 'react-router-dom';

function Info() {
    const {id} = useParams();
    console.log(id)
    const { data, error, isFetching, isLoading } =  useContactQuery(id);
    console.log(data);

    if (isLoading) return <div>Loading...</div>; // Render loading indicator while data is being fetched

    if (error) return <div>Error....</div>; // Render error message if fetching data fails

    return (
        <>
       <div className='container mx-auto max-w-7xl lg:px-8'>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error..</div>}
            {data && (
                <div className='flex flex-col justify-start items-center'>
                    <div className="">
                        <ul>
                            <li>id: {id}</li>
                            <li>Name: {data.name}</li>
                            <li>Email: {data.email} </li>
                            <li>Company: {data.company.name}</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default Info;

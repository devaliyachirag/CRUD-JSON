import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Users() {
    const navigate = useNavigate()
    var [data, setdata] = useState([]);
    {
        useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    setdata(response.data)
                })
        }, [])
    }

    return (
        <div className='p-4'>
            {console.log(data)}z
            {data.map((val, ind) => {
                return <>
                    <div key={ind} className='d-flex justify-content-center'>
                        <section className='p-2 bg-light rounded-5 mt-3 w-50'>
                            <h5 className='mb-1'>{val.name}</h5>
                            <h6 className='mb-1'>{val.username}</h6>
                            <h6 className='mb-1'>{val.email}</h6>
                        </section>
                    </div>
                </>
            })}
            <button className='btn bg-primary col-6 mx-auto d-block mt-4' onClick={()=>navigate('/users/adduser')}>Add user</button>
        </div>
    )
}


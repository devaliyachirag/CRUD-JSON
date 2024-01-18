import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Home() {

  var inputval
  var navigate = useNavigate()
  function run(val) {
    inputval = val
  }
  function validAccess() {
    if (inputval != null) {
      navigate('/users')
    }
    else {
      alert('Please fill the details')
    }
  }
  return (
    <div className="container p-2">
      <section className='bg-secondary rounded-3 text-white p-2 text-center'>
        <img src={'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'} style={{ width: '100px' }} />
        <h1>Sign in to Page</h1>
      </section>
      <section className="bg-light text-center mt-3 p-4 rounded-3 border">
        <label htmlFor="">Username or Email address</label>
        <input type="email" onChange={(e) => run(e.target.value)} required className='form-control w-25 mx-auto my-2' />
        <label htmlFor="">Password</label>
        <input type="password" onChange={(e) => run(e.target.value)} required className='form-control w-25 mx-auto my-2' />
        <button className='btn text-white bg-success mt-3 w-25' onClick={() => validAccess()}>Sign in</button>
      </section>
      <section className='mt-4 text-center bg-light rounded-3 pt-3 text-primary border'>
        <p>Sign in with passkey</p>
      </section>
    </div>
  )
}

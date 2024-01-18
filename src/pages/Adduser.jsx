import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submit, setName, setUname, setEmail, updateData,deleteData } from '../Slice/userSlice'
export default function Adduser() {
    var dispatch = useDispatch()
    var name = useSelector((state) => state.user.name)
    var uname = useSelector((state) => state.user.uname)
    var email = useSelector((state) => state.user.email)
    var data = useSelector((state) => state.user.arr)
    return (
        <>
            <div className='container'>
                <input type="text" value={name} onChange={(e) => dispatch(setName(e.target.value))} className='form-control mt-3' placeholder='Name' /><br />
                <input type="text" value={uname} onChange={(e) => dispatch(setUname(e.target.value))} className='form-control' placeholder='Username' /><br />
                <input type="text" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} className='form-control' placeholder='Email address' />
                <button className='btn btn-primary mt-3 mb-5' onClick={() => dispatch(submit('hello'))}>Submit</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Userame</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, ind) => {
                            return <>
                                <tr key={ind}>
                                    <td>{val.objectName}</td>
                                    <td>{val.objectUname}</td>
                                    <td>{val.objectEmail}</td>
                                    <td><button onClick={()=>dispatch(updateData(ind))} className='btn bg-primary'>Update</button></td>
                                    <td><button onClick={()=>dispatch(deleteData(ind))} className='btn bg-danger'>Delete</button></td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

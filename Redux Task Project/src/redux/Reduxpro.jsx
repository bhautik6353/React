import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, deleteuser, UpdateData } from '../slice/Slice'

export default function Reduxpro() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [projectName, setprojectName] = useState('')
    const [date, setdate] = useState('')
    const [indexEdit, setindexEdit] = useState(null)
    const projectNamemanger = useSelector((state) => {
        return state.userkey
    });
    const dispatch = useDispatch();

    const addData = () => {
        if (indexEdit == null) {
            dispatch(adduser({ id: Date.now(), name, email, gender, projectName, date }))
        } else {
            dispatch(UpdateData({ id: indexEdit, name, email, gender, projectName, date }))
            setindexEdit(null)
        }
        setName('')
        setEmail('')
        setGender('')
        setprojectName('')
        setdate('')
    }
    const deleteData = (id) => {
        dispatch(deleteuser(id));
    }
    const editData = (id) => {
        let singleData = projectNamemanger.user.find((item) => item.id == id)
        setindexEdit(id)
        setName(singleData.name)
        setEmail(singleData.email)
        setGender(singleData.gender)
        setprojectName(singleData.projectName)
        setdate(singleData.date)
    }
    const handleGender = (value) => {
        setGender(value)
    }



    return (
        <div>
            <center>
                <section class="cd-intro">
                    <h1 class="cd-headline clip is-full-width">
                        <span>Task</span>
                        <span class="cd-words-wrapper">
                            <b class="is-visible">&nbsp;Manger</b>
                            <b class="is-visible">&nbsp;Project</b>

                        </span>
                    </h1>
                </section>

            </center>
            <div className="main">
                <div className="form">

                    <h1>Update Project Status</h1>
                    <label className='label1' htmlFor="">Enter Name</label> <br />
                    <input className='input1' type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} value={name} /> <br /><br />
                    <label className='label1' htmlFor="">Enter Email</label> <br />
                    <input className='input1' type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} /> <br /><br />
                    <label className='label1' htmlFor="">Enter Gender</label> <br />
                    <input className='input2' type="radio" checked={gender === "Male" ? true : false} name='Gender' value="male" onClick={() => handleGender("Male")} />
                    <label className='label2' htmlFor="">Male</label>
                    <input className='input2' type="radio" checked={gender === "Female" ? true : false} name='Gender' value="female" onClick={() => handleGender("Female")} />
                    <label className='label2' htmlFor="">Female</label> <br /><br />
                    <label className='label1' htmlFor="">Enter Project Name</label> <br />
                    <input className='input1' type="text" placeholder='Enter project Name' onChange={(e) => setprojectName(e.target.value)} value={projectName} /> <br /><br />
                    <label className='label1' htmlFor="">Enter Date</label> <br />
                    <input className='input1' type="date" placeholder='Enter Date' onChange={(e) => setdate(e.target.value)} value={date} /> <br />



                    <center>      <button id='bt1' onClick={addData} >{indexEdit ? "Update Task Data" : "Add Task Data"}</button></center>


                </div>
                <div className="table">

                    <table border={2} width={"86%"}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>projectName</th>
                                <th>daterity</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                projectNamemanger ?
                                    projectNamemanger.user.map((e, i) => {
                                        return (<tr key={i}>
                                            <td>{e.id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.gender}</td>
                                            <td>{e.projectName}</td>
                                            <td>{e.date}</td>
                                            <td>
                                                <button id='bt2' onClick={() => deleteData(e.id)}>Delete</button>&nbsp;&nbsp;
                                                <button id='bt3' onClick={() => editData(e.id)}>Edit</button>
                                            </td>
                                        </tr>)
                                    }) : " "
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'

export default function Crud() {
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const[subject,setSubject]=useState("")

    const[record,setRecord]=useState(null)

    useEffect(()=>{
        let data=JSON.parse(localStorage.getItem("Student")) || [] 
        setRecord(data)
    },[record])

    const handleData=()=>{
        const user = {id:Date.now(),name,age,subject}
        record.push(user)
        console.log(record)
        localStorage.setItem("Student",JSON.stringify(record))



    }


  return (
    <div>
        <center>
      <h1>CRUD Oprations</h1>
      <input type="text"  onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/> <br /><br />
      <input type="text"  onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age"/> <br /><br />
      <input type="text"  onChange={(e)=>setSubject(e.target.value)} placeholder="Enter Subject"/> <br /><br />

      <button onClick={handleData}>ADD Data</button><br /><br />

      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>SUBJECT</th>
            </tr>
        </thead>
        <tbody>
            {
                record ?
                record.map((e,i)=>{
                  return <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.subject}</td>


                  </tr>
                })
                :
                <tr><td>Loading...</td></tr>

            }
        </tbody>
      </table>
 
      </center>
    </div>
  )
}

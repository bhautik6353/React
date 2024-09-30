import React, { useEffect, useState } from 'react'

export default function Crudpro() {
    const[task,setTask]=useState("")

    const[taskList,setTaskList]=useState([])
    const[editTask,setEditTask]=useState(null)
    

    useEffect(()=>{
      let alldata=JSON.parse(localStorage.getItem("task"))
      setTaskList(alldata)
    },[])

    const addTask=()=>{
      
        let user={id:Date.now(),task,status:"Peddind"}
        let olddata=JSON.parse(localStorage.getItem("task")) || []
        if(editTask){
          let editdata=taskList.find((item)=>item.id==editTask)
          editdata.id=editTask
          editdata.task=task
          localStorage.setItem("task",JSON.stringify(taskList))
          setEditTask(null)
        }else{
          olddata.push(user)
          setTaskList(olddata)
          localStorage.setItem("task",JSON.stringify(olddata))

        }

        setTask("")

        

    }
    const deletetask=(id)=>{
      let delet=taskList.filter((item)=>item.id !=id)
      setTaskList(delet)
      localStorage.setItem("task",JSON.stringify(delet))

    }
    const edittask=(id)=>{
      let edit=taskList.find((item)=>item.id==id)
      setTask(edit.task)
      setEditTask(id)
    }
const editstatus=(id)=>{
   let updatstatus=taskList.map((item)=>{
    if(item.id===id){
      item.status="Complete"

    }
    return item;
   })
   setTaskList(updatstatus)
   localStorage.setItem("task",JSON.stringify(updatstatus))
}


  return (
    <div>
      <center>
    <div id='s4'>  <br />  <h1>Task Manager</h1>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter your task"/>
        <button onClick={addTask}>{editTask? "Update Task" :"Add Task"}</button> <br /><br />
        <table>
          <thead>
            <th>Id</th>
            <th>Task</th>
            <th>Status</th>
            <th colSpan={3}>Actions</th>
          </thead>
          <tbody>
            {
              taskList?
              taskList.map((item,index)=>{
                return <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.task}</td>
                  <td>{item.status}</td>
                  <td>
                    <button id='s1' onClick={()=>editstatus(item.id)}>Complete</button>
                    <button id='s3' onClick={()=>edittask(item.id)}>Edit</button>
                    <button id='s2' onClick={()=>deletetask(item.id)}>Delete</button>
                    


                  </td>
                </tr>
              }):""
            }
          </tbody>
        </table>
        <br />
        </div>
      </center>
      <br /><br /><br />
    </div>
  )
}

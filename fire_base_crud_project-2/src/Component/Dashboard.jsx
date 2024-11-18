
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../firebaseconfige'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'

export default function Dashboard() {
  const [user, setUser] = useState()
  const [tasklist, setTasklist] = useState('')
  const [prioritylist, setPrioritylist] = useState('')
  const [record, setRecord] = useState([])
  const [editindex, setEditindex] = useState(null)
  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }
    })
  }, [])

  useEffect(() => {
    if (user) {
      fetchUser()
      fetchData()
    }

  }, [user])

  const fetchUser = () => {
    console.log(user.uid);
    getDoc(doc(db, "users", user.uid))
      .then(data => {
        console.log(data.data());
      })
  }

  const fetchData = async () => {
    let Data= await getDocs(collection(db, "Todos"))
    let newData = Data.docs.map((data) => ({ docId: data.id, ...data.data() }));
    console.log(newData);
    setRecord(newData)
  }

  const handletasklist = async () => {
    let object = { uid: user.uid, tasklist, prioritylist };
    if (editindex == null) {
      const addData = await addDoc(collection(db, "Todos"), object)
        .then(data => {
          setRecord([...record, object])
        })
    } else {
      let updateData = updateDoc(doc(db, "Todos", editindex), object)
      console.log(updateData);
      fetchData()
    }
    setTasklist('');
    setPrioritylist('');
    setEditindex(null);
  }
  const handleDelete = async (id) => {
    console.log(id);
    const deleteData = await deleteDoc(doc(db, "Todos", id))
    console.log(deleteData);
    fetchData();
  }
  const handleEdit = (id) => {
    let singleData = record.find((item) => item.docId == id)
    setTasklist(singleData.tasklist)
    setPrioritylist(singleData.prioritylist)
    setEditindex(id)
  }
  return (
    <>
      <center>
        <h1>Dashboard Page</h1>
        <h1>Todo Manager</h1>
        <input type="text" placeholder='Enter task' value={tasklist} onChange={(e) => setTasklist(e.target.value)} /> <br /><br />
        <input type="text" placeholder='Enter priority' value={prioritylist} onChange={(e) => setPrioritylist(e.target.value)} /> <br /><br />
        <button onClick={handletasklist}>{editindex == null ? "Add tasklist" : "Update tasklist"}</button>  <br /><br />

      </center>

      <table width={"100%"} border={2}>
        <thead>
          <tr>
            <th>tasklist</th>
            <th>prioritylist</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            record &&
            record.map((e, i) => {
              if (e.uid === user.uid) {
                return <tr key={i}>
                  <td>{e.tasklist}</td>
                  <td>{e.prioritylist}</td>
                  <td><button id='button-2' onClick={() => handleEdit(e.docId)}>Edit</button>
                    <button id='button-3' onClick={() => handleDelete(e.docId)}>Delete</button>
                  </td>
                </tr>
              }
              return;
            })
          }
        </tbody>
      </table>
    </>
  )
}
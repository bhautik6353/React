import React, { useState } from 'react'

export default function Hook() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('bhautik')
    const increase=()=>{
        setCount(count+1)
    }
    const decrease=()=>{
        setCount(count-1)
    }
    const[arr,setArr]=useState([1,2,3,4,5])
    const[arrobj,setArrObj]=useState([{name:"bhautik",subject:"rect"},{name:"jk",subject:"c++"}])
    const[obj,setObj]=useState({name:"bhautik",age:5})

  return (
    <div>
     <center> 

        <h1>Count:{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <h1>name:{name}</h1>
        <button onClick={()=>setName('bhautik patel')}>Change Name</button>
        {
            arr.map((item,index)=>{
                return <h1 key={index}>{item}</h1>
            })

        }
        {
            arrobj.map((item,index)=>{
                return <h4 key={index}>Name:{item.name} <br />
                Subject:{item.subject}</h4>

  
            })
        }
        <h4>Name:{obj.name} <br />
        Age:{obj.age}</h4>


        
     </center>
    </div>
  )
}

import React from 'react'

export default function Listkey() {
    const arr=["jk","bk","sk","tm"]
    const arrObj=[{name:"bhautik",sub:"React"},{name:"sahil",sub:"React"}]
  return (
    <>
   <center> <h1>ListKey</h1>
    {
        arr.map((item,index)=>{
            return <div key={index}>{item}</div>
        })

    }
    <h1>ArrObj_listKey</h1>
    {
        arrObj.map((item,index)=>{
            return <div key={index}>
                <h5>name:{item.name}</h5>
                <h5>subject:{item.sub}</h5>

            </div>
        })
    }
    
    </center>
    </>
  )
}

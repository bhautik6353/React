import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBudget } from '../../slice/Deposite'
import { addexpense } from '../../slice/Expense'

export default function Money() {
  const dispatch=useDispatch()
  const moneydeposit=useSelector((state)=>{
    return state.depositkey
  })
  const moneyexpense=useSelector((state)=>{
    return state.expensekey
  })

  const[deposite,setDeposite]=useState("")
  const[expense,setExpense]=useState("")
  const[reason,setReason]=useState("")

  const addmoney=()=>{
    dispatch(addBudget(deposite))
    setDeposite("")
  }
  const addexp=()=>{
    dispatch(addexpense({reason,expense}))
    setExpense("")
    setReason("")
  }
  

  return (
    <div>
      <div className='s1'><br />
        <h1>Hi,Bhautik</h1>
        <p>Welcome back to your <span>Money Manager</span></p>
      </div>
      <div className='s2'>
        <div><br />
            <h2>Your Balance:</h2>
            {
              moneydeposit&&
              <h2 className='s3'><span>Rs:</span>{moneydeposit.amount}</h2>
            }

        </div>
      </div>
      <div className="add">
        <input type="text" placeholder='Enter Amount' value={deposite} onChange={(e)=>setDeposite(e.target.value)}/><br />
        <button className="btn" onClick={addmoney}>Add Money</button>
      </div>
      <div className="addtransaction">
        <h1>Add Transaction</h1>
        <label htmlFor="">Title</label><br />
        <input type="text" placeholder='Enter Reason' value={reason} onChange={(e)=>setReason(e.target.value)}/> <br />
        <label htmlFor="">Amount</label><br />
        <input type="text" placeholder='Enter Amount' value={expense} onChange={(e)=>setExpense(e.target.value)} /> <br />
        <button className="btn" onClick={addexp}>Add</button>



      </div>
      <div className="table">
        <h1>History</h1>
        <div className="tabledata">
          <table>
          <thead>
            <tr>
              <th>No:</th>
              <th>Reason</th>
              <th>Amount</th>

            </tr>
          </thead>
          <tbody>
{moneyexpense.explist.length>0&&
  moneyexpense.explist.map((e,i)=>{
    return <tr key={i}>
      <td>{i+1}</td>
      <td>{e.reason}</td>
      <td>{e.expense}</td>

    </tr>
  })
}
          </tbody>
          </table>
          </div>
        
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchapi } from '../slice/Slice'

export default function Reduxapi() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchapi())

    },[])

    const record=useSelector((state)=>{
        return state.userkey
    })
  return (
    <div>
      <center>
      <h1 className="redux-api-title">ReduxApi</h1>
<div className="redux-api-container">
  {record.data &&
    record.data.map((item, index) => {
      return (
        <div className="redux-api-item" key={index}>
          <img src={item.image} alt={item.name} className="redux-api-image" />
          <h6 className="redux-api-name">Title:{item.title}</h6>
          <h6 className="redux-api-price">Price:{item.price}</h6>
          <p className="redux-api-description">Description:{item.description}</p>
        </div>
      );
    })}
</div>

      </center>
    </div>
  )
}

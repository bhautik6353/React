import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({data}) {
  return (
    <div>
        <center>
            <h1>Home</h1>
            <Link to={"/create"}>Create</Link>
            <Link to={"/update"}>Update</Link>
            <Link to={"/delete"}>Delete</Link>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {  data?
                        data.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.subject}</td>

                            </tr>
                        }):
                        ""
                    }
                </tbody>
            </table>
        </center>
      
    </div>
  )
}

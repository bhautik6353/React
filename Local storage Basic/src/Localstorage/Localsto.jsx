import React from 'react'

export default function Localsto() {
    localStorage.setItem("name","bhautik")
    localStorage.setItem("Language","React")
    let name=localStorage.getItem("name")
    let language=localStorage.getItem("Language")

    console.log(name)
    console.log(language)
    localStorage.removeItem("Language")
    let obj={
        name:"bhautik",subject:"React",
        marks:"90"
    }
    localStorage.setItem("myobj",JSON.stringify(obj))
    let objdata=JSON.parse(localStorage.getItem("myobj"))
    console.log(objdata)
    let array=[{name:"bhautik",subject:"React",
        marks:"90"},{
            name:"sohil",subject:"c++",marks:"80"
        }]
        localStorage.setItem("myarr",JSON.stringify(array))
        let arraydata=JSON.parse(localStorage.getItem("myarr"))
        console.log(arraydata)
    
  return (
    <div>
      


    </div>
  )
}

import { useState } from 'react'
import '/home/fudo/repos/CV-App/src/Styles/experience.css'

export default function Experience({index}){

    const [cName , setCName] = useState("Example Name")
    const [rName , setRName] = useState("Example Role")
    const [dF , setDf] = useState("2000-01-01")
    const [dT , setDt] = useState("2002-01-01")
    let cID = `company${index}`
    let rID = `role${index}`
    let dfID = `durationF${index}`
    let dtID = `durationT${index}`
    return (
      <div className='companyDetails' key={index}>
        <label htmlFor={cID}> Company Name :</label>
        <input type='text' id={cID} value={cName} onChange={(e) => setCName(e.target.value)}></input>
        <label htmlFor={rID}> Role Name :</label>
        <input type='text' id={rID} value={rName} onChange={(e) => setRName(e.target.value)}></input>
        <label htmlFor={dfID}> Duration From :</label>
        <input type='date' id={dfID} value={dF} onChange={(e) => setDf(e.target.value)}></input>
        <label htmlFor={dtID}> Duration From :</label>
        <input type='date' id={dtID} value={dT} onChange={(e) => setDt(e.target.value)}></input>
      </div>
    )
}
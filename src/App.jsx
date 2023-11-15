import { useState } from 'react'
import Display from './Components/display'
import './Styles/app.css'

function App() {
  const [fName, setfName] = useState("Example")
  const [lName, setlName] = useState("Name")
  const [age, setAge] = useState(23)
  const [email, setEmail] = useState("e@g.com")
  const [uName, setUName] = useState("Example University")
  const [dName, setDName] = useState("Example Degree")
  const [gradYear, setGradYear] = useState(69)
  const [count, setCount] = useState(0);
  const [cName, setCName] = useState([])
  const [rName, setRName] = useState([])
  const [dF, setDf] = useState([])
  const [dT, setDt] = useState([])

  const changeCName = (e) => {
    let index = e.target.id.slice(-1)
    let dupC = [...cName]
    dupC[index] = e.target.value
    setCName(dupC)
  }
  const changeRName = (e) => {
    let index = e.target.id.slice(-1)
    let dupR = [...rName]
    dupR[index] = e.target.value
    setRName(dupR)
  }
  const changeDF = (e) => {
    let index = e.target.id.slice(-1)
    let dupDF = [...dF]
    dupDF[index] = e.target.value
    setDf(dupDF)
  }
  const changeDT = (e) => {
    let index = e.target.id.slice(-1)
    let dupDT = [...dT]
    dupDT[index] = e.target.value
    setDf(dupDT)
  }

  const handleC = () => {
    if (count >= 5) {
      alert("Too many jobs to be posted buddy")
    }
    else {
      setCount(count + 1)
      setCName([...cName, "Example Name"])
      setRName([...rName, "Example Role"])
      setDf([...dF, "2000-01-01"])
      setDt([...dT, "2002-01-01"])
    }
  }

  let nodeList = []
  for (let i = 0; i < count; i++) {
    let cID = `company${i}`
    let rID = `role${i}`
    let dfID = `durationF${i}`
    let dtID = `durationT${i}`
    nodeList.push(
      <div className='companyDetails' key={i}>
        <label htmlFor={cID}> Company Name :</label>
        <input type='text' id={cID} value={cName[i]} onChange={changeCName}></input>
        <label htmlFor={rID}> Role Name :</label>
        <input type='text' id={rID} value={rName[i]} onChange={changeRName}></input>
        <label htmlFor={dfID}> Duration From :</label>
        <input type='date' id={dfID} value={dF[i]} onChange={changeDF}></input>
        <label htmlFor={dtID}> Duration From :</label>
        <input type='date' id={dtID} value={dT[i]} onChange={changeDT}></input>
      </div>)
  }
  return (
    <>
      <header>
        <h1 className='header'>Resume Maker</h1>
      </header>
      <main>
        <section className="formInp">
          <h2>Introduction</h2>
          <section className="intro">
            <label htmlFor="fName">First Name:</label>
            <input value={fName} type="text" maxLength={12} id="fName" onChange={(e) => setfName(e.target.value)} required></input>
            <label htmlFor="lName">Last Name:</label>
            <input value={lName} type="text" maxLength={12} id="lName" onChange={(e) => setlName(e.target.value)} required></input>
            <label htmlFor="age">Age:</label>
            <input value={age} type="number" max={100} id="age" onChange={(e) => setAge(e.target.value)} required></input>
            <label htmlFor="age">Email:</label>
            <input value={email} type="email" id="email" onChange={(e) => setEmail(e.target.value)} required></input>
          </section>


          <h2>Education</h2>
          <section className="educ">
            <label htmlFor="collegN">University name:</label>
            <input value={uName} type="text" maxLength={12} id="collegN" onChange={(e) => setUName(e.target.value)} required></input>
            <label htmlFor="degreeN">Degree name:</label>
            <input value={dName} type="text" maxLength={12} id="degreeN" onChange={(e) => setDName(e.target.value)} required></input>
            <label htmlFor="gradYear">Graduation %:</label>
            <input value={gradYear} type="number" id="gradYear" onChange={(e) => setGradYear(e.target.value)} required></input>
          </section>

          <h2>Experience</h2>
          <button className='expAdd' onClick={handleC}>Add Experience</button>
          <section className="experience">
            {nodeList.map((node) => node)}
          </section>
        </section>
        <section className="formDisp">
          <Display fName={fName} lName={lName} age={age} email={email} uName={uName} dName={dName} gradYear={gradYear} cName={cName} rName={rName} dF={dF} dT={dT} />
        </section>
      </main>
    </>
  )
}
export default App

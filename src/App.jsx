import { useState } from 'react'
import Display from './Components/display'
import './Styles/app.css'
import Experience from './Components/experience'

function App() {
  const [fName, setfName] = useState("Example")
  const [lName, setlName] = useState("Name")
  const [age, setAge] = useState(23)
  const [email, setEmail] = useState("e@g.com")
  const [uName, setUName] = useState("Example University")
  const [dName, setDName] = useState("Example Degree")
  const [gradYear, setGradYear] = useState(69)
  const [count , setCount] = useState(0);
  const [experiences , setExperiences] = useState([])
  const [cName, setCName] = useState([])
  const [role, setRole] = useState([])
  const [duration, setDuration] = useState([])

  const handleC = () => {
    if(count >= 5){
      alert("Too many jobs to be posted buddy")
    }
    else{
      setCount(count + 1)
      setExperiences([...experiences,<Experience key={count} index={count}></Experience>])
    }
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
            {experiences}
          </section>
        </section>
        <section className="formDisp">
          <Display fName={fName} lName={lName} age={age} email={email} uName={uName} dName={dName} gradYear={gradYear} />
        </section>
      </main>
    </>
  )
}
export default App

import { useState } from 'react'
import Display from './Components/display'
import './Styles/app.css'

function App() {
  const [fName, setfName] = useState("Example")
  const [lName, setlName] = useState("Name")
  const [age, setAge] = useState(23)
  const [uName, setUName] = useState("Example University")
  const [dName, setDName] = useState("Example Degree")
  const [perc, setPerc] = useState(69)
  const [skills, setSkills] = useState("All skills mentioned here")

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
          </section>


          <h2>Education</h2>
          <section className="educ">
            <label htmlFor="collegN">University name:</label>
            <input value={uName} type="text" maxLength={12} id="collegN" onChange={(e) => setUName(e.target.value)} required></input>
            <label htmlFor="degreeN">Degree name:</label>
            <input value={dName} type="text" maxLength={12} id="degreeN" onChange={(e) => setDName(e.target.value)} required></input>
            <label htmlFor="gradPerc">Graduation %:</label>
            <input value={perc} type="number" max={100} id="gradPerc" onChange={(e) => setPerc(e.target.value)} required></input>
          </section>


          <h2>Skills</h2>
          <section className="skill">
            <label htmlFor="skills">Skills :</label>
            <input value={skills} type="text" id="skills" onChange={(e) => setSkills(e.target.value)}></input>
          </section>
        </section>
        <section className="formDisp">
          <Display fName={fName} lName={lName} age={age} uName={uName} dName={dName} perc={perc} skills={skills}/>
        </section>
      </main>
    </>
  )
}
export default App

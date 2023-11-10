import Education from "./education";
import Intro from "./intro";
import Skills from "./skills";

export default function Display({
    fName,
    lName,
    age,
    uName,
    dName,
    perc,
    skills
}){
    return (
        <>
            <Intro fName={fName} lName={lName} age={age}/>
            <Education uName={uName} dName={dName} perc={perc} />
            <Skills skills={skills}/>
        </>
    )
}
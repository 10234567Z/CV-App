import Education from "./education";
import Experiences from "./experiences";
import Intro from "./intro";
import "/home/fudo/repos/CV-App/src/Styles/display.css"

export default function Display({
    fName,
    lName,
    age,
    email,
    uName,
    dName,
    gradYear,
    cName,
    rName,
    dF,
    dT
}){
    return (
        <>
            <section className="introD">
                <Intro fName={fName} lName={lName} age={age} email={email}/>
            </section>
            <h2>Education</h2>
            <section className="educD">
                <Education uName={uName} dName={dName} gradYear={gradYear} />
            </section>
            <h2>Experience</h2>
            <section className="expD">
                <Experiences cName={cName} rName={rName} dF={dF} dT={dT}/>
            </section>
        </>
    )
}
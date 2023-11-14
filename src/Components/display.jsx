import Education from "./education";
import Intro from "./intro";

export default function Display({
    fName,
    lName,
    age,
    email,
    uName,
    dName,
    gradYear,
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
        </>
    )
}
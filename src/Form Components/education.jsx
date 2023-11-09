export default function Education() {
    return (
        <>
            <h2>Education</h2>
            <label htmlFor="collegN">Colleg name:</label>
            <input type="text" maxLength={12} id="collegN" required></input>
            <label htmlFor="degreeN">Degree name:</label>
            <input type="text" maxLength={12} id="degreeN" required></input>
            <label htmlFor="gradPerc">Graduation %:</label>
            <input type="number" max={100} id="gradPerc" required></input>
        </>
    )
}
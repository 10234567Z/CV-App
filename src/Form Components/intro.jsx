export default function Intro(){
    return (
        <>
            <label htmlFor="fName">First Name:</label>
            <input type="text" maxLength={12} id="fName" required></input>
            <label htmlFor="lName">Last Name:</label>
            <input type="text" maxLength={12} id="lName" required></input>
            <label htmlFor="age">Age:</label>
            <input type="number" max={100} id="age" required></input>
        </>
    )
}
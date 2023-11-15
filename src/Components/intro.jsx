export default function Intro({
    fName,
    lName,
    age,
    email
}){
    return (
        <>
           <h1>{fName} {lName}</h1>
           <h3>{email}</h3>
           <h5>Age: {age}</h5>
        </>
    )
}
export default function Intro({
    fName,
    lName,
    age,
    email
}){
    return (
        <>
           <h4>{fName} {lName}</h4>
           <h5>Age: {age}</h5>
           <h6>{email}</h6>
        </>
    )
}
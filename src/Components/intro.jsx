export default function Intro({
    fName,
    lName,
    age
}){
    return (
        <>
           <h4>{fName} {lName}</h4>
           <h5>Age: {age}</h5>
        </>
    )
}
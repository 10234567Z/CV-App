export default function Education({
    uName,
    dName,
    gradYear
}) {
    return (
        <>
            <h5>University Name:</h5>
            <p>{uName}</p>
            <h5>Degree Name:</h5>
            <p>{dName}</p>
            <h5>Year Graduated:</h5>
            <p>{gradYear}</p>
        </>
    )
}
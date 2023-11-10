export default function Education({
    uName,
    dName,
    perc
}) {
    return (
        <>
            <h5>University Name:</h5>
            <p>{uName}</p>
            <h5>Degree Name:</h5>
            <p>{dName}</p>
            <h5>Percentage:</h5>
            <p>{perc}%</p>
        </>
    )
}
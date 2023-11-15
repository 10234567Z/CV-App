import "/home/fudo/repos/CV-App/src/Styles/education.css"

export default function Education({
    uName,
    dName,
    gradYear
}) {
    return (
        <>
            <div className="labels">
                <h3>University Name</h3>
                <h3>Degree Name</h3>
                <h3>Graduated Year</h3>
            </div>
            <div className="information">
                <p>{uName}</p>
                <p>{dName}</p>
                <p>{gradYear}</p>
            </div>
        </>
    )
}
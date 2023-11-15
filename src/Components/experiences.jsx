import '/home/fudo/repos/CV-App/src/Styles/experiences.css'
export default function Experiences({
    cName,
    rName,
    dF,
    dT
}) {
    let nodeList = []
    for (let i = 0; i < cName.length; i++) {
        nodeList.push(
            <section className="company" key={i}>
                <div className="labels">
                    <h3>Company Name</h3>
                    <h3>Role Name</h3>
                    <h3>From</h3>
                    <h3>To</h3>
                </div>
                <div className="information">
                    <p>{cName[i]}</p>
                    <p>{rName[i]}</p>
                    <p>{dF[i]}</p>
                    <p>{dT[i]}</p>
                </div>
            </section>
        )
    }
    return (
        <>
            {nodeList.map((node) => node)}
        </>
    )
}
export default function Experiences({
    cName,
    rName,
    dF,
    dT
}){
    let nodeList = []
    for (let i = 0; i < cName.length; i++) {
        nodeList.push(
            <section className="company">
                <p>In the company <strong>{cName[i]}</strong> while working on role of <strong>{rName[i]}</strong> from <strong>{dF[i]}</strong> to <strong>{dT[i]}</strong></p>
            </section>
        )
    }
    return (
        <>
        {nodeList.map((node) => node)}
        </>
    )
}
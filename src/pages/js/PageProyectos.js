import { useContext } from "react"
import CardProyecto from "../../components/PageProyectos/CardProyecto"
import { projectsContext } from "../../context/projectsContext"
import { Link } from "react-router-dom"
import '../css/PageProyectos.css'

function PageProyectos() {
    const { proyectos } = useContext(projectsContext)

    return (
        <div style={{ marginTop: "60px" }}>
            <div id="home">
                <h1 style={{ marginLeft: "20px" }}>Proyectos</h1>
                <div id="cards" className="row">
                    {proyectos.map(p => <CardProyecto proyecto={p}></CardProyecto>)}
                    <Link to={"/"} className="btn" id="botonVerMas">Volver a la Home</Link>
                </div>
            </div>
        </div>
    )
}

export default PageProyectos
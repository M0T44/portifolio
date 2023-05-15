import "../../css/style.projects.css"

import UP from "../../img/projects/up.png"
import EmBreve from "../../img/projects/em-breve.png"

export default function Projetos() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="paginaProjects">
                    <div className="projetos">
                        <div className="projetoLeft">
                            <h5>Universo da Personalização</h5>
                            <img src={UP} alt={UP} width={"500px"} />
                        </div>

                        <div className="projetoRight">
                            <h5>Em Breve</h5>
                            <img src={EmBreve} alt={EmBreve} width={"500px"} />
                        </div>

                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
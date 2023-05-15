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
                            <div className="mt-3 mb-3">
                                <h5>Universo da Personalização</h5>
                                <img src={UP} alt={UP} width={"600px"} className="img-fluid" />
                            </div>
                            
                            <hr/>

                            <div className="mt-3 mb-3">
                                <h5>Em Breve</h5>
                                <img src={EmBreve} alt={EmBreve} width={"600px"} className="img-fluid" />
                            </div>
                        </div>

                        <div className="projetoRight">
                            <div className="mt-3 mb-3">
                                <h5>Criando...</h5>
                                <img src={EmBreve} alt={EmBreve} width={"600px"} className="img-fluid" />
                            </div>

                            <hr/>

                            <div className="mt-3 mb-3">
                                <h5>Em Breve</h5>
                                <img src={EmBreve} alt={EmBreve} width={"600px"} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
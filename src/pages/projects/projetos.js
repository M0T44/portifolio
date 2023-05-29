import "../../css/style.projects.css"

import EmBreve from "../../img/projects/em-breve.png"

import Carrossel from "../../components/carousel/carousel"

export default function Projetos() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="paginaProjects">
                    <div className="projetos">
                        <div className="projetoLeft">
                            <div className="mt-3 mb-3">
                                <h5>Universo da Personalização</h5>
                                <a href="http://universodapersonalizacao.rf.gd" target='blank'>
                                    <Carrossel />
                                </a>
                            </div>

                            <hr />

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

                            <hr />

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
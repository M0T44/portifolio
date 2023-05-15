import { Link } from "react-router-dom";
import { Collapse, Button } from "reactstrap"
import React from 'react'
import '../../css/style.header.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Logo from "../../img/header-footer/logo.png"
import GitHub from "../../img/header-footer/github.png"
import Linkedin from "../../img/header-footer/linkedin.png"

export default function Header() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="header">

                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} width={"210px"} />
                            </Link>
                        </div>

                        <div className="menu">
                            <div className="botao">
                                <Button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavAltMarkup"
                                    aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false"
                                    aria-label="Toggle navegacao"
                                    onClick={() => {
                                        setIsOpen(!isOpen)
                                    }}
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </Button>
                            </div>

                            <Collapse className="collapse.show navbar-collapse" id="navbarNavAltMarkup" isOpen={isOpen}>
                                <Link to='/'>HOME</Link>
                                <Link to='/projetos'>PROJETOS</Link>
                                <Link to='/contato'>CONTATO</Link>
                            </Collapse>
                        </div>

                        <div className="contato">
                            <a href="https://github.com/M0T44" target="blanck">
                                <img src={GitHub} alt="" width={"40px"} />
                            </a>

                            <a href="https://www.linkedin.com/in/gabriel-mota-moreto-4b5046250/" target="blanck">
                                <img src={Linkedin} alt="" width={"40px"} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom";
import { Collapse, Button } from "reactstrap"
import React from 'react'
import '../../css/style.header.css'

import Logo from "../../img/logo.png"
import GitHub from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"

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
                            <a href="https://github.com/M0T44">
                                <img src={GitHub} alt="" width={"40px"} />
                            </a>

                            <a href="">
                                <img src={Linkedin} alt="" width={"40px"} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
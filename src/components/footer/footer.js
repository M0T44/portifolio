import React from 'react'
import { Link } from "react-router-dom";
import LogoTipo from "../../img/header-footer/logoTipo.png"
import GitHub from "../../img/header-footer/github.png"
import Linkedin from "../../img/header-footer/linkedin.png"
import "../../css/style.footer.css"

export default function Footer() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='footer'>
                    <div className='contatoFooter'>
                        <a href="https://github.com/M0T44" target="blanck">
                            <img src={GitHub} alt="" width={"40px"} />
                        </a>

                        <a href="https://www.linkedin.com/in/gabriel-mota-moreto-4b5046250/" target="blanck">
                            <img src={Linkedin} alt="" width={"40px"} />
                        </a>
                    </div>

                    <div>
                        <Link to="/">
                            <img src={LogoTipo} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
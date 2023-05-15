import '../../css/style.home.css'

import HTML5 from "../../img/home/html5.png"
import CSS3 from "../../img/home/css-3.png"
import JS from "../../img/home/script-java.png"
import React from "../../img/home/react.png"
import EmBreve from "../../img//home/em-breve.png"

export default function Home() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='home'>
                    <div className='inicio'>
                        <h5>
                            Olá, Eu sou <br />
                            <h3> Gabriel Mota.</h3>
                            Desenvolvedor Front-end
                        </h5>
                    </div>

                    <div className='sobreMim'>
                        <h3>Sobre Mim:</h3>
                        <h5>
                            Meu nome é Gabriel Mota e tecnologia é minha paixão. <br />
                            Meu primeiro contato com programão foi em 2021 na pandemia
                            e podemos dizer que foi amor a primeira vista, porque depois disso
                            não queria saber de mais nada
                        </h5>
                    </div>
                </div>

                <div className='habilidades'>
                    <div className='habilidade1'>
                        <h5 className='h5'>
                            habilidades:
                        </h5>
                        <div className='habilidade2'>

                            <div className='opacidade'>
                                <img src={HTML5} alt={HTML5} width={'50px'} />
                                <p>HTML5</p>
                                <div className='carregamento'>
                                    <p className='carregamento99'>99,9%</p>
                                </div>
                            </div>

                            <div className='opacidade'>
                                <img src={CSS3} alt={CSS3} width={'50px'} />
                                <p>CSS3</p>
                                <div className='carregamento'>
                                    <p className='carregamento80'>80%</p>
                                </div>
                            </div>

                            <div className='opacidade'>
                                <img src={JS} alt={JS} width={'50px'} />
                                <p>JavaScript</p>
                                <div className='carregamento'>
                                    <p className='carregamento30'>30%</p>
                                </div>
                            </div>

                            <div className='opacidade'>
                                <img src={React} alt={React} width={'58px'} />
                                <p>React</p>
                                <div className='carregamento'>
                                    <p className='carregamento50'>50%</p>
                                </div>
                            </div>

                            <div className='opacidade'>
                                <img src={EmBreve} alt="" width={'120px'}/>
                                <p>Estudando...</p>
                                <div className='carregamento'>
                                    <p className='carregamento0'>0%</p>
                                </div>
                            </div>

                            <div className='opacidade'>
                                <img src={EmBreve} alt="" width={'120px'}/>
                                <p>Estudando...</p>
                                <div className='carregamento'>
                                    <p className='carregamento0'>0%</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
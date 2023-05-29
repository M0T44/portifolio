import Carousel from 'react-bootstrap/Carousel';

import Home1 from '../../img/projects/carousel/home1.png'
import Dropdown from '../../img/projects/carousel/dropdown.png'
import Canecas from '../../img/projects/carousel/canecas.png'

import '../../css/style.carousel.css'

export default function Carrossel() {
    return (
        <div className='conteiner-fluid'>
            <Carousel className='carrossel'>

                <Carousel.Item>

                    <img
                        className="carousel-img img-fluid"
                        src={Home1}
                    />

                </Carousel.Item>

                <Carousel.Item>

                    <img
                        className="carousel-img img-fluid"
                        src={Dropdown}
                    />

                </Carousel.Item>

                <Carousel.Item>

                    <img
                        className="carousel-img img-fluid"
                        src={Canecas}
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
}
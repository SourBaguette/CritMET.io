import Carousel from 'react-bootstrap/Carousel';
import './CarouselComp.css';
import slide1 from '../images/slide1.jpeg';
import slide2 from '../images/slide2.jpeg';
import slide3 from '../images/slide3.jpeg';

function CarouselComp() {
    return (
        <div className="carouselBlock">
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Welcome to the QuARUm webpage! On this page you find general information about QuARUm as well as our latest results and upcoming events.</h2>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        {/* <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={slide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselComp;
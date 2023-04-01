/* eslint-disable jsx-a11y/alt-text */
import Carousel from 'react-bootstrap/Carousel';
import Uno from '../assets/uno.png';
import Dos from '../assets/Dos.jpg';
import Tres from '../assets/Tres.jpg';

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Uno} width="80"height="700"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Dos} width="100"height="700"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Tres} width="100"height="700"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
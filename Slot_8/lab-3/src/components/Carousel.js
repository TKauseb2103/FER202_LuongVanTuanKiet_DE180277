import { Carousel } from 'react-bootstrap';
import pizzas from '../data/pizza_data.json';

const CarouselBanner = () => {
  return (
    <Carousel>
      {pizzas.map((pizza, index) => (
        <Carousel.Item key={index}>
          <div style={{
            backgroundImage: `url(${pizza.image})`,
            height: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <div className="position-absolute bottom-0 start-50 translate-middle text-center text-white">
              <h1>{pizza.name}</h1>
              <p style={{
                fontSize: '26px',
              }}>{pizza.description}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselBanner;
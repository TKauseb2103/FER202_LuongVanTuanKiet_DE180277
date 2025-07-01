import React from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';

function Home() {
    const carouselImages = [
        'https://www.cateringbymichaels.com/wp-content/uploads/closeup-top-view-young-father-male-putting-dish-with-baked-hot-turkey-holiday-dinner-table-served-christmas-family-party.jpg',
        'https://healthhub.hif.com.au/theme/hif/assets/public/Image/Blog/Susie/Dinner-party.png',
        'https://cdn.shopify.com/s/files/1/0591/9935/7068/t/7/assets/celebration-of-life-food-1699562551254.jpg?v=1699562552'
    ];

    const foodImages = [
        'https://miro.medium.com/v2/resize:fit:1400/0*hTur-aP19sLUfk-2',
        'https://today.uconn.edu/wp-content/uploads/2015/11/iStock_000075244813_sm.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKPPVgF_rvPzdbJMMiv9obt3pVcuPS6uxEA&s',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/11/Grazing-platter-8cd15be.jpg?quality=90&resize=556,505',
        'https://img.taste.com.au/XhgFXu8L/w720-h480-cfill-q80/taste/2018/11/meatlovers-platter-143847-1.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOxDcA2R4MqQlb50sQyx7xL379O4HoeK5iFxtxUICR8sHzwjFoAT1YjlsE__zI6w5V1c&usqp=CAU'
    ];

    return (
        <div>
            <Carousel>
                {carouselImages.map((img, idx) => (
                    <Carousel.Item key={idx}>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            style={{ maxHeight: 350, objectFit: 'cover' }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            <Container className="my-4">
                <Row className="justify-content-center">
                    {foodImages.map((img, idx) => (
                        <Col key={idx} xs={6} sm={4} md={2} className="d-flex justify-content-center mb-3">
                            <Image
                                src={img}
                                roundedCircle
                                style={{ width: 100, height: 100, objectFit: 'cover', border: '3px solid #eee' }}
                                alt={`Food ${idx + 1}`}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            <h2 className='text-start' style={{ color: 'brown', marginLeft: 30 }}>This is Home Page</h2>
        </div>
    );
}

export default Home;
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const newLists = [
    { id: 1, title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', images: 'https://images.stockcake.com/public/3/1/2/3129cb99-e8a6-42b8-bf08-8b365587ffa8_large/busy-restaurant-kitchen-stockcake.jpg' },
    { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: 'https://www.touchbistro.com/wp-content/uploads/2021/09/commercial-kitchen-layout-design-for-restaurants-thumbnail.jpg' },
    { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: 'https://en.specifiglobal.com/wp-content/uploads/sites/2/2019/09/open_restaurant_kitchen-1.jpg' },
    { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get ’em in five different flavors.', images: 'https://c8.alamy.com/comp/JCTNCE/executive-chef-peter-lee-in-open-kitchen-loquita-restaurant-santa-JCTNCE.jpg' },
    { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQT6_M5UEy6w1zP7S_LCUJmS-u2RUq3YEBhHMCJGHg6T1KC-PGVlz6MNWlg2PV71M7zGA&usqp=CAU' },
    { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: 'https://cdn.broadsheet.com.au/cache/8a/6b/8a6b09c394b12808c3cb0bf99f4af34b.jpg' },
    { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: 'https://media.istockphoto.com/id/1409729992/photo/hectic-cooks-working-in-a-busy-commercial-kitchen-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=AqHyRan5GxcFgZ7qbkeY7IOM_DNsMUuj2RrnGXvMF2M=' },
    { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: 'https://passport-cdn.kiwicollection.com/blog/drive/uploads/2024/07/Open-Kitchens-1.jpg' },
];

function News() {
    return (
        <Container style={{ paddingTop: 24 }}>
            <h2 className='text-start' style={{ color: 'red', marginBottom: 24 }}>News Category</h2>
            <Row>
                {newLists.map(news => (
                    <Col key={news.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
                        <Card style={{ width: '100%', minHeight: 420, display: 'flex', flexDirection: 'column' }}>
                            <Card.Img
                                variant="top"
                                src={news.images}
                                alt={news.title}
                                style={{ height: 280, objectFit: 'cover' }}
                            />
                            <Card.Body className='text-start' style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <Card.Title style={{ fontSize: 18 }}>{news.title}</Card.Title>
                                <Card.Text style={{ fontSize: 15 }}>{news.description}</Card.Text>
                                <Card.Link
                                    href="#"
                                    style={{ color: '#1976d2', fontSize: 15, marginTop: 'auto' }}
                                >
                                    {news.title}
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default News;
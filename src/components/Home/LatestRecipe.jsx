import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const LatestRecipe = () => {
    return (
        <Container className='mb-5'>
            <section>
                <h2 className='text-center mb-3'>The Latest from ChefZone Recipe</h2>
                <Row xs={1} md={2} className="g-4">
                    <Col >
                        <Card style={{ height: '600px' }}>
                            <Card.Img variant="top" src="https://chefzone.wpenginepowered.com/wp-content/uploads/2023/03/20230302-balsamic-pearls-mini-caprese-featured.jpg" />
                            <Card.Body>
                                <Card.Title>Fondo Montebello Balsamic Pearls</Card.Title>
                                <Card.Text>
                                    Filled with grape must and Balsamic Vinegar of Modena, Perlamico Pearls turn even the simplest dish into an elevated masterpiece. Pearls preserve the exquisite taste and aroma of Balsamic Vinegar of Modena while adding flair to your presentation.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">March 02, 2023</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col >
                        <Card style={{ height: '600px' }}>
                            <Card.Img variant="top" src="https://chefzone.wpenginepowered.com/wp-content/uploads/2023/03/20230302-fabrique-delices-featured-board.jpg" />
                            <Card.Body>
                                <Card.Title>Artisanal Charcuterie From Fabrique Delices</Card.Title>
                                <Card.Text>
                                    Since 1985, Fabrique Délices has been preparing time-honored charcuterie classics alongside innovative new products. Made in small batches the artisanal and traditional way, according to authentic French recipes, Fabrique Délices offers the best and the most versatile line of charcuterie in the United States.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">February 23, 2023</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col >
                        <Card style={{ height: '600px' }}>
                            <Card.Img variant="top" src="https://chefzone.wpenginepowered.com/wp-content/uploads/2023/01/2023-01-basalmic-capresi-01.jpg" />
                            <Card.Body>
                                <Card.Title>Balsamic Vinegars Imported From Italy</Card.Title>
                                <Card.Text>
                                    Traditional Balsamic Vinegar is the highest grade available and is dark, sweet, and thick like a syrup. Aged between 12-25 years in wooden barrels to develop its unique flavor, these balsamic vinegars are produced in the Modena or Reggio Emilia regions of Italy using Trebbiano or Lambrusco grapes.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">January 31, 2023</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col >
                        <Card style={{ height: '600px' }}>
                            <Card.Img variant="top" src="https://chefzone.wpenginepowered.com/wp-content/uploads/2023/01/2022-01-bindi-desserts-featured.jpg" />
                            <Card.Body>
                                <Card.Title>Indulgent Desserts From Bindi</Card.Title>
                                <Card.Text>
                                    Bindi unites decades of Italian expertise and a constant drive for innovation to craft deliciously desirable offerings. From classics, like pastry cakes and croissants, to indulgent frozen desserts and gelato, the entire range provides both wholesale and single portion delicacies. Discover Bindi’s sweetest temptations.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">December 11, 2022</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </section>
            <section>
                <h2 className='text-center mt-5 mb-3'>Why Our Members  Love Us</h2>
                <h5>1. Over 5,000 products to help enhance your culinary skills.</h5>
                <h5>2. Specialty items you can’t find anywhere else in Hawaii.</h5>
                <h5>2. Locally owned & operated! ChefZone is a member of the Y. Hata ‘Ohana.</h5>
            </section>
        </Container>
    );
};

export default LatestRecipe;
import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='mb-5'>
            <h2 className='text-center py-5 bg-light'>ABOUT CHEFZONE</h2>
            <h1 className='text-center py-2'>Our Story</h1>
            <Row xs={1} md={2} className="g-4">

                <Col>
                    <p className='text-dark'>
                        Launched in 2014, ChefZone was founded with the goal of revolutionizing Hawaii’s foodservice industry. Harnessing the buying power of our parent company, Y. Hata & Co., Limited, and our partnership with the International Marketing Alliance (IMA), ChefZone offers thousands of unique local and national products many of which are available nowhere else in Hawaii. <br /><br />

                        Our wholesale club contains over 5,000 food and restaurant supply essentials in our 45,000-square-foot facility. Members also have access to our demonstration kitchen and catering concepts showroom.
                    </p>
                </Col>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://chefzone.wpenginepowered.com/wp-content/uploads/2023/02/2023-aboutus-slide-04.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://chefzone.wpenginepowered.com/wp-content/uploads/2023/02/2023-aboutus-slide-05.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://chefzone.wpenginepowered.com/wp-content/uploads/2023/02/2023-aboutus-slide-06.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://chefzone.wpenginepowered.com/wp-content/uploads/2023/02/2023-aboutus-slide-01.jpg"
                                alt="Four slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://chefzone.wpenginepowered.com/wp-content/uploads/2023/02/2023-aboutus-slide-02.jpg"
                                alt="Five slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://chefzone.wpenginepowered.com/wp-content/uploads/2023/02/2023-aboutus-slide-03.jpg"
                                alt="Six slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <section className='my-5'>
                <h1 className='text-center mb-2'>Serving Our Community</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card style={{height: '400px'}}>
                            <Card.Img variant="top" src="https://chefzone.wpenginepowered.com/wp-content/uploads/2021/01/hata-cares-food-dist-10.jpg" style={{height: '250px'}} />
                            <Card.Body>
                                <Card.Title>HATA CARES MEALS</Card.Title>
                                <Card.Footer>
                                    <small className="text-muted">January 2021 to ongoing</small>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{height: '400px'}}>
                            <Card.Img variant="top" src="https://chefzone.wpenginepowered.com/wp-content/uploads/2021/01/great-aloha-run-food-distribution-12-600x600.jpg" style={{height: '250px'}} />
                            <Card.Body>
                                <Card.Title>GREAT ALOHA RUN – HOLIDAY FOOD DISTRIBUTION</Card.Title>
                                <Card.Footer>
                                    <small className="text-muted">December 2020 to ongoing</small>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{height: '400px'}}>
                            <Card.Img variant="top" src="https://chefzone.wpenginepowered.com/wp-content/uploads/2021/01/chef-hui-6-600x600.jpg" style={{height: '250px'}} />
                            <Card.Body>
                                <Card.Title>CHEF HUI FOODSERVICE CARE PACKAGES</Card.Title>
                                <Card.Footer>
                                    <small className="text-muted">December 2020 to ongoing</small>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{height: '400px'}}>
                            <Card.Img variant="top" src="https://chefzone.wpenginepowered.com/wp-content/uploads/2021/01/kroc-center-donation-feat1.jpg" style={{height: '250px'}} />
                            <Card.Body>
                                <Card.Title>SALVATION ARMY HAWAII’S KROC CENTER</Card.Title>
                                <Card.Footer>
                                    <small className="text-muted">December 2020 to ongoing</small>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{height: '400px'}}>
                            <Card.Img variant="top" src="https://chefzone.wpenginepowered.com/wp-content/uploads/2021/01/yhata-salvation-army-pcc-07.jpg" style={{height: '250px'}} />
                            <Card.Body>
                                <Card.Title>SALVATION ARMY BUNDLES OF LOVE</Card.Title>
                                <Card.Footer>
                                    <small className="text-muted">December 2020 to ongoing</small>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{height: '400px'}}>
                            <Card.Img variant="top" src="https://chefzone.wpenginepowered.com/wp-content/uploads/2021/01/show-aloha-challenge-07.jpg" style={{height: '250px'}} />
                            <Card.Body>
                                <Card.Title>SHOW ALOHA CHALLENGE</Card.Title>
                                <Card.Footer>
                                    <small className="text-muted">December 2020 to ongoing</small>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </Container>
    );
};

export default About;
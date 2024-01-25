import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './CardComp.css';

//Importing event images
import event1 from '../images/eventImages/event1.jpeg';
import event2 from '../images/eventImages/event2.jpeg';
import event3 from '../images/eventImages/event3.jpeg';

function CardComp() {

    // Array containing image imports of events
    const eventImages = [event1, event2, event3];

    return (
        <>
            <div className='eventsTitle'>
                <p>Upcoming Events</p>
                <hr></hr>
            </div>
            <Container className="d-flex justify-content-center" style={{paddingBottom:'0px'}}>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card style={{ width: '360px' }}>
                                <Card.Img variant="top" className='cardImage' src={eventImages[idx]} />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        Some Information goes here
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default CardComp;
import React from 'react';
import Container from 'react-bootstrap/Container';
import ReactPlayer from 'react-player';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HomePage extends React.Component {
    constructor(props) {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <Container className="below-navbar">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h3>IMMERSING THE VIEWER IN THE EXPERIENCE THROUGH A VISUAL MEDIUM.</h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <ReactPlayer light={true} url="https://www.youtube.com/watch?v=loi-EW2dfyE" />
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default HomePage;
import React from 'react';
import Container from 'react-bootstrap/Container';
import ReactPlayer from 'react-player';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PortfolioPage extends React.Component {
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
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
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

export default PortfolioPage;
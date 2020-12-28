import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
class ContactPage extends React.Component {
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
                        <h3>Contact</h3>
                    </Row>

                    <Row className="justify-content-md-center">
                        <p>Feel reach out with project ideas! I am currently available for work.</p>
                    </Row>

                    <Row className="justify-content-md-center">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="name">Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Name"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="email">Email</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="subject">Subject</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Subject"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="Message">Message</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" rows={4}
                                aria-label="Message"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                    </Row>
                    <Row className="justify-content-md-center">
                        <Button className="button-submit" variant="light" type="submit">
                            Submit
                    </Button>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ContactPage;
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import jamesprofile from '../jamesprofile.jpg';
import about1 from '../about1.gif';
import about2 from '../about2.gif';
import about3 from '../about3.gif';
import about4 from '../about4.png';
import about5 from '../about5.gif';
import about6 from '../about6.png';
import Container from 'react-bootstrap/esm/Container';

class AboutPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }
  render() {
    const images1 = [about1, about2, about3];
    const images2 = [about4, about5, about6];
    const displayImg1 = images1.map((image) => {
      return (
        <Col>
          <Figure>
            <Figure.Image
              width={403}
              height={504}
              src={image}
            />
          </Figure>
        </Col>
      );
    });
    const displayImg2 = images2.map((image) => {
      return (
        <Col>
          <Figure>
            <Figure.Image
              width={403}
              height={504}
              src={image}
            />
          </Figure>
        </Col>
      );
    });
    return (
      <div className="below-navbar">
        <Container>
          <Row>
            <Col className="my-auto" xs={12} md={8}>
              <h4>Videography, Photography & Art Direction</h4>
              <p>
                Filmmaker on a mission to capture life’s stories and is venturing into the world of advertisement (through compelling short-form content tracked by SEO analytics) to connect with like-minded individuals of all backgrounds to expand my knowledge and skills for professional growth within the music industry and beyond.
            </p>
            </Col>
            <Col xs={6} md={4}>
              <Figure>
                <Figure.Image
                  src={jamesprofile}
                  width={407}
                  height={611}
                />
              </Figure>
            </Col>
          </Row>

          <Row>
            {displayImg1}
          </Row>
          <Row>
            {displayImg2}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutPage;
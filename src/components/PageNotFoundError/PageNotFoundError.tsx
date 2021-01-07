import React, { FC } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Background from '../Background/Background';

const PageNotFoundError: FC = () => {
  return (
    <>
      <Background />
      <Container>
        <Col>
          <Row style={{ alignItems: 'center', height: '50vh' }}>
            <Col>
              <Row style={{ justifyContent: 'center' }}>
                <h1 style={{ color: '#ffffff', textAlign: 'center' }}>
                  {"Oops... We can't find this page"}
                </h1>
              </Row>
              <Row style={{ justifyContent: 'center' }}>
                <Link to={{ pathname: '/' }}>
                  <Button variant="outline-light" type="submit">
                    {' '}
                    Back To Home{' '}
                  </Button>
                </Link>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default PageNotFoundError;

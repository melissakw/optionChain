import React, { FC } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {
  Background,
  HomeRow,
  HomeText,
  HomeSubText,
  HomeSmallSubText,
  HomeFooter,
  HomeFooterText,
} from './Home.elements';
import Search from '../util/Search';

const Home: FC = () => {
  return (
    <Background>
      <Container>
        <HomeRow>
          <Col xs={12} sm={6}>
            <Search isLoading={false} />
          </Col>

          <Col xs={12} sm={6}>
            <HomeText>The option trading toolkit you need.</HomeText>
            <HomeSubText>
              Keep up to date with the latest option contract prices. Instantly
              compare contracts across strike prices and expiration dates to
              find the best opportunity.
            </HomeSubText>
            <HomeSmallSubText>
              Disclaimer: All information presented is for educational purposes
              only and should not be considered error free or relied upon for
              investing decisions.
            </HomeSmallSubText>
          </Col>
        </HomeRow>
        <Row style={{ width: '100%' }} className="justify-content-center">
          <HomeFooter>
            <HomeFooterText>
              {'This demo is created by '}
              <a
                href="https://github.com/melissakw"
                style={{ color: '#b36200' }}
              >
                Melissa Wong
              </a>
            </HomeFooterText>
          </HomeFooter>
        </Row>
      </Container>
    </Background>
  );
};

export default Home;

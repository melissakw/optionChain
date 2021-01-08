import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import abstract from '../../images/abstract.png';

export const Background = styled.div`
  background-color: #000000;
  background: url(${abstract});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  position: fixed;
`;

export const HomeRow = styled(Row)`
  align-items: center;
  height: 100vh;
`;

export const HomeText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
`;

export const HomeSubText = styled(HomeText)`
  font-size: 1.2rem;
  line-height: normal;
`;

export const HomeSmallSubText = styled(HomeText)`
  font-size: 0.9rem;
  font-style: italic;
`;

export const HomeFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export const HomeFooterText = styled.p`
  font-size: 0.9rem;
  color: #8f99a4;
`;

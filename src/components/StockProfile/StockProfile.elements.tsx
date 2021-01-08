import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';

export const StockSymbolRow = styled(Row)`
  margin-top: 60;
`;

export const StockSymbol = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
`;

export const ProfileText = styled.p`
  font-size: 1rem;
  margin-bottom: 2px;
  color: white;
`;

export const LastPrice = styled.p`
  font-size: 3rem;
  margin-bottom: 2px;
  color: white;
`;

export const PriceChangeP = styled.p`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  margin-bottom: 2px;
  color: white;
`;

export const PriceChangeBadge = styled(Badge)`
  font-size: 1.5rem;
  color: white;
`;

export const TimeCurrencyExchange = styled(ProfileText)`
  font-size: 0.9rem;
  color: #8f99a4;
`;

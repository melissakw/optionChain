import React, { FC } from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  StockSymbolRow,
  StockSymbol,
  LastPrice,
  PriceChangeP,
  PriceChangeBadge,
  TimeCurrencyExchange,
  ProfileText,
} from './StockProfile.elements';
import volumeFormat from '../util/volumeFormat';

type Prop = {
  underlying: Record<string, unknown>;
};

const StockProfile: FC<Prop> = ({ underlying }: Prop) => {
  const {
    change,
    close,
    symbol,
    description,
    exchangeName,
    totalVolume,
  } = underlying;

  const timeNumber: number | any = underlying.quoteTime;
  const percentChange: number | any = underlying.percentChange;
  const percentChangeFormatted = `${percentChange.toFixed(2)}%`;
  const badgeVariant =
    percentChange > 0 ? 'success' : percentChange < 0 ? 'danger' : 'secondary';
  const iconVariant =
    percentChange > 0 ? (
      <ArrowDropUpIcon fontSize="large" />
    ) : percentChange < 0 ? (
      <ArrowDropDownIcon fontSize="large" />
    ) : (
      ''
    );

  return (
    <Col>
      <StockSymbolRow>
        <StockSymbol>{symbol}</StockSymbol>
      </StockSymbolRow>

      <Row>
        <ProfileText>{description}</ProfileText>
      </Row>

      <Row style={{ alignItems: 'center' }}>
        <LastPrice>{close}</LastPrice>
        <PriceChangeP>
          <PriceChangeBadge variant={badgeVariant}>
            {percentChangeFormatted}
          </PriceChangeBadge>
          {iconVariant}
          {change}
        </PriceChangeP>
      </Row>

      <Row>
        <TimeCurrencyExchange>
          {'As of '}
          {new Date(timeNumber).toString()}
          {' · USD · '}
          {exchangeName}
        </TimeCurrencyExchange>
      </Row>

      <Row>
        <ProfileText>
          {'Volume: '}
          {volumeFormat(totalVolume)}
        </ProfileText>
      </Row>
    </Col>
  );
};

export default StockProfile;

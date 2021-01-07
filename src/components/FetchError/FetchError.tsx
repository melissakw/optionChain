import React, { FC } from 'react';
import { Col } from 'react-bootstrap';
import { StyledRow, ErrorText } from './FetchError.elements';

const FetchError: FC = () => {
  return (
    <Col>
      <StyledRow>
        <ErrorText>
          The option chain you are looking for is not found. Please try again!
        </ErrorText>
      </StyledRow>
    </Col>
  );
};

export default FetchError;

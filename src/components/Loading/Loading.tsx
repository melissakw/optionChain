import React, { FC } from 'react';
import { Spinner } from 'react-bootstrap';
import { StyledRow } from './Loading.elements';

const Loading: FC = () => {
  return (
    <StyledRow>
      <Spinner animation="border" role="status" style={{ color: '#ffffff' }} />
    </StyledRow>
  );
};

export default Loading;

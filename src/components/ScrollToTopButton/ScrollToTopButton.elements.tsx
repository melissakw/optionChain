import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';

export const ScrollButton = styled(Icon)`
  color: #ffffff;
  position: fixed;
  bottom: 20px;
  justify-content: center;
  z-index: 100;
  cursor: pointer;
  animation: fadeIn 0.5s;
  transition: opacity 0.4s;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

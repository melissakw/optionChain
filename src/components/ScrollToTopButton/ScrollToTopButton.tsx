import React, { useState, useEffect, FC } from 'react';
import { ScrollButton } from './ScrollToTopButton.elements';

const ScrollToTopButton: FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checkScrollToTOp = (): void => {
    if (!showButton && window.pageYOffset > 80) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= 80) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollToTOp);
    return () => {
      return window.removeEventListener('scroll', checkScrollToTOp);
    };
  });

  return (
    <ScrollButton
      className="fas fa-arrow-circle-up"
      onClick={scrollToTop}
      style={{ fontSize: '48px', display: showButton ? 'flex' : 'none' }}
    />
  );
};

export default ScrollToTopButton;

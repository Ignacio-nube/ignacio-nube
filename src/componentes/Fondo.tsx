import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #121212;
    background: linear-gradient(
      135deg,
      #121212 25%,
      #1a1a1a 25%,
      #1a1a1a 50%,
      #121212 50%,
      #121212 75%,
      #1a1a1a 75%,
      #1a1a1a
    );
    background-size: 40px 40px;
    animation: move 4s linear infinite;
  }

  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 40px 40px;
    }
  }
`;

export default Pattern;

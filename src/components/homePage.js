import React from 'react';
import styled, { keyframes } from 'styled-components';
import ConnectingDots from './connectingDots';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(270deg, darkblue, black, purple);
  background-size: 600% 600%;
  animation: ${gradientAnimation} 16s ease infinite;
  position: relative;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-size: 40px;

`;

const Footer = styled.footer`
  position: absolute;
  bottom: 20px;
  text-align: center;
  width: 100%;
  font-size: 16px;
`;

const Title = styled.h1`
  z-index: 1;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <ConnectingDots />
      <Title>Connecting Dots</Title>
      <Footer>&#169; 2024  Zakron IT Industry . ALL RIGHTS RESERVED . PRANAY JAIN . </Footer>
    </HomePageContainer>
  );
};

export default HomePage;

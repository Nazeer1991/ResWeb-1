import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo></HeroVideo>
      <Container>
        <MainHeading></MainHeading>
        <HeroText></HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;

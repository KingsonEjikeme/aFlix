import React from 'react'
import { HeroContainer, HeroImage, MainText } from './HeroSectionElements'
import cinema from '../../images/cinema.jpg';
const HeroSection = () => {
  return (
    <HeroContainer>
        <MainText>Watch Something Incredible.</MainText>
        <HeroImage src={cinema}/>
    </HeroContainer>
  )
}

export default HeroSection
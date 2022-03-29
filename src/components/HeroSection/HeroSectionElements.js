import styled from 'styled-components';

export const HeroContainer = styled.div`
    overflow: hidden;
    display: flex;
    height: 550px;
    background-image: url("../../images/cinema.jpg");
    background-color: red;
    margin-top: 0;
    position: relative;
    @media (max-width: 810px){
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    
`



export const MainText = styled.div`
    color: #fff;
    position: absolute;
    margin-left: 77px;
    margin-top: 109px;
    font-size: 5.5vw;
    width: 24.5vw;
    font-weight: 700;
    font-family: 'DM Sans';
    line-height: 94px;
    letter-spacing: -0.05em;
    @media screen only (max-width: 810px){
        font-size: 8vw;
        line-height: 94px;
        text-align: center;
        letter-spacing: -0.05em;
        align-self: center;
        text-align: center;
    }
    @media (min-width: 400px){
        font-size: 50px;
        line-height: 72px;
        text-align: center;
        margin: auto;
        justify-content: center;
        left: 100px;
    }
`

export const HeroImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 550px;
`
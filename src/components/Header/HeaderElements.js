import styled from 'styled-components';

export const Navbar = styled.div`
    background-color: #292929;
    height: 140px;
    position: relative;
    
    @media (max-width: 810px){
        display: flex;
        justify-content: center; 
    }   
`

export const NavTitle = styled.div`
    display: inline-block;
    position: absolute;
    margin-left: 5rem;
    border: 1px solid #fff;
    width: 193px;
    height: 60px;
    font-size: 25px;
    align-items: center;
    justify-content:center;
    text-align: center;
    line-height: 60px;
    justify-self: center;
    top: 33%;
    @media (max-width: 810px){
        margin: 0 auto;
    }
    
`



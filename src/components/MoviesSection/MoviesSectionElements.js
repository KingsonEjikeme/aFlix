import styled from 'styled-components';

export const MoviesContainer = styled.div`
    background-color: #fff;
    over-flow: hidden;
`

export const SearchSection = styled.div`
    padding-left: 77px;
    padding-right: 57px;
    padding-top: 63px;
    padding-bottom: 63px;
`
export const SearchText = styled.p`
    font-size: 24px;
`

export const SearchBar = styled.input`
    width: 100%;
    height: 5vh;
    font-size: 24px;
    @media (max-width: 810px){
        height: 3vh;
        font-size: 12px;
    }
    // 680 54
`

export const MovieCategorySection = styled.div`
    margin-top: 10px;
`

export const Movies = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    margin-top: 10px;
    // flex: 4 0 auto;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
      }
`

export const MovieCategoryTitle = styled.p`
    font-size: 12px;
`

export const Movie = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    background-color: #000;
    margin-right: 13px;
    flex: 10 0 auto;
    overflow: hidden;
    border-radius: 12px;
    cursor: pointer;    
`

export const MovieTitle = styled.h3`
    color: #fff;    
    flex: 10 0 auto; 
    overflow-x: auto;   
    margin-top: 10px; 
    font-size: 24px;
`

export const MovieTitleContainer = styled.div`
    
    position: absolute;
    width: 200px;
    height: 50px;
`

export const MovieImage = styled.img`
    object-fit: cover;
`
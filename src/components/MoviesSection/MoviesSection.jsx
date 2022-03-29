import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Movie, MovieCategorySection, MovieCategoryTitle, MovieImage, Movies, MoviesContainer, MovieTitle, MovieTitleContainer, SearchBar, SearchSection, SearchText } from './MoviesSectionElements';



const MoviesSection = () => {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=5adf7b42&s=batman";
    const url2 = "http://www.omdbapi.com/?i=tt3896198&apikey=5adf7b42&s=shrek";

    useEffect(()=>{
        axios.get(url)
    .then(res=>{
       
        setMovieData(res.data.Search);
        console.log(res.data.Search);
        
        
    })
    .catch(err =>{
        console.log(err);
    })
    },[])

    useEffect(()=>{
        axios.get(url2)
    .then(res=>{
       
        setMovieData2(res.data.Search);
        console.log(res.data);
        
        
    })
    .catch(err =>{
        console.log(err);
    })
    },[])
    
    const [movieData, setMovieData] = useState([]);
    const [movieData2, setMovieData2] = useState([]);

   

    
    
    
    
    


    
    
  return (
    <MoviesContainer>
        <SearchSection>
            <SearchText>Search</SearchText>
            <SearchBar/>
        </SearchSection>

        <MovieCategorySection>

            <MovieCategoryTitle>Batman Movies</MovieCategoryTitle>
            <Movies>
            
               
                    {
                        movieData.map((singleMovie) =>(
                                <Movie>
                                    <MovieTitle>{singleMovie.Title}</MovieTitle>
                                    <MovieImage src={singleMovie.Poster}/>
                                </Movie>  
                            )
                        )
                    }
                              
            </Movies>

            <MovieCategoryTitle>Shrek Movies</MovieCategoryTitle>
            <Movies>
                {
                    movieData2.map((singleMovie) =>(
                                <Movie>
                                    <MovieTitleContainer>
                                        <MovieTitle>{singleMovie.Title}</MovieTitle>
                                    </MovieTitleContainer>
                                    <MovieImage src={singleMovie.Poster}/>
                                </Movie>  
                        )
                    )
                }
                
            </Movies>

        </MovieCategorySection>
    </MoviesContainer>
  )
}

export default MoviesSection
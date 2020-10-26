import React,{useState,useEffect} from 'react';
import axios from './axios';
import './App.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({title,fetchUrl,isLargeRow}) {

    const [movies,setmovies] = useState([]);
    const [trailer,settrailer] = useState("");

    useEffect(()=>{
      
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);


    const opts = {
        height: "390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };

    const handleClick=(movie)=>{
        if(trailer){
            settrailer("");
        }
        else{
            movieTrailer( movie?.original_name || movie?.name || movie?.title || movie?.original_title || "")
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                settrailer(urlParams.get("v"));
            })
            .catch((error)=> console.log(error));
            
        }
    };



    return (
        <div className="row">
            <h1 className="row-title">{title}</h1>

            <div className="row-poster-container">
           
              {movies.map(movie =>(
               
               <img 
                className={`row-poster ${isLargeRow && "row-poster-large"}`} 
                onClick={()=>handleClick(movie)}
                // src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path ? movie.backdrop_path : movie.poster_path   }`} 
                alt={movie.title} 
                key={movie.id}/>
              ))}

            </div>

            {trailer && <YouTube videoId={trailer} opts={opts} /> }
       </div>
    );
}

export default Row;

import React,{useState,useEffect} from 'react';
import axios from './axios';

function Banner({fetchUrl}) {

    const [movie,setmovie] = useState([]);

    useEffect(()=>{

        async function fetchData(){
            const request = await axios.get(fetchUrl);

        setmovie(
            request.data.results[Math.floor(Math.random() * request.data.results.length )]
        );
        return request;
        }

        fetchData();
    },[]);

    return (
        <div className="banner"
          style={{
            backgroundImage:`linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7)),url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition:"center"
          }}>

            <div className="banner-content">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner-button">
                    <button className="button">Play</button>
                    <button className="button">MyList</button>
                </div>

                <h2 className="banner-description">{movie.overview}</h2>
            </div>

            <div className="banner-fadebottom"></div> 
        </div>
    )
}

export default Banner;

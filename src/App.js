import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">

       <Navbar />

       <Banner fetchUrl={requests.fetchNetflixOriginals}/>

       <Row title ="Netflix-Original" fetchUrl={requests.fetchNetflixOriginals}  isLargeRow/>
       <Row title ="Trending" fetchUrl={requests.fetchTrending}/>
       <Row title ="Top Rated" fetchUrl={requests.fetchTopRated}/>
       <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies}/>
       <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
       <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
       <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;

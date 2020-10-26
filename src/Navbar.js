import React,{useState,useEffect} from 'react';
import './App.css';

function Navbar() {

    const [move,setmove] = useState();

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
          if(window.scrollY < 100){
              setmove(false);
          }
          else if(window.scrollY > 100){
              setmove(true);
          }
          else{
              setmove(false);
          }
      })
    },[])


    return (
        <div className={`navbar ${move && 'nav-black'}`}>
            <img src={process.env.PUBLIC_URL + '/netflix.png' } className="logo" alt="Netflix-logo"/>
            <img src={process.env.PUBLIC_URL + '/smile.png' } className="logo logo-smile" alt="Netflix-logo"/>
        </div>
    )
}

export default Navbar

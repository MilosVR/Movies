import React, { Component } from 'react'
import './Home.css'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div style={{height:`${window.innerHeight}px`, width:"100%", background:"url(/assets/GOT5.jpg) center center fixed",backgroundSize:"100% 130%",
                    position:"relative"}}>
      
      <div style={{position:'absolute', top:'60%', left:'50%', transform:'translate(-50%, -50%)', width:'100%',textAlign:'center'}}>
      <span style={{background:'rgb(0,0,0,0.5)', padding:"10px", borderRadius:"3px", color:"white", fontSize:'45px', 
                    fontWeight:"bold", fontFamily:"'Cinzel Decorative', cursive"}}>
                      Watch the latest Movies and TV Shows
      </span>  
          <p style={{background:'rgb(0,0,0,0.5)', padding:"0px", borderRadius:"none", color:"white", fontSize:'20px', fontWeight:'normal', 
          marginTop:'100px', width:'500px', margin:'30px auto', fontFamily:"'Cinzel Decorative', cursive"}}>
          Our site is free easy-to-use with  <br/> 
          which you can watch Movies and TV Shows for free!
          </p>               
      </div>

      <div style={{position:'absolute', top:'80%', left:'50%', transform:'translate( -50%)'}}>
        <Link to='/watch'><Button variant='outlined' style={{color:'gold', border:'2px solid gold', 
        background:'black', width:'200px', fontFamily:"'Cinzel Decorative', cursive", fontWeight:'bold'}}>Get started</Button></Link>
      </div>

      </div>
    )
  }
}
  
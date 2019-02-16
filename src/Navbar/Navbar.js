import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import { Link, withRouter, NavLink } from 'react-router-dom'


 class Navbar extends Component {

    state = {
        isTop: true,
      };
    
      componentDidMount() {
        document.addEventListener('scroll', () => {
          const isScroll = window.scrollY < 100;
          if (isScroll !== this.state.isTop) {
              this.setState({ isTop: isScroll })
          }
        });
      }  

  render() { 
    return (
      <div style={{margin:' 0 auto', display:"flex", justifyContent:'center',}} >
       <AppBar  style={{background:'black', zIndex:"500"}}>
       <Toolbar style={{display:'flex', justifyContent:'space-between', width:'1400px',margin:'0 auto'}}>
        <div style={{color:'white'}}>
        <img src='/assets/popcorn.png' alt='' style={{width:'100px', height:'50px'}}/>
        </div>   
        <div style={{display:'flex', }}>

        <Link to='/' 
        style={{color:"black", marginLeft:"15px", textDecoration: 'none',display:'flex',
        fontFamily:"'Cinzel Decorative', cursive", fontWeight:"bold", justifyContent:"center", alignItems:"center",
        borderRadius:'5px',padding:'10px', background:"gold"}}>HOME
        </Link>

        <NavLink to='/details' activeStyle={{ color:"gold", background:'linear-gradient(transparent, gold)',textShadow:"2px 2px 4px #000000"}}
        style={{color:"white",textShadow:"2px 2px 4px #000000", marginLeft:"15px", textDecoration: 'none',display:'flex',
        fontFamily:"'Cinzel Decorative', cursive", fontWeight:"bold", justifyContent:"center", alignItems:"center",
        borderRadius:'5px',padding:'10px', background:"linear-gradient(gold, transparent)"}}>
        GAME OF THRONES
        </NavLink>

        <NavLink to='/cast' activeStyle={{ color:"gold", background:'linear-gradient(transparent, gold)',textShadow:"2px 2px 4px #000000"}}
        style={{color:"white",textShadow:"2px 2px 4px #000000", marginLeft:"15px", textDecoration: 'none',display:'flex',
        fontFamily:"'Cinzel Decorative', cursive", fontWeight:"bold", justifyContent:"center", alignItems:"center",
        borderRadius:'5px',padding:'10px', background:"linear-gradient(gold, transparent)"}}>CAST & CREW
        </NavLink>

        <NavLink to='/watch' activeStyle={{ color:"gold", background:'linear-gradient(transparent, gold)',textShadow:"2px 2px 4px #000000"}}
        style={{color:"white",textShadow:"2px 2px 4px #000000", marginLeft:"15px", textDecoration: 'none',display:'flex',
        fontFamily:"'Cinzel Decorative', cursive", fontWeight:"bold", justifyContent:"center", alignItems:"center",
        borderRadius:'5px',padding:'10px', background:"linear-gradient(gold, transparent)"}}>WATCH ONLINE
        </NavLink>  

        <NavLink to='/movies' activeStyle={{ color:"gold", background:'linear-gradient(transparent, gold)',textShadow:"2px 2px 4px #000000"}}
        style={{color:"white",textShadow:"2px 2px 4px #000000", marginLeft:"15px", textDecoration: 'none',display:'flex',
        fontFamily:"'Cinzel Decorative', cursive", fontWeight:"bold", justifyContent:"center", alignItems:"center",
        borderRadius:'5px',padding:'10px', background:"linear-gradient(gold, transparent)"}}>MOVIES
        </NavLink>  

        </div>
       </Toolbar>   
      </AppBar>   
      </div>
    )
  }
}

export default withRouter(Navbar)
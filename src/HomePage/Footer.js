import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
       <div style={{background:'#252525', width:"100%", position:'relative',
       justifyContent:'space-around', color:"white", display:'flex'}}>
            <div style={{}}>
            <h3 style={{fontSize:'18px', color:"gold", fontWeight:"bold"}}>Popcorn Time</h3><br/>
            <li style={{listStyleType:"none"}}>News</li>
            <li style={{listStyleType:"none"}}>Updates</li>
            <li style={{listStyleType:"none"}}>Downloads</li>
            </div>

            <div>
            <h3 style={{fontSize:'18px', color:"gold", fontWeight:"bold"}}>Movies & TV Shows</h3><br/>
            <li style={{listStyleType:"none"}}>Popular on Popcorn Time</li>
            <li style={{listStyleType:"none"}}>New on Popcorn Time</li>
            <li style={{listStyleType:"none"}}>Top 5 Movies and TV Shows</li>
            </div>

            <div>
            <h3 style={{fontSize:'18px', color:"gold", fontWeight:"bold"}}>Movies & TV Shows</h3><br/>

            <li style={{listStyleType:"none", display:"flex", justifyContent:'center', alignItems:"center", margin:'15px'}}>
            <img alt='' src='/assets/whiteFace.png' style={{width:"30px", height:'30px', marginRight:"5px"}}/>Facebook 
            </li>

            <li style={{listStyleType:"none", display:"flex", justifyContent:'center', alignItems:"center", margin:'15px'}}>
            <img alt='' src='/assets/whiteYoutube.png' style={{width:"30px", height:'30px', marginRight:"5px"}}/>Youtube 
            </li>

            <li style={{listStyleType:"none", display:"flex", justifyContent:'center', alignItems:"center", margin:'15px'}}>
            <img alt='' src='/assets/whiteInstagram.png' style={{width:"30px", height:'30px', marginRight:"5px"}}/>Instagram 
            </li>

            <li style={{listStyleType:"none", display:"flex", justifyContent:'center', alignItems:"center", margin:'15px'}}>
            <img alt='' src='/assets/whiteGoogle.png' style={{width:"30px", height:'30px', marginRight:"5px"}}/>Google 
            </li>

            </div>

        </div>
        <div style={{background:'#333',  width:"100%", height:"50px", color:"white",
                    display:"flex", justifyContent:"center", alignItems:"center"}}>
        © 2015 Popcorn Time, PopcornTimes.ws | Visit our disclaimer for more information | Mail us at info@popcorntimes.ws | DMCA | Cookie Policy | TERMS OF SERVICE
        </div>   
      </div>
    )
  }
}

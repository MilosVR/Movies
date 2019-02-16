import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { connect } from 'react-redux'
import Footer from '../HomePage/Footer';
import {Link} from 'react-router-dom'

 class DetailedSeries extends Component {

  state = {
    episodeShow : false,
    trailerShow:false
  }

  toogleEpisodeShow = () => {
    this.setState({
      episodeShow : !this.state.episodeShow,
    })
  }
  toogleTrailerShow = () => {
    this.setState({
      trailerShow : true,
    })
  }
  toogleTrailerHide = () => {
    this.setState({
      trailerShow : false,
    })
  }
  render() {
    return (
      <div>
        <div style={{background:'url(/assets/GOT1.png)', width:'100%', height:'700px', display:'flex', justifyContent:"center", alignItems:"center"}}>
        <div style={{ color:"white",}}>

          {
            !this.state.trailerShow ?
          <div style={{ width:"1080", display:'flex', justifyContent:"center", alignItems:"center", background:"rgb(0,0,0,0.5)", borderRadius:"3px"}}>
          <img src='/assets/GOTdetail.jpg' alt='' style={{width:"220px", height:"350px", border:"3px solid white"}}/>
          <div>
          <h1 style={{paddingLeft:"20px",paddingRight:'20px',fontFamily:"'Cinzel Decorative', cursive", fontWeight:"bold"}}>
          GAME OF THRONES</h1>
          <p style={{paddingLeft:"20px",paddingRight:'20px',fontFamily:"'Cinzel Decorative', cursive", fontWeight:"bold"}}>
          Game of Thrones is a TV Show from 2011. The TV Show has 7 season. The TV Show has (up until now)<br/> 
            has been last updated on Thursday 01 January, 1970.</p> 
            <div>
              <Button variant='outlined' onClick={this.toogleTrailerShow}
              style={{border:'2px solid gold', color:'gold',marginLeft:"15px", marginTop:"50px", width:"200px", 
              fontSize:"15px",fontFamily:"'Cinzel Decorative', cursive", fontWeight:"bold"}}>
              Trailer</Button>
              <Button variant='outlined' 
              style={{border:'2px solid silver', color:'silver',marginLeft:"15px", marginTop:"50px", width:"220px", 
              fontSize:"15px",fontFamily:"'Cinzel Decorative', cursive", fontWeight:"bold",}}>
              More Information</Button>
            </div>
          </div>
          </div>
        : 
        <div style={{display:"flex", justifyContent:"center"}}>
        <div>
        <video width="960" controls>
        <source src="/Videos/trailer.mp4" type="video/mp4"/>
        </video>
        </div>
        <button onClick={this.toogleTrailerHide} 
        style={{width:"30px", height:"30px", marginLeft:"10px",borderRadius:'50%', background:"black", color:'white',
        border:'none', outline:'none', cursor:'pointer', fontWeight:'bold'}}>X</button>
        </div>
      }
        </div>
      </div>

      <div style={{width:"1080px",margin:"0 auto", marginTop:"70px"}}>
      <h1 style={{borderLeft:"5px solid gold",paddingLeft:"20px", fontFamily:"'Cinzel Decorative', cursive", fontWeight:"bold"}}>
      About <span style={{fontWeight:"normal"}}>Game Of Thrones</span></h1>
      <p style={{paddingTop:"30px", fontFamily:"'Cinzel Decorative', cursive",}}>
      Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and the icy horrors beyond.</p>
      </div>
      <div style={{display:'flex', justifyContent:"space-between", width:"1080px",margin:"0 auto",marginTop:"100px"}}>  
      <div >
        <span style={{borderLeft:"5px solid gold",paddingLeft:"20px", fontSize:"25px"}}>TV Show Information</span><br/><br/><br/>
        <div>
            <li style={{listStyleType:'none',margin:'5px'}}><span style={{fontWeight:"bold",fontSize:'17px'}}>Year of Release :</span> 2011</li>
            <li style={{listStyleType:'none',margin:'5px'}}><span style={{fontWeight:"bold",fontSize:'17px'}}>Country: </span> us</li>
            <li style={{listStyleType:'none',margin:'5px'}}><span style={{fontWeight:"bold",fontSize:'17px'}}>Last Updated : </span> Thursday 31 January, 2019</li>
            <li style={{listStyleType:'none',margin:'5px'}}><span style={{fontWeight:"bold",fontSize:'17px'}}>Minutes per Episode :</span> 55</li>
            <li style={{listStyleType:'none',margin:'5px'}}><span style={{fontWeight:"bold",fontSize:'17px'}}>Genre : </span> drama / fantasy / science-fiction</li>
            <li style={{listStyleType:'none',margin:'5px'}}><span style={{fontWeight:"bold",fontSize:'17px'}}>Rating : </span> 9,3/10</li>
            <li style={{listStyleType:'none',margin:'5px'}}><span style={{fontWeight:"bold",fontSize:'17px'}}>Season(s) : </span> 7</li>
            <li style={{listStyleType:'none',margin:'5px'}}><span style={{fontWeight:"bold",fontSize:'17px'}}>Network : </span> HBO</li>
            <li style={{listStyleType:'none',margin:'5px'}}><span style={{fontWeight:"bold",fontSize:'17px'}}>TV Show Status : </span>returning series</li>
            <li style={{listStyleType:'none',margin:'5px'}}><span style={{fontWeight:"bold",fontSize:'17px'}}>Releasing Episodes : </span>Sunday on 21:00</li>
            <li style={{listStyleType:'none',margin:'5px'}}><span style={{fontWeight:"bold",fontSize:'17px'}}>Likes : </span>86594</li>
        </div>
      </div>
      <div style={{width:'500px', minHeight:"600px"}}>
      <span style={{borderLeft:"5px solid gold",paddingLeft:"20px", fontSize:"25px"}}>Episode Overview</span><br/><br/><br/>
      <div style={{display:'flex', alignItems:'center'}}>
      <h3>Season: 1</h3> 
      <Button variant='contained' onClick={this.toogleEpisodeShow} 
      style={{marginLeft:"10px", width:"100px", height:'40px', background:'black', color:'gold'}}>
      {this.state.episodeShow ? "Hide" : "View"}</Button></div>
      <div>
        {this.state.episodeShow && this.props.gotDetailed.map((item)=>{
          return (
            <div key={item.episode} style={{display:'flex', alignItems:'center', margin:'15px'}}>
              <li style={{listStyleType:"none"}}>Episode {item.episode} - {item.title} 
            <Link to='/watch'><Button variant='contained' style={{width:'80px', height:'30px',marginLeft:"10px",
            background:'gold', color:"black"}}>Watch</Button></Link></li>
            </div>
          )
        })}
      </div>
      </div>
      </div>
      
      

      <Footer/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gotDetailed : state.episodeDetails.gotData
  }
}

export default connect(mapStateToProps)(DetailedSeries)
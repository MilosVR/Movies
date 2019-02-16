import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import './WatchOnline.css'

class WatchOnline extends Component {

  state = {
    isEpisodeShow:false,
    buttonShowHide:[false, false, false, false, false, false, false, false, false]
  }  

  episodeShow = (button, buttonIndex) => {
      this.setState({
          buttonShowHide: this.state.buttonShowHide.map((item, index)=> {
              return index === buttonIndex ? true : null
          })
      })
  }
  episodeHide = (button, buttonIndex) => {
    this.setState({
        buttonShowHide: this.state.buttonShowHide.map((item, index)=> {
            return index === buttonIndex ? false : null
        })
    })
  }
  render() {
    return (
      <div style={{ height:`${window.innerHeight}px`,width:"100%", overflow:"scroll", background:'url(/assets/watchBackground.jpg) center'}}>
        <h1 style={{textAlign:"center", color:"silver", paddingTop:'100px',fontFamily:"'Cinzel Decorative', cursive"}}>
        Game of thrones season 1</h1>
      <div style={{display:'flex', justifyContent:"center"}}>
      <div style={{color:"white", display:"block"}}>
      <div style={{background:"rgb(0,0,0,0.5)", textAlign:"center", padding:".5px"}}>
      <img alt='' src='/assets/nightKing.jpg' style={{ height:'400px', width:"250px"}}/>
      <div style={{margin:'-2px'}}>
      <h4 >Creators : <br/><span style={{fontWeight:'normal'}}>David Benioff, D.B. Weiss</span></h4>
      <h4 >Ratings : <br/><span style={{fontWeight:'normal'}}>
      <span style={{color:"gold"}}><span style={{color:"white"}}>IMDB</span> &#9733;</span>
      <span style={{color:"gold"}}>&#9733;</span>
      <span style={{color:"gold"}}>&#9733;</span>
      <span style={{color:"gold"}}>&#9733;</span>
      <span style={{color:"gold"}}>&#9733;</span>
      <span style={{color:"gold"}}>&#9733; 
      <span style={{color:"white", fontWeight:"bold"}}> 9.5</span>
      <span style={{color:"white"}}>/10</span></span>
      </span></h4>
      <h4>Awards :<br/><span style={{fontWeight:'normal'}}> Won 1 Golden Globe</span></h4>
      </div>
      </div>
      </div>    
      <div >
      {this.props.gotDetailed.map((item, index)=> {
              return (
                  <div key={item.episode} className='eachEpisodeWrapper'>
                  <div className="eachEpisode">
                  <span style={{fontSize:"16px", fontWeight:"bold", textAlign:"center", marginRight:"10px", 
                  zIndex:"200", fontFamily:"'Cinzel Decorative', cursive", fontWeight:"bold",}}>
                  <span style={{fontFamily:"Times New Roman, Times, serif"}}>EPISODE {item.episode}</span> - <span style={{color:"silver"}}>
                  {item.title}</span></span><br/>
                  <div className='buttonWatchWrapper'>
                  {!this.state.buttonShowHide[index]  
                  ? <Button variant='contained' onClick={()=>this.episodeShow(item, index)} className='buttonWatchShow'>Watch</Button>
                  : <Button variant='contained' onClick={()=>this.episodeHide(item, index)} className='buttonWatchHide'>Hide</Button>
                  }  
                  </div>
                  </div>  
                 {this.state.buttonShowHide[index] &&    
                    <div>
                       <video controls  width='600'>
                          <source src={item.video}></source>
                       </video>
                    </div>
                }  
                  </div>
              )
          })}
      </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state, action) => {
    return {
        gotDetailed : state.episodeDetails.gotData
    }
}

export default connect(mapStateToProps)(WatchOnline)
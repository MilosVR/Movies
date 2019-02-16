import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cast extends Component {
  render() {
    return (
      <div style={{background:'url(/assets/castBackground.jpg) center center fixed', width:'100%', height:"100vh",overflow: 'scroll'}}>
      <div style={{paddingTop:'100px', width:"960px", margin:'0 auto', color:"white", textAlign:"center", }}>
      <p style={{fontFamily:"'Cinzel Decorative', cursive", fontSize:"30px", fontWeight:'bolder', 
      background:'rgb(0,0,0,0.5)', borderRadius:"5px", padding:"5px", margin:"10px"}}>
      Game of Thrones Season 1 - Full Cast & Crew 
      </p>

        {this.props.cast.map((item)=> {
            return (
                <div key={item.name} style={{margin:'5px', border:"2px solid white", background:'rgb(255,255,255,0.5)',
                display:"flex", justifyContent:"center", alignItems:"center",color:"black", fontWeight:"bold", 
                }}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                   <img src={item.picture} alt='' style={{width:'200px', height:'200px', borderRight:'2px solid white'}}/> 
                </div>
                <div>
                <div style={{padding:'20px', textAlign:'justify'}}>
                <span style={{fontFamily:"'Cinzel Decorative', cursive", fontWeight:"bold", fontSize:"20px"}}>
                {item.name}</span><br/><br/>
                <span  style={{fontSize:"16px"}}>{item.career}</span>
                </div>
                </div>
                </div>
            )
        })}
      </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        cast : state.castGOT
    }
}

export default  connect(mapStateToProps)(Cast)
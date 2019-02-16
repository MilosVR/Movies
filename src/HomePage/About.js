import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div style={{width:'100%', height:`${window.innerHeight}px`, background:'silver', display:'flex',
      justifyContent:'center', alignItems:'center'}}>
        <div style={{width:'1280px', }}>
        <span style={{fontSize:'35px', fontWeight:'bold'}}>Google Chromecast!<br/><br/><br/></span>
        <span style={{fontSize:'20px'}}>
        It is also possible to use Popcorn Time on your Television!<br/>
        To do this, you can use a device called Google Chromecast.<br/>
        This is a small device with a lot of features.<br/>
        With the Chromecast, you can stream your monitor and sound of your computer, tablet or smartphone to your television. Even when you don't have a Smart TV!
        <br/><br/>
        It is very easy to use the Chromecast. You simply plug it into your HDMI port of your television.<br/>
        When you launch Popcorn Time, you'll have the option to stream the chosen Movie or TV Show to the Chromecast.<br/> 
        The Chromecast will display it on your television.
        Now, you can lie down relaxed on the couch and still watch Popcorn Time!<br/><br/>

        Besides Popcorn Time, you can use this device to watch YouTube, Netflix, Twitch and other media!<br/><br/>

        <ul style={{fontSize:'24px'}}>
        <span style={{fontWeight:"bold"}}>The advantages in a nutshell:</span>
            <li style={{fontSize:'16px',margin:'15px',}}>Fast installation by just pluggin it in.</li>
            <li style={{fontSize:'16px',margin:'15px',}}>Operate it with your computer, tablet or smartphone.</li>
            <li style={{fontSize:'16px',margin:'15px',}}>Enjoy the latest Movies and TV Shows on your TV with subtitles!</li>
        </ul>
        </span>  
        </div>
      </div>
    )
  }
}

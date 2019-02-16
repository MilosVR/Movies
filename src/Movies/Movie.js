import React, { Component } from 'react'
import { connect } from 'react-redux'
import { asyncMoviesById, asyncTrailersById,fetchingMovieCast } from '../actions/actions'
import './Movie.css'
import {Button} from '@material-ui/core'
import StarRatingComponent from 'react-star-rating-component';
import Swiper from 'react-id-swiper';
import Footer from '../HomePage/Footer'

class Movie extends Component {

    state = {
        genre : ''
    }

    componentDidMount(){
        this.props.asyncMoviesById(this.props.id)
        this.props.asyncTrailersById(this.props.id)
        this.props.fetchingMovieCast(this.props.id)
    }  

  render() {  
      
    let {movie} = this.props

    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }

    return (
      <div className="movieMainDiv" 
      style={{background:`url(http://image.tmdb.org/t/p/original/${movie.backdrop_path}) fixed`}}>

        <div className='movieTitle'>
        <div style={{width:"100%"}}>
        <div  style={{width:"100%", height:"30px", background:'rgb(255,255,255,0.5)'}}></div>
        <div  style={{width:"100%", height:"30px", background:'rgb(255,255,255,0.4)'}}></div>
        <div  style={{width:"100%", height:"30px", background:'rgb(255,255,255,0.3)'}}></div>    
        <h1 style={{marginLeft:"210px",fontFamily:"'Righteous', cursive"}}>{movie.title}</h1>
        </div>
        </div>

        <div className='movieHeaderWrapper' style={{display:'flex', justifyContent:"center"}}>
        
        <div className='movieOverviewWrapper'>

        <div className='imageMovieWrapper'>
        {movie.poster_path 
            ? <img  alt='' src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}/>
            : <img alt='' src='/assets/noimage.jpg' />
        }
        </div>

        <div className='movieOverview'>
        <h2>Overview : </h2><span style={{fontSize:"18px"}}>{movie.overview}</span></div><br/>
        
        <div style={{display:"flex"}}>
        {movie.genres && movie.genres.map((item)=> {
            return (
                <div key={item.id} >
                <Button style={{background:'dodgerBlue', color:"white", marginRight:"15px"}} 
                className="genreButton">{item.name}</Button>
                </div>
            )
        })}</div>

        <div style={{display:"flex", justifyContent:"space-between", marginTop:"50px"}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-center'}}>
            
        <div style={{color:"white", paddingRight:"50px", borderRight:"2px solid white"}}>
            <h3 style={{ color:"white", marginRight:"10px", textAlign:"center"}}>Vote </h3>
            <span>{movie.vote_count}</span></div>

            <div style={{paddingLeft:"50px"}}>
            <h3 style={{ color:"white", marginRight:"10px", textAlign:"center"}}>Rating </h3>
            <div style={{display:"flex"}}>
            <StarRatingComponent 
            name={"Ratings"}
            starCount={10} 
            starColor={"gold"} 
            emptyStarColor={"silver"} 
            value={Math.floor(this.props.movie.vote_average)}
            style={{fontSize:"24px !important"}}/>
            
            </div>
            </div> 

            </div>
        <div>
            <h3 style={{color:"white",marginRight:"50px", textAlign:"center"}}>Relase Date</h3>
            <div style={{color:"white",marginRight:"50px", textAlign:"center"}}>{movie.release_date}</div>
        </div>
        </div>

        </div>

        </div>

        <div style={{ margin:"0 auto",  display:"flex",background: "rgb(0,0,0, 0.8)", width:'75%',
        justifyContent:"center", color:"white", alignItems:"center"}}>

        <div style={{ width:"342px", background:"rgb(255,255,255,0.3)", height:"165px", display:'flex', justifyContent:"center", alignItems:"center"}}>
        <div>
            <span>Movie URL :</span><br/>    
            <span style={{fontWeight:"bold"}}>{movie.homepage?movie.homepage:"No URL for this Movie"}</span>
        </div>
        </div>

        <div style={{margin:'0 auto', textAlign:'center'}}>
            <div style={{paddingTop:"20px"}}>
            Scroll down and Watch or see Trailer of your favorite movie
            </div><br/>
            <div><img alt='' src='/assets/downArrow1.gif' style={{width:"100px", height:"100px"}}/></div>
        </div>

        <div style={{fontWeight:"bold", marginRight:'30px'}}>
        Budget : {movie.budget?<span style={{fontWeight:"bold", color:"green"}}>{movie.budget} $</span>:"No Information"}<br/><br/>
        Revenue : {movie.revenue?<span style={{fontWeight:"bold", color:"gold"}}>{movie.revenue} $</span>:"No Information"}
        </div>
        
        </div>


        <div style={{background:'url(/assets/trailerBackground1.jpg) center center',backgroundSize:"100% 800px", 
        marginTop:"50px", position:"relative"}}>
        <div className='trailerFont'>Trailer for this movie</div>   
        <div style={{display:'grid', gridTemplateColumns:'auto auto auto', justifyContent:"center", 
        alignItems:"center", gridGap:'50px'}}>
       
        {this.props.trailer.results&& this.props.trailer.results.slice(0,3).map((item)=> {
            return (
            

                    <div key={item.id} style={{paddingTop:"150px", paddingBottom:'70px'}}>
                        
                        {item.key ? 
                        <div>
                        <div style={{color:'white', textAlign:'center', fontSize:"20px", fontWeight:"bold", 
                        padding:"10px", background:"rgb(0,0,0,0.5)", width:"430px", height:"30px", 
                        lineHeight:'30px'}}>
                        {item.name}</div>
                        <iframe src={'https://www.youtube.com/embed/'+item.key} alt='' allowFullScreen 
                        style={{width:"450px", height:'300px', border:'none', borderRadius:"3px"}}/>
                        </div>

                        : <div>
                        <div style={{color:'white', textAlign:'center', fontSize:"20px", fontWeight:"bold", 
                        padding:"10px", background:"rgb(0,0,0,0.5)", width:"430px", height:"30px", 
                        lineHeight:'30px'}}>
                        {item.name}</div>
                        dasdasdas
                        </div>
                        }
                    </div>
            )
        })
        }
        </div>
        </div>



        <div style={{color:"white", background:'url(/assets/castBrick.jpg) center center',backgroundSize:"100% 100%"}}>
        <div className='castMovieCrew'></div>
        <div className='castMovieCrewFont'>Full Cast & Crew for this movie</div>
        
        <Swiper {...params} shouldSwiperUpdate >
        {this.props.cast.cast && this.props.cast.cast.slice(0,10).map((item => {
            return (
                <div key={item.cast_id} 
                style={{width:"185px", background:"rgb(0,0,0,0.5)", textAlign:"center", marginTop:"50px",borderRadius:"3px"}}>
                <span style={{fontSize:"20px"}}>{item.character}</span><br/>
                {item.profile_path 
                ? <img  alt='' src={`http://image.tmdb.org/t/p/w185/${item.profile_path}`} />
                : <img alt='' src='/assets/noimage.jpg' style={{width:"100px", height:"50px"}}/>}
                </div>
            )
        })
        )}</Swiper>
        <div className='castMovieCrewShape'></div>    
        </div>
        
       
        <div style={{color:"white", width:"100%", margin:"0 auto",overflow:'hidden', background:'linear-gradient(black, silver, black)'}}>

        <div style={{display:"flex", justifyContent:"space-between", width:'100%', alignItems:"center", height:'200px'}}>
        <div style={{textAlign:"center", marginLeft:"30px",color:"black"}}> 
        <h4 style={{ fontWeight:"bold", fontSize:"24px",fontFamily:"'Righteous', cursive"}}>Sponsors for this movie:</h4>
        
        </div>

        
        <div style={{display:'flex', justifyContent:"center", alignItems:"center", }}>
        {movie.production_companies && movie.production_companies.slice(0,4).map((item)=> {
            return(
            <div key={item.id} 
            style={{color:"white", width:"200px", textAlign:"center", margin:"5px",height:'50px',
            display:'flex', justifyContent:"center", borderRadius:"5px", padding:"30px"}}>
            {item.logo_path 
            ? (
                <img  alt='' src={`http://image.tmdb.org/t/p/w185/${item.logo_path}`} style={{height:"50px"}}/> 
              )

            : null
            }
            </div>
            )
        })}</div>  
        </div>
        </div>
       <Footer/>


      </div>
    )
  }
}

const actions = {
    asyncMoviesById,
    asyncTrailersById,
    fetchingMovieCast
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id
    return {
       id,
       movie : state.movie,
       trailer : state.trailer,
       cast : state.cast
    }
}

export default connect(mapStateToProps, actions)(Movie)


/////Foooter

{/*<div style={{color:"white", width:"1210px", margin:"0 auto",overflow:'hidden'}}>

        <div style={{display:"flex", justifyContent:"space-between", width:'100%', background:"white"}}>
        <div style={{textAlign:"center"}}> <h4 style={{marginTop:"15px", fontWeight:"bold"}}>Our Sponsors :</h4>
        <img alt='' src='/assets/sponsor.gif' style={{width:'300px', height:"150px"}}/>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto", justifyContent:"center", alignItems:"center"}}>
        {movie.production_companies && movie.production_companies.map((item)=> {
            return(
            <div key={item.id} 
            style={{color:"white", width:"200px", textAlign:"center", margin:"5px", background:'inherit',height:'170px',
            display:'flex', justifyContent:"center", borderRadius:"5px"}}>
            {item.logo_path 
            ? (<div >
                <h3 style={{background:'rgb(0,0,0,0.5)',borderRadius:'3px',padding:"5px"}}>{item.name}</h3>
                <img  alt='' src={`http://image.tmdb.org/t/p/w92/${item.logo_path}`}/> 
              </div>)

            : (<div >
                <h3 style={{background:'rgb(0,0,0,0.5)',borderRadius:'3px',padding:"5px"}}>{item.name}</h3>
                <img src='/assets/noimage.jpg' alt=''  style={{width:"92px", height:"50px"}}/>
              </div>)
            }
            </div>
            )
        })}</div>  
        </div>
        </div>*/}
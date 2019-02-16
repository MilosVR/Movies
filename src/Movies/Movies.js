import React, { Component } from 'react'
import { connect } from 'react-redux'
import { asyncFetchMovies, asyncSearchMovies, asyncFetchPopularMovies, asyncFetchUpcomingMovies,asyncFetchLatestMovies } from '../actions/actions'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import './Movies.css'
import {Button} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';


class Movies extends Component {

    state = {
        query:''
    }

    componentDidMount(){
        this.props.asyncFetchMovies()
    }
    formSubmit = e => {
        e.preventDefault()
        this.props.asyncSearchMovies(this.state.query)
    }
    handleChange = e => {
        this.setState({
            query : e.target.value,
        })
    }
  render() {
    return (
      <div style={{paddingTop:"100px", height:'100vh', overflow:'scroll', width:"100%", background:"url(/assets/deadpool.jpg)center center fixed "}}>
        <div style={{display:"flex", justifyContent:'center', width:"1400px", alignItems:"center", margin:"0 auto",
        marginTop:'50px',}}>

        <div style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
            <div>
                <label style={{fontSize:"40px", color:"white", fontFamily:"Righteous, cursive"}}>Search </label>
            </div>

            <div>
            <form onSubmit={this.formSubmit} >
            <input alt='' value={this.state.query} placeholder='Find your favorite movie'
            onChange={this.handleChange} className='searchMovieInput'/>
            </form>
            </div>

        </div>

        </div>

        <div style={{display:"flex", justifyContent:'center', width:"100%", alignItems:"center", margin:"0 auto",
        marginTop:'50px', marginBottom:'50px', background:"rgb(0,0,0,0.5)"}}>
            <FilterButton variant='contained' onClick={this.props.asyncFetchMovies} >Top Rated</FilterButton> 
            <LatestButton variant='contained' onClick={this.props.asyncFetchLatestMovies} >Latest</LatestButton> 
            <PopularButton variant='contained' onClick={this.props.asyncFetchPopularMovies} >Popular</PopularButton> 
            <UpcomingButton variant='contained' onClick={this.props.asyncFetchUpcomingMovies}>Upcoming</UpcomingButton> 
        </div>

        <div style={{width:"1400px", display:'grid', gridTemplateColumns:"auto auto auto auto", margin:"0 auto", gridGap:'50px',justifyContent:"center"}}>
        {this.props.movie.results && this.props.movie.results.map((item)=> {
            return (
                <div key={item.id} className='movieItemWrapper'>
                
                <div className='imageMoviesWrapper'>
                
                {item.poster_path ?
                <img  alt='' src={`http://image.tmdb.org/t/p/w300/${item.poster_path}`} style={{objectFit: "contain"}} />
                : <img src='/assets/noimage.jpg' style={{width:"300px", height:"400px"}}/>}

                <div className='imagePoster'></div>
                <div className='innerBorder'></div>
                <div className='hoverMovieDetails'>
                   <div>
                   <span style={{fontSize:"20px", color:'wheat',fontWeight:"bold"}}>{item.title}</span><br/><br/>
                   Popuarity : {item.popularity}<br/>
                   Vote : {item.vote_average}<br/>
                   <Button variant='contained' color='primary' 
                   style={{marginTop:"20px", background:"wheat", color:"black"}} 
                   onClick={()=>this.props.history.push('/movie/'+item.id)} 
                   >More</Button>
                   </div>
                   
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

const actions = {
    asyncFetchMovies,
    asyncSearchMovies,
    asyncFetchPopularMovies,
    asyncFetchUpcomingMovies,
    asyncFetchLatestMovies
}

const mapStateToProps = (state) => {
    return {
        movie : state.movie
    }
}

export default compose( 
    connect(mapStateToProps, actions),
    reduxForm({form : "searchMovie"})
    )(Movies)

    const FilterButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, gold 30%, coral 90%)',
          borderRadius: 3,
          border: 0,
          color: 'black',
          height: 40,
          width:100,
          margin:20,
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);    

      const LatestButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, mediumPurple 30%, blue 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 40,
          width:100,
          margin:20,
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button); 

      const UpcomingButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #aa00ff, 30%, #ea80fc 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 40,
          width:100,
          margin:20,
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button); 

      const PopularButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, SeaGreen 30%, PaleGreen 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 40,
          width:100,
          margin:20,
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button); 
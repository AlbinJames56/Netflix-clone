import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from 'axios'
import {API_KEY, baseUrl, imageUrl} from '../../constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId]=useState('')
  
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      //console.log(response.data)
      setMovies(response.data.results)
    })
    .catch(err=>{
      console.log('Error', err)
      //alert("Network Error")
    })
}, [ ])
const opts={
  height:'490',
  width:'100%',
  playerVars:{
    autoplay:1,
  }
};
const handleMovieTrailer=(id)=>{
 console.log(id);
  axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    console.log(response.data);
    if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
    }else{
      console.log("Trailer not available")
    }
  })

}
  return (
    <div className='row'> 
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
               <img onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            
          )}
           
            
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key } />}
            
    </div>
  )
}

export default RowPost
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import Header from "../components/common/header"
import Mlist from "../components/movies/Mlist"
import Slist from "../components/movies/Slist"
import Moviedl from "../components/movies/Moviedl";

function Details({movies}){
    const [movie,setMovie]=useState({});
    const params=useParams();
    useEffect( ()=>{
        console.log(params)
        const getMovie = async()=>{
            const result =await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b24188948d9a603274c706ed3a994d8f`)
            const data= await result.json();
            setMovie(data);
            console.log(movie)
        }
        getMovie();
    },[params.id])

    return <>
   <Header/>
  
   <Moviedl movie={movie}/>
   <h1 className='filme'>Films que vous pourriez aimmer:</h1>
   
    <Slist movies={movies}/>
    {/* <Mlist movies={movies}/> */}
    </>
}
export default Details

function Aheader({movies, ranmovie}){
    console.log(movies)
    //const ranmovie=movies[Math.floor(Math.random()*movies.length)];
    return(<div className="theone" >
    <h1>{ranmovie.title}</h1> 
    <p>{ranmovie.overview}</p>
    
    </div>
)
}

export default Aheader
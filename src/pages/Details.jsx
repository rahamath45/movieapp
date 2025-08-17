import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { API_KEY, REST_HOST_API } from "../backend";
 export default function  Details(){
   const {id} = useParams();
   const [m,setM] = useState(null);

   useEffect(()=>{
    fetch( `${REST_HOST_API}/${API_KEY}&i=${id}&plot=full`,
                {method:"GET"})
                .then((response)=> response.json())
                 .then((data)=>{
                        setM(data)
                 })
              .catch((err)=> console.log(err));
   },[id]);

       if(!m) return <h3 style={{textAlign:"center"}}>Loading.......</h3>
    return(
         <div className="details">
           <KeyboardBackspaceIcon></KeyboardBackspaceIcon>  <Link to="/" className="back"> Back</Link>
          <div className="left"> <h1>{m.Title}</h1>
          <img src={m.Poster!=="N/A"?m.Poster:""} /></div>
         <div className="right"> 
              <p><b>Year :</b>{m.Year}</p>
               <p><b>Runtime :</b>{m.Runtime}</p>
                <p><b>Genre :</b>{m.Genre}</p>
                  <p><b>Language :</b>{m.Language}</p>
           <p>{m.Plot}</p>
           <p><b>Actors :</b>{m.Actors}</p>
           <p><b>IMDB :</b>{m.imdbRating}</p></div>
         </div>
         
         
    ) 
}
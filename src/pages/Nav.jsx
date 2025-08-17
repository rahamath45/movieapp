import { useNavigate } from "react-router-dom"
import LiveTvIcon from '@mui/icons-material/LiveTv';

 export default function Nav(){
    const navigate = useNavigate();
    return(
         <nav className='app'>
                <LiveTvIcon></LiveTvIcon>
                   <div onClick={()=>navigate("/")} className='link'>OMDb Movie
                   </div>
              </nav>
    )
 }
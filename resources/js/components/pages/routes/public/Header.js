
import icon from '../../../../../Images/lp.jpg'
import search from '../../../../../Images/search.png'
import StudentForm from './RegisterationForm';
import { Link } from "react-router-dom";



const header = () => {
   const styleInput = {
      border:'1px gray solid',
      borderRadius:'.25rem',
      marginRight:'3px',
      overflow:'hidden'
   }
   const styleLink = {
      textDecoration:'none',
      color:'inherit'
   }
   
   return (
      <div id="app" style={{position:'sticky'}}>
         <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
               <div className="container">
                  <div className="navbar-brand img-circle ms-auto ">
                     <img className="img-circle mr-2" width={"25px"} height={'25px'} src={icon}/>
                     <a className="navbar-brand" >
                        LP DISCUSSION FORUM
                     </a>
                  </div>
                  
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                     <span className="navbar-toggler-icon">
                           <img src={icon}/>
                     </span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav me-auto">
                           <li className="nav-item" role="button">
                           <Link to='/' style={styleLink}>Home</Link> 
                           </li>
                     </ul>
                     
                     <ul className="navbar-nav me-auto">
                           <li className="nav-item" role="button">
                           <Link to={"/Download"}  style={styleLink} >Download</Link> 
                           </li>
                     </ul>
                     <ul className="navbar-nav ms-auto">
                           
                           <li className="nav-item" role="button">
                              <Link to='/RegisterUser' style={styleLink}>Register</Link>                            
                           </li>
                     </ul>
                     <ul className="navbar-nav ms-auto">
                           <li className="nav-item" role="button">
                              <Link to={'/Login'} style={styleLink} className="active">LogIn</Link>
                           </li>
                     </ul>
                     <ul className="navbar-nav ms-auto">
                           <li className="nav-item bg-success " style={styleInput}>
                              <input type="search" style={{outline:'none'}} className="mr-2" name="search" id="search" />
                              <img src={search} role='button'/>
                           </li>
                     </ul>
                     
                  </div>
               </div>
         </nav>            
      </div>
   );
}

export default header;
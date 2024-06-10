import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import swal from "sweetalert";
import { useAuth } from '../../../AuthProvider';

const LogIn = () => {
   const [Email, setEmail] = useState('');
   const [Password, setPassword] = useState('');
   const {Login} = useAuth();
   const navigate = useNavigate();

   const onSubmit = (e) =>{
      e.preventDefault();
      if(!Email||!Password)
         return
      
      axios.post("api/Login1",{Email,Password}).then((res)=>{
         if(res.data.status === 200){
            swal({
                  title:'success',
                  text:res.data.message,
                  icon:'success',
                  button:'OK!'
            });
            const {data,token} = res.data;
            Login({data,token});
            navigate(`/UserPanel`);
            
         }
         else if(res.data.status === 401){
            swal({
                  title:'error',
                  text:res.data.message,
                  icon:'error',
                  button:'OK!'
            });
         }
      }).catch((error)=>{
         console.error(error);
      });

      setEmail('');
      setPassword('');
   }
   
   return (  
      <div className="container pt-8">
         <div className="row justify-content-center">
            <div className="col-md-6">
               <div className="card">
                  <div className="card-header d-flex">
                        <h1>LogIn</h1>
                        <Link to="/" className="btn btn-primary ms-auto btn-xs p-3"> Back </Link>
                  </div>

                  <div className="card-body">
                        <form method="POST" onSubmit={(e)=>onSubmit(e)} action="">
                           
                           <div className="row mb-3">
                              <label htmlFor="email" 
                              className="col-md-4 col-form-label text-md-end">Email Address or Student Number</label>

                              <div className="col-md-6">
                                    <input id="email" type="email" 
                                    className="form-control" 
                                    name="Email"  onChange={(e)=>setEmail(e.target.value)} 
                                    value={Email} required autoComplete="email" autoFocus/>
                              
                                    <span className="invalid-feedback" role="alert">
                                       <strong></strong>
                                    </span>
                                 
                              </div>
                           </div>

                           <div className="row mb-3">
                              <label htmlFor="password" 
                              className="col-md-4 col-form-label text-md-end">Password</label>

                              <div className="col-md-6">
                                    <input id="password" type="password" 
                                    className="form-control" 
                                    name="password" onChange={(e)=>setPassword(e.target.value)} 
                                    value={Password} required autoComplete="current-password"/>                                        
                                    <span className="invalid-feedback" role="alert">
                                       <strong></strong>
                                    </span>                                    
                              </div>
                           </div>

                           <div className="row mb-3">
                              <div className="col-md-6 offset-md-4">
                                    <div className="form-check">
                                       <input className="form-check-input" type="checkbox" 
                                       name="remember" id="remember"/>

                                       <label className="form-check-label" htmlFor="remember">
                                          Remember Me
                                       </label>
                                    </div>
                              </div>
                           </div>

                           <div className="row mb-0">
                              <div className="col-md-8 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                       Login
                                    </button>                                        
                                    <a className="btn btn-link" href="{{ route('password.request') }}">
                                       Forgot Your Password
                                    </a>                                        
                              </div>
                           </div>
                        </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default LogIn;

import { useState,createContext,useContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
   const [token, setToken] = useState();
   const [user,setUser] = useState({})

   const handleLogin = ({data,token})=>{
      setUser(data);
      setToken(token);
   }
   const handleLogout = ()=>{
      setToken(null);
   }
   
   const value={
      token,
      user,
      Login:handleLogin,
      Logout:handleLogout,
   }
   return ( 
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   );
}
export const useAuth = ()=>{
   return useContext(AuthContext);
}
 
export default AuthProvider;

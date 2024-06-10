import React from 'react';
import LogIn from './pages/routes/public/LogIn';
import UserPanel from './pages/routes/private/UserPanel';
import ConversationWindow from './pages/routes/private/ConversationWindow';
import { BrowserRouter as Router,Routes,Route,Outlet} from 'react-router-dom';
import RegisterationForm from "./pages/routes/public/RegisterationForm";
import Download from './pages/routes/public/Download';
import Header from './pages/routes/public/Header'
import Home from './pages/routes/public/Home';
import AuthProvider,{useAuth} from './AuthProvider';
import ProtectedRoutes from './ProtectedRoutes';
import Groups from './pages/routes/private/Groups';


function App() {
    return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route element={<Layout/>}>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/RegisterUser' element={<RegisterationForm/>}/>
              <Route exact path='/Download' element={<Download/>}/>
              <Route exact path='/Login' element={<LogIn/>}/>
              <Route exact path='/LecturerForm' element={<RegisterationForm/>}/>

              <Route exact path='/UserPanel' element={<ProtectedRoutes><UserPanel/></ProtectedRoutes>}>
                  <Route exact path='/UserPanel/Conversation/:groupId' element={<ConversationWindow/>}/>
                  <Route exact path='/UserPanel/Groups' element={<Groups/>}/>
              </Route>
            </Route>
          </Routes>
        </Router> 
      </AuthProvider>            
    );
}

const Layout = () =>{
  return (
    <>
      <Header/>
      <Outlet/>
    </>

  )
}

export default App;

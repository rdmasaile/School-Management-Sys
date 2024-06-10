import '../../../../../css/Admin.css';
import userIcon from '../../../../../Images/user50px.png'
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


// import { useParams } from 'react-router-dom';
import { useAuth } from '../../../AuthProvider';

const UserPanel = () => {
   const [state, setState] = useState('idle');
   const {user} = useAuth();
   const [charts, setCharts] = useState([]);
   const navigate = useNavigate();
   const [activeChartId, setActiveChartId] = useState();

   const VeiwConversation = (groupId) =>{
      setActiveChartId(groupId);
      navigate(`/UserPanel/Conversation/${groupId}`);
   }
   const getData = async ()=>{

      await axios.get(`/api/GetMemberGroups/${user.id}`).then((res)=>{

         setCharts(res.data);

         // res.data.forEach(group => {
         //     setCharts([...charts,{
         //             name:group.GroupName,
         //             get:()=>{
         //                 navigate(`/UserPanel/${userId}/Convesation/${group.id}`);
         //             }
         //         }
         //     ])
         // }); 

         console.log(charts);                     
         
      }).catch((e)=>{
         setState('error')
         console.log(e);
      });
      setState('Loading')
   }
   useEffect(()=>{
      if(state === 'idle')
         getData();
   },[charts,activeChartId])
   
   return ( 
      <>
      <div id="sidebar" className="active">
         <div className="sidebar-wrapper active ps ps--active-y">
            <div className="sidebar-header">
               <div className="justify-content-center">
                  <div className="logo">
                        <img src={userIcon} alt='Lp Logo'/>
                  </div> 

                  {(state === 'loaded')&&(<div className="info">
                        <div className="sidebar-info">Name: {user.Name}</div>                  
                        <div className="sidebar-info">ID #: {user.IdNumber}</div>   
                  </div> )}             
               </div>
            </div>
            <div className="sidebar-menu">
               <ul className="menu">
                  <div className="sidebar-title">Menu</div>
                  <div className='sidebar-link'><Link to={`/UserPanel/Groups`}>All Groups</Link></div>
                  {
                     (
                        charts.map(chart=>{
                           return (
                              <li onClick={()=>VeiwConversation(chart.GroupId)} key={chart.GroupId} className="sidebar-item">
                                 <div className="sidebar-link">                                
                                    <span role="button">{chart.GroupName}</span >
                                 </div>
                              </li>
                           )
                        })
                     )
                  }                          
                  
               </ul>
            </div>
            <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
            <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
               <div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div>
            </div>
            <div className="ps__rail-y" style={{top: "0px", height: "969px", right: "0px"}}>
               <div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "568px"}}></div>
            </div>
         </div>
      </div>

      
      <div className="d-flex">
         <div className="space">

         </div>
         <div className="me-auto">                        
            <Outlet/>                        
         </div>
      </div>       
   
      </>
   );
}
 
export default UserPanel;
import axios from 'axios';
import { set } from 'lodash';
import { useEffect,useState } from 'react';
import profile from '../../../../../Images/user50px.png'

const Groups = () => {
   const [groups, setGroups] = useState([]);
   const [state, setState] = useState('idle');
   const getData = async ()=>{
      setState('Loading')
      const res = await axios.get('http://localhost:8000/api/Group').catch((error)=>console.error(error));
      setState('Loaded');
      setGroups(await res.data);
   }
   useEffect(()=>{
      if(state === 'idle')
         getData()
   })
   return ( 
         <>
            {(state === "Loaded")&&
               groups.map(group=>{
                  return (<div key={group.id}>
                     <Group GroupName={group.GroupName}/>
                  </div>)
               })
            }
         </>
    );
}

const Group = ({GroupName}) => {

   return ( 
      <>
         <div className="container" width={'50%'}>
            <div className='row col-12'>
            <img src={profile} alt="profile" width='100vw' height="100vh"/>
            <figcaption className=''>
               {GroupName}
            </figcaption>
            <div className='d-flex justify-content-center  mb-2 '>
               <button className={"btn btn-primary col-6 "}>Members</button>
               <button className={"btn btn-primary col-6"}>Invite</button>
            </div>
            <div className='d-flex justify-content-center  mb-2 '>
               <button className={"btn btn-primary col-6"}>Join</button>
               <button className={"btn btn-primary col-6"}>Remove</button>
            </div>
            </div>
         </div>
      </>
    );
}
 
 
export default Groups;
import '../../../../../css/discussionView.css';
import icon from '../../../../../Images/user50px.png'
import camera from '../../../../../Images/icons8_camera_24px.png'
import attach from '../../../../../Images/icons8_attach_50px.png'
import emoji from '../../../../../Images/icons8_happy_24px.png'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { useState, useEffect} from 'react';
import { useAuth } from '../../../AuthProvider';

const ConversationWindow = () => {
   const [state, setState] = useState('idle');
   const [message, setMessage] = useState('');
   const [conversation,setConversation] =useState([]);
   const {groupId} = useParams()
   const {user} = useAuth();

   const getData = async ()=>{
      setState('Loading');
      await axios.get(`/api/GetConversation/${user.id}/${groupId}`).then((res)=>{
         setConversation(res.data);                     
         setState('Loaded');

      }).catch((e)=>{
         setState('error')
         console.log(e);
      });                               
   }
   
   useEffect(() => {
      if(state === 'idle')
         getData();
   }, [message,groupId]);

   const send = async () =>{
      if (message.trim() === "")
         return

      let conv = {
         From : parseInt(user.id),
         To: parseInt(groupId),
         Message: message,
         Type: 'group',
      }
      console.log(conv);
      try {
         await axios.post('/api/Conversation',conv);
         
      } catch (error) {
         console.error(error);
      }
      setState('idle');
      setMessage('');
   }

   let color = null;
   let position = null;
   let a = [4,2,3,2,2,2,2,2,2,3];
   let b=0;

   return ( 
      <section className="container">                 
         <div className="onlinebar d-flex ">                  
               {
                  a.map((ele) => { return  (<div key={b++} className='onlineImg col-1.5'>
                        <img src={icon} alt="1" />
                        <small></small>
                     </div>);
                  })
               }
               
               <button type="button" className="btn btn-primary ms-auto" >Veiw More...</button>
         </div>
         <div className='messageWindow'>
            <div name="conversation" id="conversation">
               {
                  (state === 'Loading')?(<div>{state}...</div>):(
            
                     conversation.map((conv)=>{
                        if(conv.From === parseInt(user.id)){
                              color = "--bs-primary";
                              position = "ms-auto";
                        }else{
                              color = '#6c757d';
                              position = "me-auto";
                        }
                        return <Message key={b++} color={color} position={position} message={conv.Message}/>
                     })
                  )
               }
            </div>
            <div className='inputData'>
               <img role="button" src={emoji}/>
               <input type="text" name="" id="message" value={message} onChange={(e)=>setMessage(e.target.value)} />
               <img role="button" src={attach}/>
               <img role="button" src={camera}/>
               <button onClick={send} type="submit" className="btn btn-primary btn-md"> Send </button>
            </div>
         </div>
         
      </section>
   );
}


const Message = ({message,position,color}) => {
   return ( 
      <div className={position} style={{backgroundColor:color}}>
         <img src="../../../../../Images/user50px.png" alt="face" />
         <p>{message}</p>
      </div>
     );
}
 

export default ConversationWindow;
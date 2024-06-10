import "../../../../../css/sidebar.css";
//import Button from "../../Button";
import search from '../../../../../Images/search.png'
import ConversationWindow from "./ConversationWindow";
import { useEffect,useState } from "react";
import axios from "axios";

const SideBar = (props) => {
    const [state, setState] = useState('idle');
    const [charts, setcharts] = useState([]);
    const [activeChart,setActiveChart] = useState('');
    const [conversation, setConversation] = useState([]);
    
    

    const onClick = async (e)=>{
        const group = charts.find(d=>(d.GroupName === e.target.name));
        setActiveChart(group);
        //console.log(document.getElementById(e.target.id).innerHTML) //style.backgroundColor = 'green';
        //await axios.get(`/api/Conversation/search{group}`)
        axios.get(`/api/GetConversation/${props.userId}/${group.id}`).then((res)=>{
            console.log(res);

            if(res.data === "")
                props.setDiscussionWindow(<div className='container'><p className="justify-content-center">Your not a member</p></div>)

            setConversation(res.data);
            
            props.setDiscussionWindow(
                <ConversationWindow conversation={conversation} activeChart={activeChart} userId={props.userId} />
            )

        }).catch((error)=>{
            console.error(error);
        })        
    }
   
    useEffect( async ()=>{
        if(state === 'idle'){
            const response = await axios.get('/api/Group');
            console.log(response.data);
            setcharts(response.data);
        }
    },[state]);
    return ( 
        <div className="sidebar container ">
            <div className="col-m-12 ">
                <div className="row justify-content-center">
                    
                        <form action="" onSubmit={(e)=>onSubmit(e)}>
                            <div className="input-group bg-success">
                                <input type="search" className="form-control col-12" name="search" id="search" />
                                <div className="input-group-btn">
                                    <button className="btn btn-default" type="submit">
                                        <img src={search} width={'25px'} height='25px' role='button'/>
                                    </button>
                                </div>                            
                            </div>
                        </form>
                    
                    <div className="chats row">
                        {
                            charts.map((group)=>{return (<button key={group.GroupName} name={group.GroupName} 
                                id={group.GroupName}
                                onClick={(e)=>onClick(e)} className="mb-2"
                                role="button br-1">{group.GroupName}</button>
                                )})
                        }
                    </div>   
                </div>
                <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                    <div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div>
                </div>
                <div className="ps__rail-y" style={{top: "0px", height: "5rem", right: "0px"}}>
                    <div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "568px"}}></div>
                </div>
            </div>
        </div>
     );
}
 
export default SideBar;
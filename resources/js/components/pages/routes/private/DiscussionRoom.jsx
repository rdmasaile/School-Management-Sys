import search from "./Images/search.png";

const DiscussionRoom = () => {
    let data = [{GroupName:'CSE'},{GroupName:'ME'},{GroupName:'OAM'},{GroupName:'EE'}]
    const onClick = (name)=>{

    }
    return ( 
        <div className="container bg-primay">
            <div className="col-12">
                
                <div className="d-flex">
                    
                    <div className="col-2 bg-dark">
                        <div className="bg-gray">
                            <h1>Chats</h1>
                        </div>
                        <div className="input-group bg-success">
                            <input type="search" className="form-control col-12" name="search" id="search" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <img src={search} width={'25px'} height='25px' role='button'/>
                                </button>
                            </div>                            
                        </div>
            
                        <div className="row justify-content-center">
                            {
                                data.map((group)=>{return (<button key={group.GroupName} name={group.GroupName} 
                                    onClick={(e)=>onClick(e)} className="btn-default col-10 mb-2"
                                    role="button br-1">{group.GroupName}</button>
                                    )})
                            }   
                        </div> 
                    </div> 
                    <div className="container">
                        <h1 className="col-12">fjaoifjafua</h1>
                    </div> 
                                       
                </div> 
            </div>
        </div>
     );
}
 
export default DiscussionRoom;
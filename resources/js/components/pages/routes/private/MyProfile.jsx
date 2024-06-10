import Button from "../Button";
import image from '../../Images/reatile.jpg';

const MyProfile = () => {
    const onClick = (name)=>{
        console.log(name)
    }
    return ( 
        <div className="container">  
            <div className="row justify-content-center">
                <div className="col-3.5 p-3" style={{borderRadius:"50%",overflow:"hidden"}}>
                    <img src={image} className="rouded-circle" height={"150px"}/>
                </div>
                <div className="d-flex p-2 justify-content-center" >
                    <Button type="button" className='btn btn-primary' onClick={onClick} value='Upload'/>
                    <Button type="button" className='btn btn-danger' onClick={onClick} value='Remove'/>
                </div>
            </div>
        </div>
    );
}
 
export default MyProfile;

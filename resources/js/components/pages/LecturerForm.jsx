import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const LectureForm = () => {
    const [LectId, setLectId] = useState("");
    const [LectName, setLectName] = useState("");
    const [LectEmail, setLectEmail] = useState("");
    const [LectPhoneNumber, setLectPhoneNumber] = useState('');
    const [LectPassword, setLectPassword] = useState("");
    const [ConfPassword, setConfPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const lecturerDetails = {
            LectId:LectId,
            LectName:LectName,            
            LectEmail:LectEmail,
            LectPhoneNumber:LectPhoneNumber,
            LectPassword:LectPassword
        };
        await axios.post('/api/Lecturer', lecturerDetails).then((response)=>{
            console.log(response.data);
        })
    }

    return ( 
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header d-flex">
                            <h1>Register Lecturer</h1>
                            <Link to="/" className="btn btn-primary ms-auto btn-xs p-3"> Back </Link>
                        </div>
                        <div className="card-body">
                            <form method="POST" onSubmit={(e)=>onSubmit(e)} action="api/Lecturer">
                                
                                <div className="row mb-3">
                                    <label htmlFor="LectId" 
                                    className="col-md-4 col-form-label text-md-end">Lecturer Id</label>

                                    <div className="col-md-6">
                                        <input id="LectId" type="text" 
                                        onChange={(e)=>setLectId(e.target.value)} 
                                         className="form-control @error('LectId') is-invalid @enderror" 
                                        name="LectId" value={LectId} required autoComplete="LectId" autoFocus/>
                                        
                                        <span className="invalid-feedback" role="alert">
                                            <strong>{}</strong>
                                        </span>
                                        
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="LectName" 
                                    className="col-md-4 col-form-label text-md-end">Name</label>

                                    <div className="col-md-6">
                                        
                                        <input id="LectName" type="text" 
                                        onChange={(e)=>setLectName(e.target.value)} 
                                        className="form-control @error('LectName') is-invalid @enderror"
                                         name="LectName" value={LectName} required autoComplete="LectName" autoFocus/>

                                        <span className="invalid-feedback" role="alert">
                                            <strong>{}</strong>
                                        </span>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="LectEmail" className="col-md-4 col-form-label text-md-end">Email Addres</label>

                                    <div className="col-md-6">
                                        <input id="LectEmail" type="email" 
                                        onChange={(e)=>setLectEmail(e.target.value)} 
                                        className="form-control @error('LectEmail') is-invalid @enderror"
                                         name="LectEmail" value={LectEmail} required autoComplete="LectEmail"/>

                                        <span className="invalid-feedback" role="alert">
                                            <strong>{}</strong>
                                        </span>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="LectPhoneNumber" 
                                    className="col-md-4 col-form-label text-md-end">Phone Number</label>

                                    <div className="col-md-6">
                                        <input id="LectPhoneNumber" type="tel" 
                                        onChange={(e)=>setLectPhoneNumber(e.target.value)} 
                                        className="form-control @error('LectEmail') is-invalid @enderror" 
                                        name="LectPhoneNumber" value={LectPhoneNumber} required autoComplete="LectPhoneNumber"/>

                                        <span className="invalid-feedback" role="alert">
                                            <strong>{}</strong>
                                        </span>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="LectPassword" 
                                    className="col-md-4 col-form-label text-md-end">Password</label>


                                    <div className="col-md-6">
                                        <input id="LectPassword" type="password" 
                                        onChange={(e)=>setLectPassword(e.target.value)} 
                                        className="form-control @error('LectPassword') is-invalid @enderror" 
                                        name="LectPassword" value={LectPassword} required autoComplete="new-password"/>

                                        <span className="invalid-feedback" role="alert">
                                            <strong>{}</strong>
                                        </span>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="password-confirm" 
                                    className="col-md-4 col-form-label text-md-end">Confirm Password</label>

                                    <div className="col-md-6">
                                        <input id="password-confirm" type="password" 
                                        onChange={(e)=>setConfPassword(e.target.value)} className="form-control" 
                                        name="password_confirmation" value={ConfPassword} required autoComplete="new-password"/>
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit" className="btn btn-primary">Register</button>
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
 
export default LectureForm;
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const UserForm = () => {
    const [Student, setStudent] = useState(false);
    const [Lecturer, setLecturer] = useState(false);
    const [ConfPassword, setConfPassword] = useState('');
    
    const [state, setState] = useState({
        IdNumber : '',
        Name : '',
        Email : '',
        Position : '',
        PhoneNumber : '',
        Password : '',
    });

    const handleOnChange = (e) =>{
        setState({
            ...state,[e.target.name]:e.target.value
        })
    }

    const onCheck = (e)=>{
        if(e.target.id === 'Student'){
            setStudent(e.currentTarget.checked);
            state.Position='Student';
            setLecturer(false);
        }
        else if(e.target.id === 'Lecturer'){
            setStudent(false);
            state.Position='Lecturer';
            setLecturer(e.currentTarget.checked);
        }
    }
    // useEffect(() => {
    //     setPosition((Student)?'Student': (Lecturer)?'Lecturer':'');
    // }, [Student,Lecturer]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if(!state.Name||!state.IdNumber||!state.Email||!state.Position||!state.Password){
            return
        }

        console.log(state);

        axios.post('/api/Users', state).then((response)=>{
            if (response.data.status === 200){
                swal({
                    title:'success',
                    text:response.data.message,
                    icon:'success',
                    button:'OK!'
                });    
            }
        }).catch((e)=>{
            console.error(e);
        });

        setConfPassword('');
        setLecturer(false);
        setStudent(false);
        setState({
            PhoneNumber: '',
            Email: '',
            Name: '',
            Position: '',
            IdNumber: '',
            Password: ''
        })
    }

    return ( 
        <div className="container">
            <div className="row justify-content-center pt-8">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header d-flex">
                            <h1>Register User </h1>
                            <Link to="/" className="btn btn-primary ms-auto btn-xs p-3"> Back </Link>
                            
                        </div>
                        <div className="card-body">
                            <form method="POST" onSubmit={(e)=>onSubmit(e)} action="">
                                
                                <div className="row mb-3">
                                    <label htmlFor="IdNumber" 
                                    className="col-md-4 col-form-label text-md-end">User Id</label>

                                    <div className="col-md-6">
                                        <input id="IdNumber" type="text" 
                                        onChange={(e)=>handleOnChange(e)}  
                                        className="form-control" 
                                        name="IdNumber" value={state.IdNumber} required autoComplete="IdNumber" autoFocus/>
                                        
                                        <span className="invalid-feedback" role="alert">
                                            <strong>{}</strong>
                                        </span>
                                        
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="Name" 
                                    className="col-md-4 col-form-label text-md-end">Name</label>

                                    <div className="col-md-6">
                                        <input id="Name" type="text" 
                                        onChange ={(e) => handleOnChange(e)} 
                                        className="form-control"                                         
                                        name="Name" value={state.Name} required autoComplete="Name" autoFocus/>

                                        <span className="invalid-feedback" role="alert">
                                            <strong>{}</strong>
                                        </span>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="Email" 
                                    className="col-md-4 col-form-label text-md-end">Email Address</label>

                                    <div className="col-md-6">
                                        <input id="Email" type="email" 
                                        onChange ={(e) => handleOnChange(e)} 
                                        className="form-control "
                                         name="Email" value={state.Email} required autoComplete="Email"/>

                                        <span className="invalid-feedback" role="alert">
                                            <strong>{}</strong>
                                        </span>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="Position" 
                                    className="col-md-4 col-form-label text-md-end">Position</label>

                                    <div className="col-md-2 d-flex">
                                        <label htmlFor="Student" 
                                        className="col-form-label">Student</label>
                                        <input id="Student" type="radio" className="m-1"
                                        onChange={(e)=>onCheck(e)} 
                                        name="Position" checked={Student} required />

                                        <label htmlFor="Lecturer"
                                         className=" col-form-label">Lecturer</label>
                                        <input id="Lecturer" type="radio" className="m-1"
                                        onChange={(e)=>onCheck(e)}                                         
                                        name="Position"  checked={Lecturer} required /> 
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="PhoneNumber" 
                                    className="col-md-4 col-form-label text-md-end">Phone Number</label>

                                    <div className="col-md-6">
                                        <input id="PhoneNumber" type="tel" 
                                        onChange ={(e) => handleOnChange(e)} 
                                        className="form-control " 
                                        name="PhoneNumber" value={state.PhoneNumber}/>

                                        <span className="invalid-feedback" role="alert">
                                            <strong>{}</strong>
                                        </span>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="Password" 
                                    className="col-md-4 col-form-label text-md-end">Password</label>

                                    <div className="col-md-6">
                                        <input id="Password" type="password" 
                                        onChange ={(e) => handleOnChange(e)} 
                                        className="form-control"
                                        name="Password" value={state.Password} required autoComplete="new-password"/>

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
                                        onChange ={(e) => setConfPassword(e.target.value)} 
                                        className="form-control"
                                        name="password_confirmation" value={ConfPassword} required 
                                        autoComplete="new-password"/>
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
 
export default UserForm;
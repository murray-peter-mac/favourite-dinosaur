import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useUserStore from '../state/user'

// Import Components

function SideNav(props) {
    const user = useUserStore(state => state.user);
    const userApi = useUserStore(state => state.api);
    const initialValue = {
        isEdit: false,
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        dinosaur: ''
    }
    const [edit, setEdit] = useState(initialValue);

    useEffect( () => {
        console.log("User found!");
        resetEdit();
    }, [user])
    useEffect( () => {
        console.log("Setting Dino!");
        setEdit(state => {
            return {
                ...state,
                ['dinosaur']: props.dinosaur,
            }
        });
    }, [props.dinosaur])
    function resetEdit(){
        setEdit(initialValue);
    }
    function resetUser(e){
        e.preventDefault();
        userApi.clear();
    }
    function editUser(e){
        e.preventDefault();
        setEdit({
            ['isEdit']: true,
            ['firstname']: user.firstname,
            ['lastname']: user.surname,
            ['email']: user.emailaddress,
            ['dinosaur']: user.favoritedinosar,
        });
    }
    function saveUser(){
        console.log("saving: ", edit);
        if (edit.isEdit){
            userApi.edit(edit);
        } else {
            userApi.create(edit);
        }
    }
    function myChangeHandler(e) {
        let nam = e.target.name;
        let val = e.target.value;
        setEdit(state => {
            return {
                ...state,
                [nam]: val,
            }
        });
    }
    return (
        <div className={props.className}>
            <div className="card">
                { (Object.keys(user).length > 0 && !edit.isEdit)  ?
                    // User Exists
                    <div className="card-body">
                        <h5 className="card-title">{user.firstname}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{user.surname} - {user.emailaddress}</h6>
                        <div className="card-text">
                            <div className="form-group">
                                {user.favoritedinosar}
                                <small id="dinoHelp" className="form-text text-muted">Your favourite dinosaur.</small>
                            </div>
                        </div>
                    
                        <a href="#" className="card-link" onClick={resetUser} >Clear</a>
                        
                        <a href="#" className="card-link" onClick={editUser} >Change</a>
                    </div>
                    : // User does not exist
                    <div className="card-body">
                        <h5 className="card-title">
                            {edit.isEdit ? "Editing" : "Welcome" }
                        </h5>
                        <div className="d-flex justify-content-evenly">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Firstname" aria-label="Firstname" aria-describedby="basic-addon1" value={edit.firstname} name='firstname' onChange={(e) => myChangeHandler(e)} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Lastname" aria-label="Lastname" aria-describedby="basic-addon1"  value={edit.lastname} name='lastname' onChange={(e) => myChangeHandler(e)} />
                            </div>
                        </div>
                        <h6 className="card-subtitle mb-2 text-muted">
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" value={edit.email} name='email' onChange={(e) => myChangeHandler(e)}  />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                        </h6>
                        <div className="card-text">
                            <div className="form-group">
                                <input type="test" className="form-control" id="favouriteDino" aria-describedby="dinoHelp" placeholder="Favourite Dinosaur" readOnly={true} value={props.dinosaur} name='dinosaur'/>
                                <small id="dinoHelp" className="form-text text-muted">Click on your favourite dinosaur.</small>
                            </div>
                        </div>
                        <a href="#" className="card-link" onClick={resetEdit} > { edit.isEdit ? "Cancel" : "Clear" }</a>
                        <a href="#" className="card-link" onClick={saveUser}>Save</a>
                    </div>
                }
                <div className="card-footer d-flex justify-content-between">
                    <div className="left-control" onClick={props.goPrev}>
                        <svg className="bi bi-chevron-compact-left" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                        </svg>
                        {props.prev}
                    </div>            
                    <div className="right-control" onClick={props.goNext}>
                        {props.next}
                        <svg className="bi bi-chevron-compact-right" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
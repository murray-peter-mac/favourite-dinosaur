import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useUserStore from '../state/user'

// Import Components

function TopNav(props) {

    const userApi = useUserStore(state => state.api );
    const [search, changeSearch] = useState('');
    const [allUsers, changeAllUsers] = useState([]);

    function getAll(){
        userApi.all().then(response => {
            console.log(response.data);
            changeAllUsers( response.data );
        })
    }
    function searchForUser (e) {
        e.preventDefault();
        userApi.find(search).then(response => {
            console.log(response);
        })
    }
    return (
        <div className={props.className}>
            <div className="card mt-2">
                <nav className="navbar navbar-expand-lg navbar-light bg-light dropleft">
                    <a className="navbar-brand dropdown-toggle" href="#" onClick={() => getAll()} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg className="bi bi-chevron-compact-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                        </svg>
                            Dino Delux
                        <svg className="bi bi-chevron-compact-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {allUsers.length > 0 ?
                            allUsers.map( user => 
                                <a key={ user.user_id } onClick={ (e) => { changeSearch(user.emailaddress); } } className="dropdown-item" href="#"> {user.emailaddress} </a>
                            )
                            : <a className="dropdown-item" href="#" aria-disabled="true">No Users</a>
                        }
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline ml-auto">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { changeSearch(e.target.value) } } />
                            <button className="btn btn-outline-success my-2 my-sm-0" onClick={(e) => { searchForUser(e) }} disabled={!search} aria-disabled={!search}>Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default TopNav;
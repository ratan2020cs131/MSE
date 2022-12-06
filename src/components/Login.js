import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

var user11;

const Login=()=> {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            user11 =res.data.user
        })
    }

    return (
        <form className="w-50 border border-opacity-25 border-success border-3 rounded p-3 my-5">
            {console.log(user)}
            <div className="mb-3 text-start">
                <label for="exampleInputEmail1" className="form-label">Email Address</label>
                <input type="email" name="email" value={user.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="some-one@email.com" onChange={handleChange}/>
            </div>
            <div className="mb-3 text-start">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" value={user.password} className="form-control" id="exampleInputPassword1" placeholder="********" onChange={handleChange}/>
            </div>
            <div className="text-start">
                <p>New Here? <Link to='/register'>Sign up</Link></p>
            </div>
            <button type="submit" className="btn btn-primary" onClick={ login }>Submit</button>
        </form>
    );
}

export { Login, user11 };
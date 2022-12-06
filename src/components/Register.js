import React, {useState} from "react";
import axios from "axios";

export default function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {name, email, password, rePassword} = user
        if(name && email && password && (password === rePassword)) {
            axios.post("http://localhost:9002/register", user)
            .then( res => alert(res.data.message)) 
        }
        else{
            alert('Invalid Input');
        }
    }

    return (
        <>
            <form className="w-75 border border-opacity-25 border-success border-3 rounded p-3 my-5">
                <div className="row">
                    <div className="col-2 text-start">
                        Name
                    </div>
                    <div className="col-4">
                    <input type="text" name="name" value={user.name} className="form-control" id="exampleInputName1" placeholder="your name" onChange={handleChange}/>
                    </div>
                    <div className="col fs-6 text-start">
                        Enter your complete name
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-2 text-start">
                        Email
                    </div>
                    <div className="col-4">
                    <input type="email" name="email" value={user.email} className="form-control" id="exampleInputEmail1" placeholder="some-one@email.com" onChange={handleChange}/>
                    </div>
                    <div className="col fs-6 text-start">
                        Enter your email address
                    </div>
                </div>
                
                <div className="row mt-3">
                    <div className="col-2 text-start">
                        Password
                    </div>
                    <div className="col-4">
                    <input type="password" name="password" value={user.password} className="form-control" id="exampleInputPassword1" placeholder="********" onChange={handleChange}/>
                    </div>
                    <div className="col fs-6 text-start">
                        8-20 characters long.
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-2 text-start">
                        Confirm
                    </div>
                    <div className="col-4">
                    <input type="password" name="rePassword" value={user.rePassword} className="form-control" id="exampleInputRePassword1" placeholder="********" onChange={handleChange}/>
                    </div>
                    <div className="col fs-6 text-start">
                        Enter your password again
                    </div>
                </div>

                <button type="submit" className="btn btn-primary my-3" onClick={ register }>Submit</button>
            </form>
        </>
    );
}

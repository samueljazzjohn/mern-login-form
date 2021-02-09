import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {Redirect} from 'react-router-dom'

class login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }

    input=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    login=(e)=>{
        e.preventDefault();
        let data={
            username:this.state.username,
            password:this.state.password
        }
        axios.post("http://localhost:4000/api/login", data).then(res => {
        console.log(res.status)
        console.log(res)
        if(res.status==200){
            Swal.fire({
                icon: 'success',
                title: res.data,
              })
              return<Redirect to="/"></Redirect>
        }
        else if(res.status==201){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: res.data,
              })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: res.data,
              })
        
        }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div className="container login">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    {/* <h1 className="mt-1 text-center font-weight-bold">LOGIN</h1> */}
                    <form className="pt-3" onSubmit={this.login}>
                        <div className='form-group'>
                            <label for="email">Username    </label>
                            <input className="form-control" type="email" name="username" onChange={this.input} autoComplete='none'></input>
                        </div>
                        <div className='form-group'>
                            <label for="password">Password</label>
                            <input className="form-control" type="password" name="password" onChange={this.input} autoComplete='none'></input>
                        </div>
                        <div className='form-group pt-3'>
                            <button className="btn  float-right pl-5 pr-5" id="login">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default login;
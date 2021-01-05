import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


class Reg extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mail: "Samuel jazz john",
            password: "jazzy123",
            displayName: 'samuel',
            alert: "",
            visible: false,
            api: ""

        }
    }

    // callAPI() {
    //     fetch("http://localhost:4000/api").then(res => res.text())
    //     .then(res=>this.setState({api:res}))
    // }

    input = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }

    closeAlert = (e) => {
        this.setState({ visible: false })
    }

    register = (e) => {
        // this.callAPI();
        e.preventDefault();
        let data = {
            mail: this.state.mail,
            password: this.state.password,
            displayname: this.state.displayName
        }
        axios.post("http://localhost:4000/api/registration", data).then(res => {
        console.log(res.status)
        if(res.status==200){
            Swal.fire({
                icon: 'success',
                title: res.data,
              })
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
            // alert(res.data)
            // console.log(res.status)
            // console.log(res.data)
            this.setState({ alert: res.data.message })
            this.setState({ visible: true })
        }).catch(err=>{
            console.log(err);
        })


    }



    render() {
        let show = this.state.visible ? "d-block" : "d-none";
        return (
            <div className="container">
                {/* <div className="row">
                    <div className="col pt-5 ">
                        <div className={show}>
                            <div className='alert alert-warning alert-dismissible fade show' role="alert" display="none">
                                <span>{this.state.alert}</span>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => this.closeAlert}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h1 className="mt-4 text-center ">REGISTRATION</h1>
                        <form className="pt-4" onSubmit={this.register}>
                            <div className='form-group'>
                                <label for="email">Email    </label>
                                <input className="form-control" type="email" name="mail" onChange={this.input} ></input>
                            </div>
                            <div className='form-group'>
                                <label for="password">Password</label>
                                <input className="form-control" type="password" name="password" onChange={this.input}></input>
                            </div>
                            <div className='form-group'>
                                <label for="Displayname">Display Name</label>
                                <input className="form-control" type="text" name="displayName" onChange={this.input}></input>
                            </div>
                            <div className='form-group pt-2'>
                                <button className="btn btn-primary float-right pl-5 pr-5" >Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-5 ">
                        <ul class="list-group  ">
                            <li class="list-group-item">{this.state.mail}</li>
                            <li class="list-group-item">{this.state.password}</li>
                            <li class="list-group-item">{this.state.displayName}</li>
                            <li class="list-group-item">{this.state.api}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Reg;
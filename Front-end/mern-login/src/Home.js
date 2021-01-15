import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import Login from "./login"
import Reg from './registration'

function Home(props) {
  return (
    <>
    <div className="App d-flex">
      <div className="background col-12">
        <div
          className="container  d-flex flex-column justify-content-center"
          id="body"
        >
          <div className="body">
            <div className="row ">
              <div className="col">
                <p className=" h3 font-weight-bold ">
                  we make for your <span>perfection</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  type="button"
                  className="home-bt btn  m-2 pl-4 pr-4"
                  data-toggle="modal"
                  data-target="#loginModel"
                >
                  login
                </button>

                

                <button to="/Register" className="home-bt btn  m-2 pl-4 pr-4" data-toggle="modal"
                  data-target="#RegModel" >
                  register
                </button>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Login Model */}
    <div
    className="modal fade container"
    id="loginModel"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-dialog-centered"
      role="document"
    >
      <div className="modal-content pb-4">
        <div className="modal-header">
          <h3
            className="modal-title mt-2 font-weight-bold  "
            id="exampleModalLabel"
          >
            LOGIN
          </h3>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" className="close-box">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <Login />
        </div>
      </div>
    </div>
  </div>
   {/* Registration model */}
   <div
   className="modal fade container"
   id="RegModel"
   tabindex="-1"
   role="dialog"
   aria-labelledby="exampleModalLabel"
   aria-hidden="true"
 >
   <div
     className="modal-dialog modal-dialog-centered"
     role="document"
   >
     <div className="modal-content pb-4 ">
       <div className="modal-header">
         <h3
           className="modal-title mt-2 font-weight-bold "
           id="exampleModalLabel"
         >
           REGISTER
         </h3>
         <button
           type="button"
           className="close"
           data-dismiss="modal"
           aria-label="Close"
         >
           <span aria-hidden="true" className="close-box" >&times;</span>
         </button>
       </div>
       <div className="modal-body">
         <Reg />
       </div>
     </div>
   </div>
 </div>
 </>
  );
}

export default Home;
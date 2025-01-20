import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { requsterApi } from "../../service/requster";
import { localStorageApi } from "../../service/localStorage";



export default function Login(){

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email:"",
        password:"",
    })

    const submitHandler = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:3030/users/login';

        try{
            
        const user = await requsterApi.post(url,formData);

        localStorageApi.setData(user.email,user.accessToken,user._id);

        navigate('/')

        }catch(err){

        }
        
    }

    const changeHanlder = (e) => {
        setFormData(oldState => (
            {
                ...oldState,
                [e.target.name]:e.target.value
            }
        ))
    }

    return(
        <>
  <section className="text-center">
    <div
      className="p-5 bg-image"
      style={{
        backgroundImage:
          'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
        height: 300
      }}
    />
    {/* Background image */}
    <div
      className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary"
      style={{ marginTop: "-100px", backdropFilter: "blur(30px)" }}
    >
      <div className="card-body py-5 px-md-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-5">Login</h2>
            <form onSubmit={submitHandler}>
              <div data-mdb-input-init="" className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control"
                  name="email"
                  onChange={changeHanlder}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>
              {/* Password input */}
              <div data-mdb-input-init="" className="form-outline mb-4">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control"
                  name="password"
                  onChange={changeHanlder}

                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>
              <button
                type="submit"
                data-mdb-button-init=""
                data-mdb-ripple-init=""
                className="btn btn-primary btn-block mb-4"
              >
                Login
              </button>


              <Link to="register">Don't register yet?</Link>
            

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
    )
}
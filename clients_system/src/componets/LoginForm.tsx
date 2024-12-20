import React, {useEffect, useState} from "react";
import LoginField from "./LoginField";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import {  userStore } from "../stores/UserStore";


function LoginForm() {
    const [error, setErrors] = useState(userStore.error);
    const navigate = useNavigate();
  
    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      userStore.setEmail(value);
      console.log("correo", value)
    };
  
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      userStore.setPassword(value);
      console.log("password: ",value)
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await userStore.login();
        console.log("Se autentica? : ", userStore.isAuthenticated)
        if (userStore.isAuthenticated) {
          navigate("/main");
          console.log("Se authentica")
        }else {
            setErrors(userStore.error)
            console.log("Hay un error al iniciar")
        }
      };

      useEffect(() => {
        setErrors(userStore.error);
      }, [userStore.error]); 

  return (
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form  onSubmit={handleLogin}>
            <div className="divider d-flex align-items-center my-4">
              <h2 className="text-center fw-bold mx-3 mb-0">
                Iniciar sesión
              </h2>
            </div>

            <div data-mdb-input-init className="form-outline mb-4 my-4">
              <LoginField
               type={"email"}
               icon={"User"}
               placeholder={"Enter your email"}
               onChange={handleEmail}
               autocomplete={"username"}
              />
              <label className="form-label">Email</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-3">
              <LoginField
               type={"password"}
               icon={"User"}
               placeholder={"Enter your password"}
               onChange={handlePassword}
               autocomplete={"current-password"}
              />
              <label className="form-label">Password</label>
            </div>


            <div className="text-center text-lg-start mb-3 mt-4 pt-2">
              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-lg"
                style={{
                  paddingLeft: "2.5rem",
                  paddingRight: "2.5rem",
                  backgroundColor: "#5AE4A8",
                  color: "white",
                }}
                disabled={!userStore.email || !userStore.password}
              >
                Login
              </button>
            </div>
            <ErrorMessage error={error}/> 
          </form>
        </div>
      </div>
    </div>
  </section>
       
                   
  );
}

export default LoginForm;
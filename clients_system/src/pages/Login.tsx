import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import  LoginForm  from "../componets/LoginForm";

const Login: React.FC = () => {

    

  return (
    <>
    <div>
    <LoginForm />
    </div>
    </>
  )
}

export default Login
import React from "react";
import {  LoginErroMessage } from "../interfaces/LoginPageProps";

const ErrorMessage: React.FC<LoginErroMessage> = ({ error })=> {
  return error ? (
    <div className="alert alert-danger d-flex justify-content-center align-items-center alert w-auto">
      {error}
    </div>
  ) : null;
}

export default ErrorMessage;
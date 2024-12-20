import { LoginPageProps } from "../interfaces/LoginPageProps";


const LoginField: React.FC<LoginPageProps> = ({ type , placeholder, icon, onChange, autocomplete}) => {

  return (
    <div>
      <input
        type={type}
        name={type}
        placeholder={placeholder}
        className="form-control form-control-lg"
        onChange={onChange}
        autoComplete={autocomplete}
      />
    </div>
  );
}

export default LoginField;
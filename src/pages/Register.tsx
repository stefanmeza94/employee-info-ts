import Wrapper from '../assets/Wrappers/Register';
import { GoogleLoginButton } from 'ts-react-google-login-component';
import GoogleLogin from 'react-google-login';
import { useAppContext } from '../context/appContext';

const Register = () => {
  const { handleLogin, handleLoginFailure } = useAppContext();
  const clientConfig = { client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID };

  return (
    <Wrapper>
      <div>
        <h1>Login</h1>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
          buttonText='Login'
          onSuccess={handleLogin}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </Wrapper>
  );
};

export default Register;

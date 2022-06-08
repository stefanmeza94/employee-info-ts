import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/Wrappers/Register';
import GoogleLogin from 'react-google-login';
import { useAppContext } from '../context/appContext';
import loginImage from '../assets/images/loginImage.svg';

const Register = () => {
  const { handleLogin, handleLoginFailure, user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(user.role === 'SYSTEM_ADMIN' ? '/admin' : '/project-manager');
    }
  }, [user]);

  return (
    <Wrapper>
      <div>
        <h1>
          Login <span>page</span>
        </h1>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
          buttonText='Login'
          onSuccess={handleLogin}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
        <div className='btnWrapper'>
          <button onClick={() => navigate('/')} className='backBtn'>
            Go back!
          </button>
        </div>
      </div>
      <div>
        <img src={loginImage} alt='login image' className='loginImg' />
      </div>
    </Wrapper>
  );
};

export default Register;

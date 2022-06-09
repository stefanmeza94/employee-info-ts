import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import GoogleLogin from 'react-google-login';
import Wrapper from '../assets/Wrappers/Landing';
import Employee from '../assets/images/employee.svg';
import { useEffect } from 'react';

const LandingPage = () => {
  const { handleLogin, handleLoginFailure, user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <Wrapper>
      <div className='container page'>
        <div className='info'>
          <h1>
            Employee <span>info</span> app
          </h1>
          <p>Login as Admin or Project Manager to manage your employees!</p>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
            buttonText='Login'
            onSuccess={handleLogin}
            onFailure={handleLoginFailure}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <img src={Employee} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};
export default LandingPage;

import { Link } from 'react-router-dom';
import Wrapper from '../assets/Wrappers/Landing';
import Employee from '../assets/images/employee.svg';

const LandingPage = () => {
  return (
    <Wrapper>
      <div className='container page'>
        <div className='info'>
          <h1>
            Employee <span>info</span> app
          </h1>
          <p>Login as Admin or Project Manager to manage your employees!</p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={Employee} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};
export default LandingPage;

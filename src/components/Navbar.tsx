import { useAppContext } from '../context/appContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import Wrapper from '../assets/Wrappers/Navbar';
import Logo from '../assets/images/quantoxLogo.png';

const Navbar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </button>
        <div>
          <img className='logo' src={Logo} alt='logo' />
          <h3 className='logo-text'>Dashboard</h3>
        </div>
        <div className='btn-container'>
          <button type='button' className='btn'>
            Logged User
          </button>
          <div className='dropdown'>
            <button type='button' className='dropdown-btn'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

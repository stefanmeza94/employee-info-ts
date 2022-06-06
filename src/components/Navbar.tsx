import { useState } from 'react';
import { useAppContext } from '../context/appContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';

import Wrapper from '../assets/Wrappers/Navbar';
import Logo from '../assets/images/quantoxLogo.png';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState<boolean>(false);
  const { toggleSidebar, user, handleLogout } = useAppContext();

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
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name.split(' ')[0]}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

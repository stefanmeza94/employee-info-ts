import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/Wrappers/Sidebar';
import NavLinks from './NavLinks';
import Logo from '../assets/images/quantoxLogo.png';

const user = {
  role: 'admin',
  number: 1,
};

const Sidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}
      >
        <div className='content'>
          <header>
            <img className='logo' src={Logo} alt='logo' />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;

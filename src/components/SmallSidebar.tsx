import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/Wrappers/SmallSidebar';
import NavLinks from './NavLinks';
import { GrClose } from 'react-icons/gr';
import Logo from '../assets/images/quantoxLogo.png';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div
        className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}
      >
        <div className='content'>
          <button className='close-btn' type='button' onClick={toggleSidebar}>
            <GrClose />
          </button>
          <header>
            <img src={Logo} alt='quantox logo' className='logo' />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;

import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/Wrappers/SmallSidebar';
import NavLinks from './NavLinks';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div
        className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}
      >
        <div className='content'>
          <button className='close-btn' type='button' onClick={toggleSidebar}>
            fa times
          </button>
          <header>Logo</header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;

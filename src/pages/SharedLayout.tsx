import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SmallSidebar from '../components/SmallSidebar';
import Navbar from '../components/Navbar';
import Wrapper from '../assets/Wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <Sidebar />

        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;

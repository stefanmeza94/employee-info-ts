import Wrapper from '../assets/Wrappers/Sidebar';
import NavLinks from './NavLinks';
import Logo from '../assets/images/quantoxLogo.png';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiFillProject, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaCity } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { MdCategory, MdOutlinePeopleOutline, MdEmojiPeople } from 'react-icons/md';
import { BiCode } from 'react-icons/bi';
import { IoMdPeople } from 'react-icons/io';

const adminLinks = [
  {
    id: 1,
    text: 'all employee',
    path: '/',
    icon: <IoMdPeople />,
  },
  {
    id: 2,
    text: 'all projects',
    path: '/all-projects',
    icon: <AiFillProject />,
  },
  {
    id: 3,
    text: 'cities',
    path: '/cities',
    icon: <FaCity />,
  },
  {
    id: 4,
    text: 'countries',
    path: '/countries',
    icon: <GiModernCity />,
  },
  {
    id: 5,
    text: 'seniorities',
    path: '/seniorities',
    icon: <MdCategory />,
  },
  {
    id: 6,
    text: 'positions',
    path: '/positions',
    icon: <BiCode />,
  },
  {
    id: 7,
    text: 'Project Managers',
    path: '/project-managers',
    icon: <MdOutlinePeopleOutline />,
  },
  {
    id: 8,
    text: 'System Administrators',
    path: '/system-administrators',
    icon: <BsFillPeopleFill />,
  },
];

const projectManagerLinks = [
  {
    id: 1,
    text: 'all employees',
    path: '/',
    icon: <IoMdPeople />,
  },
  {
    id: 2,
    text: 'my employee',
    path: '/my-employees',
    icon: <MdEmojiPeople />,
  },
  {
    id: 3,
    text: 'all projects',
    path: '/all-projects',
    icon: <AiOutlineFundProjectionScreen />,
  },
];

const user = {
  role: 'admin',
  number: 1,
};

const Sidebar = () => {
  return (
    <Wrapper>
      <div className='sidebar-container show-sidebar'>
        <div className='content'>
          <header>
            <img className='logo' src={Logo} />
          </header>
          <NavLinks links={user.role === 'admin' ? adminLinks : projectManagerLinks} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;

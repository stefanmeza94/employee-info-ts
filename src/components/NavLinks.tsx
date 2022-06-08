import { NavLink } from 'react-router-dom';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiFillProject, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaCity } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { MdCategory, MdOutlinePeopleOutline, MdEmojiPeople } from 'react-icons/md';
import { BiCode } from 'react-icons/bi';
import { IoMdPeople } from 'react-icons/io';
import { useAppContext } from '../context/appContext';

interface NavLinksProps {
  toggleSidebar?: any;
}

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
    path: '/project-manager',
    icon: <IoMdPeople />,
  },
  {
    id: 2,
    text: 'my employee',
    path: '/project-manager/my-employees',
    icon: <MdEmojiPeople />,
  },
  {
    id: 3,
    text: 'all projects',
    path: '/project-manager/all-projects',
    icon: <AiOutlineFundProjectionScreen />,
  },
];

let currentUser;

const NavLinks: React.FC<NavLinksProps> = ({ toggleSidebar }) => {
  const { user } = useAppContext();

  if (user.role === 'SYSTEM_ADMIN') {
    currentUser = adminLinks;
  } else {
    currentUser = projectManagerLinks;
  }

  return (
    <div className='nav-links'>
      {currentUser?.map((link) => {
        const { text, id, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;

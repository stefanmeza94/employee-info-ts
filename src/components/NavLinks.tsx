import { NavLink } from 'react-router-dom';

interface NavLinksProps {
  links: {
    id: number;
    text: string;
    path: string;
    icon: any;
  }[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, id, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={id}
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

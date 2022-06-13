import { Link } from 'react-router-dom';
import Wrapper from '../assets/Wrappers/Employee';
import { useAppContext } from '../context/appContext';

interface ProjectProps {
  name: string;
  id: number;
}

const Project: React.FC<ProjectProps> = ({ name, id }) => {
  const { deleteProject, setEditProject } = useAppContext();

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{name.charAt(0)}</div>
        <div className='info'>
          <h5>{name}</h5>
          <p>Quantox Technology</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>some more info</div>
        <footer>
          <div className='actions'>
            <button className='btn edit-btn' onClick={() => setEditProject(id)}>
              Edit
            </button>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteProject(id)}
            >
              Delete
            </button>
            <Link to='/' className='btn info-btn'>
              More info
            </Link>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Project;

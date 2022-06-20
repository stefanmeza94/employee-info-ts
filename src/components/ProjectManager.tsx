import Wrapper from '../assets/Wrappers/Employee';
import { useAppContext } from '../context/appContext';

interface ProjectManagerProps {
  name: string;
  id: number;
}

const ProjectManager: React.FC<ProjectManagerProps> = ({ name, id }) => {
  const { RemoveFromProjectManager } = useAppContext();
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
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => RemoveFromProjectManager(id)}
            >
              Remove from Project Managers
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default ProjectManager;

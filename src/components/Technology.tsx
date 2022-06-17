import Wrapper from '../assets/Wrappers/Employee';
import { useAppContext } from '../context/appContext';

interface TechnologyProps {
  id: number;
  name: string;
}

const Technology: React.FC<TechnologyProps> = ({ id, name }) => {
  const { deleteTechnology, setEditTechnology } = useAppContext();

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
            <button className='btn edit-btn'>Edit</button>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteTechnology(id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Technology;

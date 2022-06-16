import Wrapper from '../assets/Wrappers/Employee';
import { useAppContext } from '../context/appContext';

interface CountryProps {
  name: string;
  id: number;
}

const City: React.FC<CountryProps> = ({ name, id }) => {
  const { deleteCountry, setEditCountry } = useAppContext();

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
            <button className='btn edit-btn' onClick={() => setEditCountry(id)}>
              Edit
            </button>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteCountry(id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default City;

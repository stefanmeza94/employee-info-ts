import Wrapper from '../assets/Wrappers/Employee';
import { useAppContext } from '../context/appContext';

interface CountryProps {
  name: string;
  id: number;
  countryId: number;
}

const City: React.FC<CountryProps> = ({ name, id, countryId }) => {
  const { deleteCity, setEditCity } = useAppContext();

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
            <button type='button' className='btn delete-btn'>
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default City;

import { Link } from 'react-router-dom';
import Wrapper from '../assets/Wrappers/Employee';
import { useAppContext } from '../context/appContext';

interface EmployeeProps {
  id: number;
  email: string;
  name: string;
}

const Employee: React.FC<EmployeeProps> = ({ id, email, name }) => {
  const { deleteEmployee, setEditEmployee } = useAppContext();

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
        <div className='content-center'>{email}</div>
        <footer>
          <div className='actions'>
            <button className='btn edit-btn' onClick={() => setEditEmployee(id)}>
              Edit
            </button>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteEmployee(id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Employee;

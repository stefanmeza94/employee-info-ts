import { Link } from 'react-router-dom';
import Wrapper from '../assets/Wrappers/Employee';
import { useAppContext } from '../context/appContext';

interface EmployeeProps {
  id: number;
  email: string;
  photo: string;
  name: string;
  role: string;
  seniority: string | null;
}

const Employee: React.FC<EmployeeProps> = ({
  id,
  email,
  photo,
  name,
  role,
  seniority,
}) => {
  const { deleteEmployee } = useAppContext();
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
            <Link to='/add-job' className='btn edit-btn'>
              Edit
            </Link>
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

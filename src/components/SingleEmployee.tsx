import { Link, useParams } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/Wrappers/SingleEmployee';
import avatar from '../assets/images/avatar.jpg';

const SingleEmployee = () => {
  const { employees } = useAppContext();
  const { employeeId } = useParams();

  const { name, email, seniority, role } = employees.find(
    (employee: any) => employee.id === Number(employeeId)
  );

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{name}</div>
        <img src={avatar} alt='logo' className='employee-img' />
      </header>
      <table>
        <thead>
          <tr>
            <th>Email:</th>
            <th>Seniority:</th>
            <th>Role:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{email}</td>
            <td>{seniority}</td>
            <td>{role}</td>
          </tr>
        </tbody>
      </table>
      <Link to='/' className='backBtn'>
        Back to all employees
      </Link>
    </Wrapper>
  );
};

export default SingleEmployee;

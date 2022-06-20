import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import SystemAdmins from '../components/SystemAdmins';
import Wrapper from '../assets/Wrappers/EmployeeContainer';
import Loading from './Loading';

const SystemAdminContainer = () => {
  const { getAllEmployees, employees, loading } = useAppContext();

  useEffect(() => {
    getAllEmployees();
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>{`${
        employees.filter((employee: any) => employee.role === 'SYSTEM_ADMIN').length
      } System Admins Found`}</h5>
      <div className='jobs'>
        {employees
          .filter((employee: any) => employee.role === 'SYSTEM_ADMIN')
          .map((employee: any) => {
            return <SystemAdmins key={employee.id} {...employee} />;
          })}
      </div>
    </Wrapper>
  );
};

export default SystemAdminContainer;

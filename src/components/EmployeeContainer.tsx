import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import Employee from '../components/Employee';
import Wrapper from '../assets/Wrappers/EmployeeContainer';
import Loading from './Loading';

const EmployeeContainer = () => {
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

  if (employees.length === 0) {
    return (
      <Wrapper>
        <h2>There is no single employee</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>{`${employees.length} Employees Found`}</h5>
      <div className='jobs'>
        {employees.map((employee: any) => {
          return <Employee key={employee.id} {...employee} />;
        })}
      </div>
    </Wrapper>
  );
};

export default EmployeeContainer;

import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import ProjectManagers from '../components/ProjectManagers';
import Wrapper from '../assets/Wrappers/EmployeeContainer';
import Loading from './Loading';

const ProjectManagerContainer = () => {
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
        employees.filter((employee: any) => employee.role === 'PROJECT_MANAGER').length
      } Project Managers Found`}</h5>
      <div className='jobs'>
        {employees
          .filter((employee: any) => employee.role === 'PROJECT_MANAGER')
          .map((employee: any) => {
            return <ProjectManagers key={employee.id} {...employee} />;
          })}
      </div>
    </Wrapper>
  );
};

export default ProjectManagerContainer;

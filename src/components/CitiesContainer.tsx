import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import City from '../components/Project';
import Wrapper from '../assets/Wrappers/EmployeeContainer';
import Loading from './Loading';

const ProjectsContainer = () => {
  const { getAllCities, citites, loading } = useAppContext();

  useEffect(() => {
    getAllCities();
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  if (citites.length === 0) {
    return (
      <Wrapper>
        <h2>There is no single project</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>{`${citites.length} Projects Found`}</h5>
      <div className='jobs'>
        {citites.map((city: any) => {
          return <City key={city.id} {...city} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ProjectsContainer;

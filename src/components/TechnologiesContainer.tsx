import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import Technology from './Technology';
import Wrapper from '../assets/Wrappers/EmployeeContainer';
import Loading from './Loading';

const TechnologiesContainer = () => {
  const { getAllTechnologies, technologies, loading } = useAppContext();

  useEffect(() => {
    getAllTechnologies();
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  if (technologies.length === 0) {
    return (
      <Wrapper>
        <h2>There is no single technology</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>{`${technologies.length} Technologies Found`}</h5>
      <div className='jobs'>
        {technologies.map((technology: any) => {
          return <Technology key={technology.id} {...technology} />;
        })}
      </div>
    </Wrapper>
  );
};

export default TechnologiesContainer;

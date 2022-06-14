import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import City from '../components/City';
import Wrapper from '../assets/Wrappers/EmployeeContainer';
import Loading from './Loading';

const CitiesContainer = () => {
  const { getAllCities, cities, loading } = useAppContext();

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

  if (cities.length === 0) {
    return (
      <Wrapper>
        <h2>There is no single city</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>{`${cities.length} cities Found`}</h5>
      <div className='jobs'>
        {cities.map((city: any) => {
          return <City key={city.id} {...city} />;
        })}
      </div>
    </Wrapper>
  );
};

export default CitiesContainer;

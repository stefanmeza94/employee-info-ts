import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import Country from '../components/Country';
import Wrapper from '../assets/Wrappers/EmployeeContainer';
import Loading from './Loading';

const CountryContainer = () => {
  const { getAllCountries, countries, loading } = useAppContext();

  useEffect(() => {
    getAllCountries();
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  if (countries.length === 0) {
    return (
      <Wrapper>
        <h2>There is no single country</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>{`${countries.length} cities Found`}</h5>
      <div className='jobs'>
        {countries.map((country: any) => {
          return <Country key={country.id} {...country} />;
        })}
      </div>
    </Wrapper>
  );
};

export default CountryContainer;

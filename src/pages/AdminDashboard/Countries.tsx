import { useAppContext } from '../../context/appContext';
import AddForm from '../../components/AddForm';
import CountryContainer from '../../components/CountryContainer';

const Countries = () => {
  const { country, addNewCountry, editCountry, isEditingCountry } = useAppContext();
  return (
    <>
      <AddForm
        category='isEditingCountry'
        name={country}
        nameOfInput='country'
        addNew={addNewCountry}
        editFunc={editCountry}
        editing={isEditingCountry}
      />
      <CountryContainer />
    </>
  );
};

export default Countries;

import AddForm from '../../components/AddForm';
import CitiesContainer from '../../components/CitiesContainer';
import { useAppContext } from '../../context/appContext';

const Cities = () => {
  const { isEditingCity, editCity, getAllCities } = useAppContext();
  return (
    <>
      {/* <AddForm
        nameOfInput='city'
        editing={isEditingCity}
        editFunc={editCity}
        getAll={getAllCities}
      /> */}
      {/* <CitiesContainer /> */}
    </>
  );
};

export default Cities;

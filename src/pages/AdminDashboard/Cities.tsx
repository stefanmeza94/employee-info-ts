import AddForm from '../../components/AddForm';
import CitiesContainer from '../../components/CitiesContainer';
import { useAppContext } from '../../context/appContext';

const Cities = () => {
  const { isEditingCity, editCity, addNewCity, city } = useAppContext();

  return (
    <>
      <AddForm
        category='isEditingCity'
        name={city}
        nameOfInput='city'
        editing={isEditingCity}
        editFunc={editCity}
        addNew={addNewCity}
      />
      <CitiesContainer />
    </>
  );
};

export default Cities;

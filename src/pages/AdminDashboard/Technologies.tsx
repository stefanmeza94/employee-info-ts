import { useAppContext } from '../../context/appContext';
import AddForm from '../../components/AddForm';

const Technologies = () => {
  const { technology, addNewTechnology, editTechnology, isEditingTechnology } =
    useAppContext();
  return (
    <>
      <AddForm
        category='isEditingTechnology'
        name={technology}
        nameOfInput='technology'
        addNew={addNewTechnology}
        editFunc={editTechnology}
        editing={isEditingTechnology}
      />
    </>
  );
};

export default Technologies;

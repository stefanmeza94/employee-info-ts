import { useAppContext } from '../../context/appContext';
import AddForm from '../../components/AddForm';
import TechnologiesContainer from '../../components/TechnologiesContainer';

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
      <TechnologiesContainer />
    </>
  );
};

export default Technologies;

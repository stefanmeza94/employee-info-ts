import { useAppContext } from '../context/appContext';
import FormRow from '../components/FormRow';
import Wrapper from '../assets/Wrappers/SearchContainer';
import Alert from '../components/Alert';

interface AddFormProps {
  category: string;
  name: string;
  nameOfInput: string;
  editing: boolean;
  editFunc: () => {};
  addNew: () => {};
}

const AddForm: React.FC<AddFormProps> = ({
  category,
  name,
  nameOfInput,
  editing,
  editFunc,
  addNew,
}) => {
  const { handleChange, showAlert, clearInput, displayAlert, clearEditCategory } =
    useAppContext();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    handleChange({ name, value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!name) {
      displayAlert();
      return;
    }

    if (editing) {
      editFunc();
      return;
    }

    addNew();
    clearInput(nameOfInput);
  };

  const handleClear = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (editing) {
      clearEditCategory(category, name);
    }
    if (!name) {
      displayAlert();
      return;
    }
    clearInput(nameOfInput);
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h4>{editing ? `Edit your ${nameOfInput}` : `Add new ${nameOfInput}`}</h4>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow type='text' name={nameOfInput} value={name} onChange={onChange} />

          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              onClick={handleSubmit}
            >
              {editing ? 'Edit' : 'Submit'}
            </button>
            <button className='btn btn-block clear-btn' onClick={handleClear}>
              {editing ? 'Go Back' : 'Clear'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddForm;

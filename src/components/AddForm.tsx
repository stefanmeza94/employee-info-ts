import { useAppContext } from '../context/appContext';
import FormRow from '../components/FormRow';
import Wrapper from '../assets/Wrappers/SearchContainer';
import Alert from '../components/Alert';

interface AddFormProps {
  nameOfInput: string;
}

const AddForm: React.FC<AddFormProps> = ({ nameOfInput }) => {
  const { project, handleChange, showAlert, clearInput, addNewProject, displayAlert } =
    useAppContext();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    handleChange({ name, value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!project) {
      displayAlert();
      return;
    }
    addNewProject();
    clearInput(nameOfInput);
  };

  const handleClear = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!project) {
      displayAlert();
      return;
    }
    clearInput(nameOfInput);
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add new Project</h4>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow type='text' name={nameOfInput} value={project} onChange={onChange} />

          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button className='btn btn-block clear-btn' onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddForm;

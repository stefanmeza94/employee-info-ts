import { useAppContext } from '../context/appContext';
import FormRow from '../components/FormRow';
import Wrapper from '../assets/Wrappers/SearchContainer';

const AddContainer = () => {
  const { nameInput, surenameInput, emailInput, handleChange } = useAppContext();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    handleChange({
      name,
      value,
    });
  };

  return (
    <Wrapper>
      <form className='form'>
        <h4>add new employee</h4>
        <div className='form-center'>
          <FormRow type='text' name='name' value={nameInput} onChange={onChange} />
          <FormRow type='text' name='surname' value={surenameInput} onChange={onChange} />
          <FormRow type='email' name='email' value={emailInput} onChange={onChange} />
          <div className='btn-container'>
            <button className='btn btn-block submit-btn' type='submit'>
              submit
            </button>
            <button className='btn btn-block clear-btn' type='submit'>
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddContainer;

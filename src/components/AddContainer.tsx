import React from 'react';
import { useAppContext } from '../context/appContext';
import Alert from '../components/Alert';
import FormRow from '../components/FormRow';
import Wrapper from '../assets/Wrappers/SearchContainer';

const AddContainer = () => {
  const {
    name,
    surname,
    email,
    handleChange,
    displayAlert,
    showAlert,
    clearInputs,
    addNewEmplooyee,
  } = useAppContext();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    handleChange({
      name,
      value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name || !surname || !email) {
      displayAlert('Please provide all values', 'danger');
      return;
    }

    addNewEmplooyee();
    clearInputs();
  };

  const handleClear = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (name || surname || email) {
      displayAlert('All values cleared', 'success');
      clearInputs();
      return;
    }
    displayAlert('Please provide all values', 'danger');
    clearInputs();
  };

  return (
    <Wrapper>
      <form className='form'>
        <h4>add new employee</h4>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow type='text' name='name' value={name} onChange={onChange} />
          <FormRow type='text' name='surname' value={surname} onChange={onChange} />
          <FormRow type='email' name='email' value={email} onChange={onChange} />
          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              onClick={handleSubmit}
            >
              submit
            </button>
            <button className='btn btn-block clear-btn' onClick={handleClear}>
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddContainer;

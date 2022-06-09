import React from 'react';
import { useAppContext } from '../context/appContext';
import Alert from '../components/Alert';
import FormRow from '../components/FormRow';
import FormRowSelect from '../components/FormRowSelect';
import Wrapper from '../assets/Wrappers/SearchContainer';

const AddContainer = () => {
  const {
    name,
    email,
    handleChange,
    displayAlert,
    showAlert,
    clearInputs,
    addNewEmplooyee,
    isEditing,
    seniorityListOptions,
    seniority,
    cityListOptions,
    city,
    roleListOptions,
    role,
    editEmployee,
    clearEdit,
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
    if (isEditing) {
      editEmployee();
      return;
    }
    if (!name || !email) {
      displayAlert();
      return;
    }

    addNewEmplooyee();
    clearInputs();
  };

  const handleClear = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (isEditing) {
      clearEdit();
    }
    if (name || email) {
      clearInputs();
      return;
    }
    displayAlert();
    clearInputs();
  };

  return (
    <Wrapper>
      <form className='form'>
        {isEditing ? <h4>Edit your employee</h4> : <h4>add new employee</h4>}
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow type='text' name='name' value={name} onChange={onChange} />
          <FormRow type='email' name='email' value={email} onChange={onChange} />
          <FormRowSelect
            list={seniorityListOptions}
            name='seniority'
            value={seniority}
            onChange={onChange}
          />
          <FormRowSelect
            list={roleListOptions}
            name='role'
            value={role}
            onChange={onChange}
          />
          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              onClick={handleSubmit}
            >
              {isEditing ? 'edit' : 'submit'}
            </button>
            <button className='btn btn-block clear-btn' onClick={handleClear}>
              {isEditing ? 'Go Back' : 'Clear'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddContainer;

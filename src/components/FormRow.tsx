interface FormRowProps {
  labelText?: string;
  type: string;
  name: string;
  value: any;
  onChange: any;
}

const FormRow: React.FC<FormRowProps> = ({ labelText, type, name, value, onChange }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText ? labelText : name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className='form-input'
      />
    </div>
  );
};

export default FormRow;

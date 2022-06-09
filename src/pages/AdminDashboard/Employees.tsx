import { userInfo } from 'os';
import { useParams } from 'react-router-dom';
import AddContainer from '../../components/AddContainer';
import EmployeeContainer from '../../components/EmployeeContainer';
const Employees = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <AddContainer />
      <EmployeeContainer />
    </>
  );
};

export default Employees;

import AddForm from '../../components/AddForm';
import ProjectsContainer from '../../components/ProjectsContainer';

const AllProjects = () => {
  return (
    <>
      <AddForm nameOfInput='project' />
      <ProjectsContainer />
    </>
  );
};

export default AllProjects;

import AddForm from '../../components/AddForm';
import ProjectsContainer from '../../components/ProjectsContainer';
import { useAppContext } from '../../context/appContext';

const AllProjects = () => {
  const { isEditingProject, editProject, project, addNewProject } = useAppContext();
  return (
    <>
      <AddForm
        category='isEditingProject'
        nameOfInput='project'
        editing={isEditingProject}
        editFunc={editProject}
        name={project}
        addNew={addNewProject}
      />
      <ProjectsContainer />
    </>
  );
};

export default AllProjects;

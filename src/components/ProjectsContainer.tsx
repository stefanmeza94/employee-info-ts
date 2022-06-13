import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import Project from '../components/Project';
import Wrapper from '../assets/Wrappers/EmployeeContainer';
import Loading from './Loading';

const ProjectsContainer = () => {
  const { getAllProjects, projects, loading } = useAppContext();

  useEffect(() => {
    getAllProjects();
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  if (projects.length === 0) {
    return (
      <Wrapper>
        <h2>There is no single project</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>{`${projects.length} Projects Found`}</h5>
      <div className='jobs'>
        {projects.map((project: any) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ProjectsContainer;

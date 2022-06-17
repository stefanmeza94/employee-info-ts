import { Routes, Route } from 'react-router-dom';
import { useAppContext } from './context/appContext';

import SharedLayout from './pages/SharedLayout';
import Employees from './pages/AdminDashboard/Employees';
import SingleEmployee from './components/SingleEmployee';
import AllProjects from './pages/AdminDashboard/AllProjects';
import Cities from './pages/AdminDashboard/Cities';
import Countries from './pages/AdminDashboard/Countries';
import Technologies from './pages/AdminDashboard/Technologies';
import Seniorities from './pages/AdminDashboard/Seniorities';
import ProjectManagers from './pages/AdminDashboard/ProjectsManagers';
import SystemAdministrators from './pages/AdminDashboard/SystemAdministrators';

import AllEmployees from './pages/ProjectManagerDashboard/AllEmployees';
import MyEmployees from './pages/ProjectManagerDashboard/MyEmployees';
import Projects from './pages/ProjectManagerDashboard/Projects';

import Landing from './pages/Landing';
import ProtectedRoute from './pages/ProtectedRoute';

import NotFound from './pages/NotFound';

function App() {
  const { user } = useAppContext();

  return (
    <Routes>
      {user && user.role === 'SYSTEM_ADMIN' ? (
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Employees />} />
          <Route path='/:employeeId' element={<SingleEmployee />} />
          <Route path='all-projects' element={<AllProjects />} />
          <Route path='cities' element={<Cities />} />
          <Route path='countries' element={<Countries />} />
          <Route path='seniorities' element={<Seniorities />} />
          <Route path='technologies' element={<Technologies />} />
          <Route path='project-managers' element={<ProjectManagers />} />
          <Route path='system-administrators' element={<SystemAdministrators />} />
        </Route>
      ) : (
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AllEmployees />} />
          <Route path='my-employees' element={<MyEmployees />} />
          <Route path='all-projects' element={<Projects />} />
        </Route>
      )}
      <Route path='/landing' element={<Landing />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

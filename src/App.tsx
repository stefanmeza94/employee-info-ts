import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAppContext } from './context/appContext';

import SharedLayout from './pages/SharedLayout';
import Employees from './pages/AdminDashboard/Employees';
import AllProjects from './pages/AdminDashboard/AllProjects';
import Cities from './pages/AdminDashboard/Cities';
import Countries from './pages/AdminDashboard/Countries';
import Positions from './pages/AdminDashboard/Positions';
import Seniorities from './pages/AdminDashboard/Seniorities';
import ProjectManagers from './pages/AdminDashboard/ProjectsManagers';
import SystemAdministrators from './pages/AdminDashboard/SystemAdministrators';

import AllEmployees from './pages/ProjectManagerDashboard/AllEmployees';
import MyEmployees from './pages/ProjectManagerDashboard/MyEmployees';
import Projects from './pages/ProjectManagerDashboard/Projects';

import Landing from './pages/Landing';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const { user } = useAppContext();

  return (
    <Routes>
      {user && user.role == 'SYSTEM_ADMIN' ? (
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Employees />} />
          <Route path='all-projects' element={<AllProjects />} />
          <Route path='cities' element={<Cities />} />
          <Route path='countries' element={<Countries />} />
          <Route path='seniorities' element={<Seniorities />} />
          <Route path='positions' element={<Positions />} />
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
    </Routes>
  );
}

export default App;

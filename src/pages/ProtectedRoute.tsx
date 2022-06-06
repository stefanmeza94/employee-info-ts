import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps): any => {
  const { user } = useAppContext();

  if (!user) {
    return <Navigate to='/landing' />;
  }

  return children;
};

export default ProtectedRoute;

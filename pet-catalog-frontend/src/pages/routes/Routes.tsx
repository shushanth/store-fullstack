import { Routes, Route } from 'react-router';
import PetDetails from '../petDetails/PetDetails';
import PetList from '../petList/PetList';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../../common/Error';
import * as Styled from '../../common/styled';

const PageRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary fallback={<Error />}>
            <PetList />
          </ErrorBoundary>
        }
      ></Route>
      <Route
        path=":/id"
        element={
          <ErrorBoundary fallback={<Error />}>
            <PetDetails />
          </ErrorBoundary>
        }
      ></Route>
    </Routes>
  );
};

export default PageRoutes;

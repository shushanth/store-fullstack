import React from 'react';
import { Routes, Route } from 'react-router';
import PetList from '../petList/PetList';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../../common/Error';
import Loading from '../../common/Loading';

const PetDetails = React.lazy(() => import('../petDetails/PetDetails'));
const PageRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary fallback={<Error />}>
            <React.Suspense fallback={<Loading />}>
              <PetList />
            </React.Suspense>
          </ErrorBoundary>
        }
      ></Route>
      <Route
        path="/pet/:id"
        element={
          <ErrorBoundary fallback={<Error />}>
            <React.Suspense fallback={<Loading />}>
              <PetDetails />
            </React.Suspense>
          </ErrorBoundary>
        }
      ></Route>
    </Routes>
  );
};

export default PageRoutes;

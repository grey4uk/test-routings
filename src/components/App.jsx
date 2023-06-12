import { Layout } from 'components/Layout/Layout';
import { lazy
//         , useEffect
       } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { refreshUser } from 'redux/auth/authOperations';
// import { selectIsRefreshing } from 'redux/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const NotFoundPage = lazy(() => import('../pages/NoFound/NotFound'));

export const App = () => {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

  return false ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
     <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route index element={<HomePage />}/>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute redirectTo="/notfound" component={<NotFoundPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

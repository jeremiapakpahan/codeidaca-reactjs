import React from 'react';
import { Navigate, useRoutes,Outlet,useNavigate } from 'react-router-dom';
import AppLayout from './component/layout/AppLayout';
import LandingPage from './component/layout/LandingPage';
import MainLayout from './component/layout/MainLayout';
import Page404 from './views/404/Page404';
import Bootcamp from './views/bootcamp/Bootcamp'
import Signin from './component/layout/Signin';
import Dashboard from './views/app/dashboard/Dashboard';
import Candidat from './views/app/candidat/Candidat';
import Batch from './views/app/batch/Batch';
import Curriculum from './views/app/curriculum/Curriculum';
import Hiring from './views/app/hiring/Hiring';
import Setting from './views/app/setting/Setting';
import Talent from './views/app/talent/Talent'
import BlankLayout from './component/layout/BlankLayout';
import Signup from './component/layout/Signup';
import Jurusan from './views/app/dashboard/Jurusannn';
import Jurusann from './views/app/dashboard/App';
import Test from './views/app/dashboard/Jurusan';
import Pendidikan from './views/app/dashboard/BoardIdle';
import Profile from './views/app/talent/SettingProfile'
import Chart from './views/app/dashboard/UniversitasChart';
import ReactChart from './views/app/dashboard/UniversitasChart';


export default function Routes(isLoggedIn) {
  return useRoutes([
    {
      path: '/',
      element: <LandingPage/>,
      children: [
        { path: 'signin', element: <Navigate to="/auth/signin"  />  },
        { path: 'signup', element: <Navigate to="/auth/signup"  />  },
        { path: 'bootcamp', element: <Bootcamp/> },
        { path: '404', element: <Page404 /> },
      ]
    },
    {
      path: '/auth',
      element: <BlankLayout/>,
      children: [
        { path: 'signin', element: <Signin/> },
        { path: 'signup', element: <Signup/> },
      ]
    },
    {
      path: '/app',
      element:  <AppLayout/>,
      children: [
        { path: 'dashboard', element: isLoggedIn ? <Dashboard/> : <Navigate to="/auth/signin"/>},
        { path: 'candidat', element: isLoggedIn ? <Candidat/>: <Navigate to="/auth/signin"/> },
        { path: 'batch', element: isLoggedIn ? <Batch /> : <Navigate to="/auth/signin"/>},
        { path: 'talent', element: isLoggedIn ? <Talent />: <Navigate to="/auth/signin"/> },
        { path: 'curriculum', element: isLoggedIn ? <Curriculum />: <Navigate to="/auth/signin"/> },
        { path: 'hiring', element: isLoggedIn ? <Hiring /> : <Navigate to="/auth/signin"/> },
        { path: 'setting', element: isLoggedIn ? <Setting /> : <Navigate to="/auth/signin"/> },
        { path: 'jurusan', element: <Jurusan/>},
        { path: 'jurusann', element: <Pendidikan/>},
        { path: 'test', element: <Test/>},
        { path: 'chart', element: <Chart/>},
        { path: 'rc', element: <ReactChart/>}
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}




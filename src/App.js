import './App.css';
import RootLayout from './components/Root';
import HomePage from './components/Home';
import Auth,{action as authAction,} from './pages/Auth';
import ErrorPage from './components/Error'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { tokenLoader } from './util/auth';
import { action as logoutAction } from './pages/Logout';
const router=createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    id:"root",
    errorElement:<ErrorPage/>,
    loader:tokenLoader,
    children:[
      {index:true,element:<HomePage/>},
      {path:"auth",element:<Auth/>,action:authAction},
      {path: 'logout',action: logoutAction,},
    ]
  }
])
function App() {
  return <RouterProvider router={router}/>;
}

export default App;

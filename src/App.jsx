import { BrowserRouter, Routes, Route, useMatch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import Auth from './pages/Auth.page';
import NotFound from './components/NotFound';
import Home from './pages/Home.page';
import Settings from './pages/Settings.page'
import Snippets from './pages/Snippets.page'
import Nav from './components/Nav.section';
import UnprotectedRoute from './middleware/UnprotectedRoute.md';
import ProtectedRoute from './middleware/ProtectedRoute.md';
import store from './redux/store';
import Welcome from './components/Welcome.section';
import About from './pages/About.page';
import setupAxiosInterceptors from './utils/axiosInterceptors';
import Profile from './pages/Profile.page';

setupAxiosInterceptors();

function App() {
  //console.log("App Rendering")  
  return ( 
    <Provider store={store}>
      <BrowserRouter>
        <Root />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </BrowserRouter>
    </Provider>
  );
}

function Root() {
  const match = useMatch({ path: '/' })

  return (
    <>
      {!match ? <Nav /> : <></>}
      <Routes>
        <Route path='/' element={<UnprotectedRoute><Auth /></UnprotectedRoute>} />
        <Route path='/welcome' element={<ProtectedRoute><Welcome /></ProtectedRoute>} />
        <Route path='/settings' element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path='/snippets' element={<ProtectedRoute><Snippets /></ProtectedRoute>} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='*' element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
 
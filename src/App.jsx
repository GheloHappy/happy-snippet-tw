import { BrowserRouter, Routes, Route, useMatch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Auth from './pages/Auth.page';
import NotFound from './components/NotFound';
import Home from './pages/Home.page';
import Profile from './pages/Profile.page'
import Snippets from './pages/Snippets.page'
import Nav from './components/Nav.section';
import UnprotectedRoute from './middleware/UnprotectedRoute.md';
import ProtectedRoute from './middleware/ProtectedRoute.md';
import store from './redux/store';

function App() {
  console.log("App Rendering")
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  );
}

function Root() {
  const match = useMatch({ path: '/' })

  return (
    //update middleware 
    <>
      {!match ? <Nav /> : <></>}
      <Routes>
        <Route path='/' element={<UnprotectedRoute><Auth /></UnprotectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/snippets' element={<ProtectedRoute><Snippets /></ProtectedRoute>} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='*' element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App

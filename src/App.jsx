import { BrowserRouter, Routes, Route, useMatch } from 'react-router-dom';
import Auth from './pages/Auth.page';
import NotFound from './components/NotFound';
import Home from './pages/Home.page';
import Profile from './pages/Profile.page'
import Snippets from './pages/Snippets.page'
import Nav from './components/Nav.section';
import UnprotectedRoute from './middleware/UnprotectedRoute.md';
import ProtectedRoute from './middleware/ProtectedRoute.md';

function App() {
  console.log("App Rendering")
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

function Root() {
  const match = useMatch({path: '/'}) 

  return (
    //update   middleware 
    <>
      {!match ? <Nav /> : <></>} 
      <Routes> 
        <Route path='/' element={<UnprotectedRoute><Auth /></UnprotectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/snippets' element={<ProtectedRoute><Snippets /></ProtectedRoute>} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

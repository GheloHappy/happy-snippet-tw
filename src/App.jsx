import { BrowserRouter, Routes, Route, useMatch } from 'react-router-dom';
import Auth from './pages/Auth.page';
import NotFound from './components/NotFound';
import Home from './pages/Home.page';
import Profile from './pages/Profile.page'
import Snippets from './pages/Snippets.page'
import Nav from './components/Nav.section';

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
    //update middleware
    <>
      {!match ? <Nav /> : <></>} 
      <Routes> 
        <Route path='/' element={<Auth />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/snippets' element={<Snippets />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

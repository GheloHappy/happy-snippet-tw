import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth.page';
import NotFound from './components/NotFound';
import Home from './pages/Home.page';

function App() {
  console.log("App Rendering")
  return (
    <BrowserRouter>
        <Root />
    </BrowserRouter>
  );
}

function Root() {
  return (
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  )
}

export default App

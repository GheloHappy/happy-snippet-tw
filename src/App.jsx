import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth.page';

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
      </Routes>
  )
}

export default App

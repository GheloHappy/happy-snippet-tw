import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      </Routes>
  )
}

export default App

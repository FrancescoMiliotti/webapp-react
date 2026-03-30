import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import DefaultLayout from './layouts/DefaultLayout';
import DettagliMovie from './pages/DettagliMovie';




function App() {
  


  return <BrowserRouter>

    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" Component={HomePage} />
        <Route path="/Movies" Component={Movies} />
        <Route path="/DettagliMovie/:id" Component={DettagliMovie} />
      </Route>
    </Routes>



  </BrowserRouter>;
}

export default App

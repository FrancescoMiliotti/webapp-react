import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import DefaultLayout from './layouts/DefaultLayout';
import Reviews from './pages/Reviews';




function App() {


  return <BrowserRouter>

    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" Component={HomePage} />
        <Route path="/Movies" Component={Movies} />
        <Route path="/Reviews/:id" Component={Reviews} />
      </Route>
    </Routes>



  </BrowserRouter>;
}

export default App

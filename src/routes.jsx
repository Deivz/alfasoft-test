import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from './components/DefaultPage/DefaultPage';
import Add from './pages/Add/Add';

export default function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          {/* <Route index element={< Games />} /> */}
          <Route path='/add' element={<Add />} />
        </Route>
      </Routes>
    </Router >
  );
}
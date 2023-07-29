import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from './components/DefaultPage/DefaultPage';

export default function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          {/* <Route index element={< Games />} />
          <Route path='auth' element={<Login />} />
          <Route path='register' element={<Login />} />
          <Route path='*' element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router >
  );
}
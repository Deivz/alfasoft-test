import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from './components/DefaultPage/DefaultPage';
import Add from './pages/Add/Add';
import AuthContextProvider from './contexts/AuthContext';
import Contacts from './pages/Contacts/Contacts';
import ContactContextProvider from './contexts/ContactContext';

export default function AppRouter() {

  return (
    <Router>
      <AuthContextProvider>
        <ContactContextProvider>
          <Routes>
            <Route path='/' element={<DefaultPage />}>
              <Route index element={< Contacts />} />
              <Route path='/add' element={<Add />} />
            </Route>
          </Routes>
        </ContactContextProvider>
      </AuthContextProvider>
    </Router >
  );
}
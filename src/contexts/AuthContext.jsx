import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../config/firebase';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      window.location.reload();
    } catch (error) {
      const errorCode = error.code;
      let message = '';

      switch (errorCode) {
        case 'auth/user-not-found':
          message = 'User not found'
          register();
          break;
        case 'auth/wrong-password':
          message = 'Wrong password';
          break;

        default:
          message = 'Authentication error';
          break;
      }

      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  const logout = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    } catch (error) {
      toast.error('Something went wrong, contact the support', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Success!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate('/');
    } catch (error) {
      const errorCode = error.code;
      let message = '';

      switch (errorCode) {
        case 'auth/invalid-email':
          message = 'Invalid e-mail';
          break;

        case 'auth/missing-password':
          message = "Password can't be empty";
          break;

        case 'auth/weak-password':
          message = 'Password must have at least 6 characters';
          break;

        case 'auth/email-already-in-use':
          message = 'User already registered';
          break;
      }

      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword, login, logout, register, user }}>
      {children}
    </AuthContext.Provider>
  );
}
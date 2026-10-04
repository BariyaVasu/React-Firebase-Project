import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { firebaseApp } from "../configs/firebaseConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const navigate = useNavigate();

  const signupUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User Register");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signinUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User Login");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signinWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("User Login");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = [signupUser, signinUser, signinWithGoogle];
  
  return (
    <AuthContext.Provider value={{ value }}>
      {props.children}
    </AuthContext.Provider>
  );
};

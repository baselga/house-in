
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import {
  useContext,
  createContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { SECTIONS } from '../config/sections';

export type LoginProps = {
  email: string;
  password: string;
};

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextState {
  user?: User | null;
}

interface AuthContextInterface {
  user?: User | null;
  isLogin: boolean;
  login: (arg: LoginProps) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export function AuthProvider({ children }: AuthContextProps) {  
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthContextState['user']>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const login = useCallback(
    ({ email, password }: LoginProps) => {      
      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigate(SECTIONS.home.path))
        .catch((error) => {
          console.error('Error', {
            code: error.code,
            message: error.message,
          });
        });
    },
    [navigate],
  );

  const logout = useCallback(
    () => signOut(auth).then(() => navigate(SECTIONS.login.path)),
    [navigate],
  );

  const context = useMemo(
    () => ({
      user,
      isLogin: !!user,
      login,
      logout,
    }),
    [login, logout, user],
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside the AuthProvider"
    );
  }

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export default useAuthContext;

import { SECTIONS } from "@/presentation/config/sections";
import useAuthContext from "@/presentation/helpers/authContext";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const navigate = useNavigate();
  const authContext = useAuthContext();

  if (!authContext.isLogin) {
    navigate(SECTIONS.login.path);
  }

  return children;
};

export default RequireAuth;

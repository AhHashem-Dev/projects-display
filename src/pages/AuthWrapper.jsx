import { useAuth0 } from "@auth0/auth0-react";

const AuthWrapper = ({ children }) => {
  const { isLoading } = useAuth0();

  if (isLoading) return;

  return <div>{children}</div>;
};

export default AuthWrapper;

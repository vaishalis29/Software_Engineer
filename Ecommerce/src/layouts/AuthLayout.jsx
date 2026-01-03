const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
};

import { Outlet } from "react-router-dom";
export default AuthLayout;

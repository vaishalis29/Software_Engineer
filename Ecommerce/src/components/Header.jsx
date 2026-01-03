import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  const userStr = localStorage.getItem("user");
  const user =
    userStr && userStr !== "undefined" ? JSON.parse(userStr) : null;


  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="header">
      <h2 className="logo" onClick={() => navigate("/")}>
        ShopNow
      </h2>

      <nav className="nav-buttons">
        <NavLink to="/" className="nav-btn">
          Home
        </NavLink>

        {user ? (
          <>
            {/* 👤 USER FIRST LETTER */}
            <div className="user-avatar">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <button className="nav-btn outline" onClick={logoutHandler}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="nav-btn outline">
              Login
            </NavLink>

            <NavLink to="/register" className="nav-btn primary">
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

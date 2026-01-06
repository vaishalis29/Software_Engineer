import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      // ✅ backend response correct-aa irundhaa
      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);

        // user object irundhaa mattum store pannum
        if (res.data.user) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }

        alert("Registered successfully 🎉");
        navigate("/");
      } else {
        alert("Registration failed ❌");
      }
    } catch (err) {
      console.error("Register error:", err.response?.data || err.message);
      alert(
        err.response?.data?.message || "Registration failed ❌"
      );
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submitHandler}>
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>

        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>
      </form>
    </div>
  );
};

export default Register;

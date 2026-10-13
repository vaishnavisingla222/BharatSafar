
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData;

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Frontend validation only.
    // Real login requires backend authentication.
    setError(
      "Login form validated. Connect an authentication service to sign in."
    );
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left visual section */}
        <div className="login-visual">
          <div className="login-visual-content">
            <span className="login-eyebrow">
              अतिथि देवो भवः
            </span>

            <h1>
              Your next
              <br />
              adventure awaits.
            </h1>

            <p>
              Sign in to plan your journeys, discover incredible
              destinations, and keep all your travel memories together.
            </p>

            <div className="login-highlight">
              <span>✦</span>
              <span>Explore India, your way.</span>
            </div>
          </div>
        </div>

        {/* Right login section */}
        <div className="login-form-section">
          <div className="login-form-wrapper">
            <Link to="/" className="login-brand">
              भारत<span>Safar</span>
            </Link>

            <h2>Welcome Back!</h2>

            <p className="login-subtitle">
              Sign in to continue your journey.
            </p>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-field">
                <label htmlFor="login-email">Email Address</label>

                <input
                  type="email"
                  id="login-email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="login-field">
                <label htmlFor="login-password">Password</label>

                <input
                  type={showPassword ? "text" : "password"}
                  id="login-password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />
              </div>

              <div className="login-options">
                <label className="login-show-password">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={(e) =>
                      setShowPassword(e.target.checked)
                    }
                  />
                  Show password
                </label>

                <Link to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>

              {error && (
                <p className="login-message" role="status">
                  {error}
                </p>
              )}

              <button type="submit" className="login-submit">
                Login <span>→</span>
              </button>
            </form>

            <p className="login-register-text">
              Don't have an account?{" "}
              <Link to="/register">Create Account</Link>
            </p>

            <Link to="/" className="login-back-home">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

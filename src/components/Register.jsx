import { useState } from "react";
import styles from "../css/Register.module.css"; // new CSS

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{10,15}$/;

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const validate = () => {
  const newErrors = {};

  if (!formData.name) newErrors.name = 'Name is required';

  if (!formData.email) newErrors.email = 'Email is required';
  else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';

  if (!formData.password) newErrors.password = 'Password is required';
  else if (!passwordRegex.test(formData.password))
    newErrors.password = 'Password must be at least 6 characters, include a number & special character';

  if (formData.password !== formData.confirmPassword)
    newErrors.confirmPassword = 'Passwords do not match';

  if (formData.phone && !phoneRegex.test(formData.phone))
    newErrors.phone = 'Invalid phone number (use digits, with optional +country code)';

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert(result.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Could not connect to the server.");
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successBox}>
          <div className={styles.successIcon}>
            <svg
              width="80"
              height="70"
              viewBox="0 0 24 24"
              fill="#4CAF50"
              margin-top="2rem"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h1 className={styles.successTitle}>Registration Successful!</h1>
          <p className={styles.successMessage}>
            Thank you, {formData.name}! Your account has been created
            successfully.
          </p>
          <a href="/" className={styles.primaryBtn}>
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.registerPage}>
      {/* Hero Section */}

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Register Your Account</h1>
            <p className={styles.heroSubtitle}>
              Register now to participate in events and connect with our
              community.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.registerPages}>
        <div className={styles.registerWrapper}>
          {/* Form Section - Left */}
          <div className={styles.registerContainer}>
            <h1 className={styles.title}>Register Your Account</h1>
            <p className={styles.subtitle}>
              Register to participate in events and engage with the community.
            </p>

            <form onSubmit={handleSubmit} className={styles.registerForm}>
              <div className={styles.formGroup}>
                <label>
                  Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full name"
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>
                  Password <span className={styles.required}>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                />
                {errors.password && (
                  <span className={styles.error}>{errors.password}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>
                  Confirm Password <span className={styles.required}>*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                />
                {errors.confirmPassword && (
                  <span className={styles.error}>{errors.confirmPassword}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Optional phone number"
                />
                {errors.phone && (
                  <span className={styles.error}>{errors.phone}</span>
                )}
              </div>

              <div className={styles.formActions}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.primaryBtn}
                >
                  {isSubmitting ? "Registering..." : "Register"}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      name: "",
                      email: "",
                      password: "",
                      confirmPassword: "",
                      phone: "",
                    })
                  }
                  className={styles.secondaryBtn}
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Image Section - Right */}
        <div className={styles.imageSection}>
          <img src="11669604_20943830.svg" alt="Register Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Register;

import { useState } from "react";
import styles from "../css/Feedback.module.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    eventAttended: "",
    rating: "",
    comments: "",
    anonymous: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const userTypes = ["Student", "Faculty", "Staff", "Guest"];
  const events = ["Orientation", "Workshop", "Seminar", "Sports Day"];
  const ratings = [
    { value: "5", label: "Excellent" },
    { value: "4", label: "Good" },
    { value: "3", label: "Average" },
    { value: "2", label: "Poor" },
    { value: "1", label: "Very Poor" },
  ];

  // Regex Patterns
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,50}$/; // only characters + spaces
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const commentsRegex = /^[\wÀ-ÖØ-öø-ÿ.,!?'"()\-:;@#&%*+=\/\s]{10,1000}$/u;

  // Live validation per field
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!formData.anonymous && (!value.trim() || !nameRegex.test(value))) {
          return "Name must contain only letters and spaces (2–50 chars).";
        }
        break;
      case "email":
        if (!formData.anonymous && (!value.trim() || !emailRegex.test(value))) {
          return "Please enter a valid email address.";
        }
        break;
      case "userType":
        if (!value) return "Please select a user type.";
        break;
      case "eventAttended":
        if (!value) return "Please select the event you attended.";
        break;
      case "rating":
        if (!value) return "Please select a rating.";
        break;
      case "comments":
        if (!value.trim() || !commentsRegex.test(value)) {
          return "Comments must be 10–1000 characters and valid text.";
        }
        break;
      default:
        return "";
    }
    return "";
  };

  const validateAll = (data) => {
    const e = {};
    Object.keys(data).forEach((key) => {
      const error = validateField(key, data[key]);
      if (error) e[key] = error;
    });
    return e;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    // Block invalid characters in name (no numbers/symbols allowed)
    if (name === "name") {
      if (/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(newValue)) {
        return; // Ignore invalid character input
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Live validation for each field
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, newValue),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateAll(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const feedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]");
    feedbacks.push({
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      userType: "",
      eventAttended: "",
      rating: "",
      comments: "",
      anonymous: false,
    });
  };

  if (isSubmitted) {
    return (
      <div className={styles.feedback}>
        <section className={`${styles.hero} ${styles.thankyouHero}`}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.successIcon}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 
                  10 10 10 10-4.48 10-10S17.52 2 
                  12 2zm-2 15l-5-5 1.41-1.41L10 
                  14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h1 className={styles.heroTitle}>Thank You!</h1>
              <p className={styles.heroSubtitle}>
                Your feedback has been successfully submitted. We appreciate
                your input!
              </p>
              <div className={styles.successActions}>
                <a href="/" className="btn btn-outline">
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.feedback}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Share Your Feedback</h1>
            <p className={styles.heroSubtitle}>
              Your feedback helps us improve our events and services.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formFlex}>
            <form onSubmit={handleSubmit} className={styles.feedbackForm}>
              <div className={styles.formRow}>
                <div className="form-group">
                  <label htmlFor="name">
                    Name{" "}
                    {!formData.anonymous && (
                      <span className={styles.required}>*</span>
                    )}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={formData.anonymous}
                    required={!formData.anonymous}
                    className={`form-control ${styles.formInput}`}
                  />
                  {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email{" "}
                    {!formData.anonymous && (
                      <span className={styles.required}>*</span>
                    )}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={formData.anonymous}
                    required={!formData.anonymous}
                    className={`form-control ${styles.formInput}`}
                  />
                  {errors.email && (
                    <p className={styles.error}>{errors.email}</p>
                  )}
                </div>
              </div>

              <div className={styles.anonymousOption}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxText}>
                    Submit anonymously
                  </span>
                </label>
              </div>

              <div className={styles.formRow}>
                <div className="form-group">
                  <label htmlFor="userType">
                    User Type <span className={styles.required}>*</span>
                  </label>
                  <select
                    name="userType"
                    id="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select User Type</option>
                    {userTypes.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                  {errors.userType && (
                    <p className={styles.error}>{errors.userType}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="eventAttended">
                    Event Attended <span className={styles.required}>*</span>
                  </label>
                  <select
                    name="eventAttended"
                    id="eventAttended"
                    value={formData.eventAttended}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select Event</option>
                    {events.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                  {errors.eventAttended && (
                    <p className={styles.error}>{errors.eventAttended}</p>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>
                  Rating <span className={styles.required}>*</span>
                </label>
                <div className={styles.ratingGroup}>
                  {ratings.map((r) => (
                    <label key={r.value} className={styles.ratingLabel}>
                      <input
                        type="radio"
                        name="rating"
                        value={r.value}
                        checked={formData.rating === r.value}
                        onChange={handleInputChange}
                        className={styles.ratingInput}
                        required
                      />
                      <span className={styles.ratingText}>
                        {r.value} - {r.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.rating && (
                  <p className={styles.error}>{errors.rating}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="comments">
                  Comments <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  placeholder="Share your thoughts..."
                  rows="6"
                  required
                  className={`form-control ${styles.formTextarea}`}
                />
                {errors.comments && (
                  <p className={styles.error}>{errors.comments}</p>
                )}
              </div>

              <div className={styles.formActions}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      name: "",
                      email: "",
                      userType: "",
                      eventAttended: "",
                      rating: "",
                      comments: "",
                      anonymous: false,
                    })
                  }
                  className="btn btn-secondary"
                >
                  Clear Form
                </button>
              </div>
            </form>

            <div className={styles.formImage}>
              <img src={"./13962036_5410961.jpg"} alt="Feedback Illustration" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;

import { useState } from "react";
import contactData from "../data/contact.json";
import styles from "../css/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const subjectRegex = /^.{3,100}$/;
    const messageRegex = /^.{10,500}$/;

    let newErrors = {};

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Please enter a valid name (only letters, 3–50 chars).";
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!subjectRegex.test(formData.subject)) {
      newErrors.subject = "Subject must be between 3 and 100 characters.";
    }
    if (!messageRegex.test(formData.message)) {
      newErrors.message = "Message must be between 10 and 500 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    contacts.push({
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className={styles.contact}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.successIcon}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h1 className={styles.heroTitle}>Message Sent!</h1>
              <p className={styles.heroSubtitle}>
                Thank you for reaching out! We'll get back to you within 24 hours.
              </p>
              <div className={styles.successActions}>
                <a href="/" className="btn btn-outline">Back to Home</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroSubtitle}>
              Have questions, suggestions, or need help? We're here to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Contact Form (Left) */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Send us a Message</h2>
              <p className={styles.sectionSubtitle}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className={styles.errorText}>{errors.subject}</p>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitButton}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              <div className={styles.officeHours}>
                <h3 className={styles.hoursTitle}>Office Hours</h3>
                <div className={styles.hoursList}>
                  <div className={styles.hoursItem}>
                    <span className={styles.hoursDay}>Monday - Friday</span>
                    <span className={styles.hoursTime}>{contactData.office_hours.monday_friday}</span>
                  </div>
                  <div className={styles.hoursItem}>
                    <span className={styles.hoursDay}>Saturday</span>
                    <span className={styles.hoursTime}>{contactData.office_hours.saturday}</span>
                  </div>
                  <div className={styles.hoursItem}>
                    <span className={styles.hoursDay}>Sunday</span>
                    <span className={styles.hoursTime}>{contactData.office_hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Departments (Right) */}
            <div className={styles.infoSection}>
              <h2 className={styles.sectionTitle}>Departments</h2>
              <p className={styles.sectionSubtitle}>
                Get in touch with specific departments for specialized assistance.
              </p>

              <div className={styles.departmentsList}>
                {contactData.departments.map((dept, index) => (
                  <div key={index} className={styles.departmentItem}>
                    <h3 className={styles.departmentName}>{dept.name}</h3>
                    <p className={styles.departmentContact}>{dept.contact}</p>
                    <p className={styles.departmentEmail}>{dept.email}</p>
                    <p className={styles.departmentPhone}>{dept.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <div className={styles.infoRow}>
        <div className={styles.emergencyInfo}>
          <h3 className={styles.emergencyTitle}>Emergency Contacts</h3>
          <div className={styles.emergencyList}>
            <div className={styles.emergencyItem}>
              <span className={styles.emergencyLabel}>Campus Security</span>
              <span className={styles.emergencyNumber}>{contactData.emergency.campus_security}</span>
            </div>
            <div className={styles.emergencyItem}>
              <span className={styles.emergencyLabel}>Health Center</span>
              <span className={styles.emergencyNumber}>{contactData.emergency.health_center}</span>
            </div>
            <div className={styles.emergencyItem}>
              <span className={styles.emergencyLabel}>Counseling</span>
              <span className={styles.emergencyNumber}>{contactData.emergency.counseling}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2 className={styles.sctionTitle}>Find Us on Campus</h2>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3139925216783!2d67.14924997401282!3d24.887269144186877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1757737402054!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="College Location Map"
              className={styles.mapIframe}
            ></iframe>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
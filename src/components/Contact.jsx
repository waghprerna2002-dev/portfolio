import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setMessage(
        "✗ EmailJS is not configured yet. Please add your EmailJS service, template, and public key.",
      );
      setMessageType("error");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      setMessage("✓ Message sent successfully! I will get back to you soon.");
      setMessageType("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setMessage("✗ Failed to send message. Please try again later.");
      setMessageType("error");
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Have a project in mind? Let's collaborate!
        </p>

        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.infoCard}>
              <div className={styles.icon}>📧</div>
              <h3>Email</h3>
              <a href="mailto:prerna@email.com">prerna@email.com</a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}>💼</div>
              <h3>LinkedIn</h3>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with me
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}>💻</div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/waghprerna2002-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my projects
              </a>
            </div>
          </div>

          <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Project inquiry"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {message && (
              <div className={`${styles.message} ${styles[messageType]}`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

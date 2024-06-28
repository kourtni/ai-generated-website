import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { countries } from './countries';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  workEmail: string;
  jobTitle: string;
  country: string;
  reasonForContacting: string;
  marketingConsent: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    workEmail: '',
    jobTitle: '',
    country: 'United States',
    reasonForContacting: '',
    marketingConsent: false,
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just simulate a successful submission
    setTimeout(() => {
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className={styles.contactForm}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="workEmail">Work Email</label>
          <input
            type="email"
            id="workEmail"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="reasonForContacting">Reason For Contacting</label>
          <textarea
            id="reasonForContacting"
            name="reasonForContacting"
            value={formData.reasonForContacting}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="marketingConsent"
            name="marketingConsent"
            checked={formData.marketingConsent}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="marketingConsent">
            Sign me up to receive future marketing communications regarding Chan-Ko LLC companies'
            products, services, and events.
          </label>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
      {submitStatus === 'success' && (
        <p className={styles.successMessage}>Your message has been sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className={styles.errorMessage}>There was an error sending your message. Please try again.</p>
      )}
      <p className={styles.disclaimer}>
        By submitting this form, I authorize Chan-Ko LLC companies to contact me regarding this inquiry or according to my choice to register for future communications.
      </p>
    </div>
  );
};

export default ContactForm;

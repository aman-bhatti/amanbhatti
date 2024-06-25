'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8g9k46i", // Replace with your EmailJS service ID
        "template_ab6fss9", // Replace with your EmailJS template ID
        formData,
        "Y0OMlKc5N4P6Atch2", // Replace with your EmailJS user ID
      )
      .then(
        (result: { text: any; }) => {
          console.log(result.text);
          alert("Message sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error: { text: any; }) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        },
      );
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button className="submit-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
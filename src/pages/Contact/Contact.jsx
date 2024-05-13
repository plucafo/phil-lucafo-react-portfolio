import React, { useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  // Initializing state for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handler for changes in input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  // Handler for form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^\S+@\S+\.\S+$/;
    
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    console.log("Submitted Values:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    alert("Thank you for reaching out!")
  };

  return (
    <div className={styles.container}>
      <h1>Hello, "{name}"</h1>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

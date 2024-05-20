import React, { useState } from "react";
import styles from "./Contact.module.css";
import { ThankYouModal } from "../../components/Modal/Modal";

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
  
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
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      console.log("Submitted Values:", { name, email, message });
      
      setIsModalOpen(true); 
    };
  
    const closeModal = () => {
      setIsModalOpen(false); 
      setName("");
      setEmail("");
      setMessage("");
    };
  
    return (
      <div className={styles.container}>
        <h1>Contact Me</h1>
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
            rows={5}
          />
          <button type="submit">Submit</button>
        </form>
        <ThankYouModal isOpen={isModalOpen} onClose={closeModal} name={name} />
      </div>
    );
  };
  
  export default Contact;

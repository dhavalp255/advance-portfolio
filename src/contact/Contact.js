import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import db from '../Firebase';
import firebase from "firebase";


function Contact() {
  //
  //
  //------------scroll-------------------
  const contactRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;

      if (scroll > 580) {
        contactRef.current.style.transform = `translateY(0vh)`;
      }
    });
  }, []);
  //
  //
  //-------------------backEnd----------------

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  useEffect(() => {}, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!name) {
      alert("please enter your Name");
    }
    if (!email) {
      alert("please enter your Email");
    }

    db.collection("user").add({
      name: name,
      email: email,
      Message: Message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setName("");
    setEmail("");
    setMessage("");
  };
  //
  //
  //---------------return-----------------------
  return (
    <form className="contact" ref={contactRef}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter your Name"
      />
      <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Message"
        value={Message}
        onChange={(e) => setMessage(e.target.value)}
        className="message"
      />
      <button
        type="submit"
        onClick={sendMessage}
        //  disabled={!email || !name}
      >
        Contact me
      </button>
    </form>
  );
}

export default Contact;

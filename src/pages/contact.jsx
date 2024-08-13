import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import Navbar from './navbar';

export const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_znp2qql', 'template_9kgezvu', form.current, {
        publicKey: 'NcFefxl_dNwX3MzwN',
      })
      .then(
        () => {
          setMessageSent(true);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
        <Navbar />
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f9' }}>
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fff', padding: '20px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', maxWidth: '800px' }}>
        <div style={{ flex: 1, paddingRight: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="images\1-contact-us.jpg" alt="Contact Us" style={{ maxWidth: '100%', borderRadius: '15px' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif', fontSize: '24px', color: '#333' }}>Get in touch</h2>
          <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginBottom: '5px', fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}>Name</label>
            <input type="text" name="from_name" style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc', fontFamily: 'Arial, sans-serif' }} />
            <label style={{ marginBottom: '5px', fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}>Email</label>
            <input type="email" name="from_email" style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc', fontFamily: 'Arial, sans-serif' }} />
            <label style={{ marginBottom: '5px', fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}>Message</label>
            <textarea name="message" style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc', fontFamily: 'Arial, sans-serif', resize: 'none', height: '100px' }} />
            <input type="submit" value="Send" style={{ padding: '10px', backgroundColor: 'black', color: 'gold', borderRadius: '5px', border: 'none', cursor: 'pointer', fontFamily: 'Arial, sans-serif', fontSize: '16px' }} />
          </form>
          {messageSent && <p style={{ marginTop: '20px', color: 'green', fontFamily: 'Arial, sans-serif' }}>Your message was sent successfully!</p>}
        </div>
      </div>
    </div>
    </div>
  );
};

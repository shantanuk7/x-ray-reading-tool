'use client';

import React, { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHeart } from 'react-icons/fa';

const Contribute = () => {
  const [formData, setFormData] = useState({
    doctorName: '',
    doctorCertificate: null,
    doctorId: null,
    xrayImage: null,
    description: '',
    label: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    // You can handle the actual form submission here or send data to the server
    toast.success('Thank you for your contribution!', {
      autoClose: 3000,
    });

    // Clear the form after successful submission
    setFormData({
      doctorName: '',
      doctorCertificate: null,
      doctorId: null,
      xrayImage: null,
      description: '',
      label: '',
    });
    const CustomToast = () => (
        <div className="animation-container">
          <p>Thank you for your contribution!</p>
          <FaHeart className="heart-icon" />
        </div>
      );
    
  };

  return (
    <div className='contribute'>
      <div className='contribute-head'>
        <h1>Contribute X-ray Images</h1>
        <p>When you contribute, it helps improve the model.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={formData.doctorName}
          onChange={handleChange}
        />
        <input
          type="file"
          name="doctorCertificate"
          accept=".pdf"
         
        />
        <input
          type="file"
          name="doctorId"
          accept=".pdf"
         
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <select name="label" value={formData.label}
          id="">
            <option value="Normal">Normal</option>
            <option value="Bacterial Pneumonia">Bacterial Pneumonia</option>
            <option value="Viral Pneumonia">Viral Pneumonia</option>
        </select>
        
        <input type="submit" value="Submit" />
      </form>
      <ToastContainer />


    </div>
  );
};

export default Contribute;

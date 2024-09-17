import React from 'react'
import ReactModal from 'react-modal';
import { useState } from "react";
import rightArrow from './Images/doly-okamak-arrow.svg'
import MapComponent from './MapComponent';

ReactModal.setAppElement("#root");

export default function Modalnaya({ isOpenModal, closeModal }) {

  const [inputFields, setInputFields] = useState({
    username: '',
    number: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields({
        ...inputFields,
        [name]: value,
    });
};

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(inputFields);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form submission logic here
            console.log('Form submitted successfully!');
        } else {
            console.log('Form submission failed due to validation errors.');
        }
    };

const validateForm = (data) => {
  const errors = {};

  if (!data.username.trim()) {
      errors.username = 'Username is required';
  } else if (data.username.length < 4) {
      errors.username = 'Username must be at least 4 characters long';
  }

      if (!data.number.trim()) {
        errors.number = 'number is required';
    }   else if (data.number.length < 8) {
        errors.number = 'Number must be at least 8 characters long';
    }

  if (!data.email.trim()) {
      errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
  }

  if (!data.password) {
      errors.password = 'Password is required';
  } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
  }

  if (data.confirmPassword !== data.password) {
      errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};
   
  

  return (
    <>
    <ReactModal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="modal h-[100vh] w-[100vw] backdrop-blur-[1px] bg-white/30 fixed top-0 left-0 flex items-center justify-center">
        <div className="modalContainer bg-[#f5f5f4] w-[850px] h-[600px] rounded-md">
          <div className="mainContainer px-7">
            <div onClick={closeModal} className="close flex justify-end flex-end p-2 items-end">
              <span className='w-[22px] h-[21px] text-black p-1 text-2xl flex items-center justify-center text-bold border-[1px] border-black cursor-pointer'>X</span>
            </div>

            <div className="body flex flex-row gap-2">
              <div className="map w-1/2"> 
                <MapComponent/>
              </div>
              <div className="validation w-1/2">
                <form action="#" onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="insideForm flex flex-col gap-2">
                    <label className="form-label text-xl font-semibold">
                        Ady
                    </label>
                    <input
                        className="form-input w-96 h-11 border-[1px] border-[#a1a1aa] rounded-md"
                        type="text"
                        name="username"
                        placeholder='Ady'
                        value={inputFields.username}
                        onChange={handleChange}
                    />
                    {errors.username && (
                        <span className="error-message">
                            {errors.username}
                        </span>
                    )}
                </div>

                <div className="insideForm flex flex-col gap-2">
                    <label className="form-label text-xl font-semibold">
                        Telefon belgi:
                    </label>
                    <input
                        className="form-input w-96 h-11 border-[1px] border-[#a1a1aa] rounded-md"
                        type="number"
                        name="number"
                        placeholder='+993'
                        value={inputFields.number}
                        onChange={handleChange}
                    />
                    {errors.number && (
                        <span className="error-message">
                            {errors.number}
                        </span>
                    )}
                </div>

                <div className='flex flex-col gap-2'>
                    <label className="form-label text-xl font-semibold">
                        E-mail
                    </label>
                    <input
                        className="form-input w-96 h-11 border-[1px] border-[#a1a1aa] rounded-md"
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={inputFields.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className="error-message">
                            {errors.email}
                        </span>
                    )}
                </div>
                {/* <div>
                    <label className="form-label">
                        Password:
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        value={inputFields.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <span className="error-message">
                            {errors.password}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">
                        Confirm Password:
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="confirmPassword"
                        value={inputFields.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                        <span className="error-message">
                            {errors.confirmPassword}
                        </span>
                    )}
                  </div> */}
                </form>
              </div>
            </div>
            <div className="mazmuny h-48 w-full mt-5 flex flex-col gap-2">
                <label className='text-xl font-bold'>Mazmuny</label>
                <textarea className='h-36 resize-none rounded-md border-[1px] border-[#a1a1aa]' name="text" id="text" placeholder='Mazmuny'></textarea>
            </div>
            <div className="button flex justify-end items-center mt-3">
                <button className="submit-button bg-green-500 h-9 w-36 rounded-md flex flex-row items-center justify-center gap-2" type="submit">Ugratmak <img src={rightArrow} /></button>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
    </>
  )
}

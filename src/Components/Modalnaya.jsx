import React from 'react'
import ReactModal from 'react-modal';
import { useState } from "react";

ReactModal.setAppElement("#root");

export default function Modalnaya({ isOpenModal, closeModal }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is not valid";

    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters long";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // If validation passes
      console.log("Form submitted", formData);
      // Do something with form data (e.g., send to an API)
    }
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
        <div className="modalContainer bg-[#f5f5f4] w-[850px] h-[500px] rounded-md">
          <div className="mainContainer">
            <div onClick={closeModal} className="close flex justify-end flex-end p-2 items-end">
              <span className='w-[22px] h-[21px] text-black p-1 text-2xl flex items-center justify-center text-bold border-[1px] border-black cursor-pointer'>X</span>
            </div>
            <div className="validation">
              <form action="#">
                <div>
                  <label className="block text-gray-700">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-gray-700">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-gray-700">Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
    </>
  )
}

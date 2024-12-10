import React, { useState } from 'react';

function NewForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countary: "",
    pen: false,
    copy: false,
    food: false,
    softwareVersion: "",
  });

  const [errors, setErrors] = useState({
    softwareVersion: "",
  });

  // Regular expression for validating the softwareVersion
  const softwareVersionRegex = /^\d+-\d+\.\d+\.\d+$/;

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Validate softwareVersion before submitting
    if (!softwareVersionRegex.test(formData.softwareVersion)) {
      setErrors({ softwareVersion: "Software version must follow the format: X-XX.X.X" });
      return; // Prevent form submission if validation fails
    }

    // If validation passes, reset error and submit form data
    setErrors({ softwareVersion: "" });
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <br />
      <br />
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={changeHandler}
          value={formData.firstName}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={changeHandler}
          value={formData.lastName}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="abc@example.com"
          name="email"
          onChange={changeHandler}
          value={formData.email}
        />
        <br />
        <br />
        <label>Country</label>
        <select
          name="countary"
          onChange={changeHandler}
          value={formData.countary}
        >
          <option value="" disabled>Country</option>
          <option value="INDIA">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="US">US</option>
          <option value="Germany">Germany</option>
        </select>
        <br />
        <br />
        <label>Checkboxes</label>
        <br />
        <br />
        <label>Pen</label>
        <input
          type="checkbox"
          name="pen"
          onChange={changeHandler}
          checked={formData.pen}
        />
        <br />
        <br />
        <label>Copy</label>
        <input
          type="checkbox"
          name="copy"
          onChange={changeHandler}
          checked={formData.copy}
        />
        <br />
        <br />
        <label>Food</label>
        <input
          type="checkbox"
          name="food"
          onChange={changeHandler}
          checked={formData.food}
        />
        <br />
        <br />

        {/* Software Version field */}
        <label>Software Version</label>
        <input
          type="text"
          name="softwareVersion"
          value={formData.softwareVersion}
          onChange={changeHandler}
        />
        {errors.softwareVersion && (
          <div style={{ color: 'red', marginTop: '5px' }}>
            {errors.softwareVersion}
          </div>
        )}
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default NewForm;

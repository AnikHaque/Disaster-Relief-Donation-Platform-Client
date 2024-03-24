import React, { useState } from "react";

function ReusableForm({ onSubmit, initialValues = {}, inputFields }) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputFields.map((field) => (
          <div key={field.name}>
            {field.label && <label htmlFor={field.name}>{field.label}</label>}{" "}
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
            />
            <br />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReusableForm;

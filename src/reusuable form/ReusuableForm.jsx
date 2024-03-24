import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ReusableForm({ onSubmit, initialValues = {}, inputFields }) {
  const { register } = useForm();
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register(field.name)}
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
        <button
          // style={{ backgroundColor: '#2A9D8F' }}
          type="submit"
          className="my-5 w-32 h-14 text-xl drop-shadow-xl bg-accent  font-medium rounded-md px-5 py-3 text-center "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReusableForm;

// ReusableForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const ReusableForm = ({ inputs, onSubmit }) => {
    const { register, handleSubmit, errors } = useForm();

    const handleFormSubmit = (data) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {inputs.map((input, index) => (
                <div key={index}>
                    <label htmlFor={input.name}>{input.label}</label>
                    <input
                        type={input.type}
                        name={input.name}
                        ref={register(input.validation)}
                    />
                    {errors[input.name] && <span>{errors[input.name].message}</span>}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReusableForm;

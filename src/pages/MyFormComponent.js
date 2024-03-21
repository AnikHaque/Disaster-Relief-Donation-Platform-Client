// MyFormComponent.js
import React from 'react';
import ReusableForm from '../reusuable form/ReusuableForm';


const MyFormComponent = () => {
    // Define the input configurations for the form
    const inputs = [
        {
            type: 'text',
            name: 'firstName',
            label: 'First Name',
            validation: { required: 'First Name is required' },
        },
        {
            type: 'email',
            name: 'email',
            label: 'Email',
            validation: {
                required: 'Email is required',
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                },
            },
        },
        // Add more input configurations as needed
    ];

    // Define the onSubmit function to handle form submission
    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        // Perform form submission logic here, such as making an API call
    };

    return (
        <div>
            <h1>My Form</h1>
            <ReusableForm inputs={inputs} onSubmit={onSubmit} />
        </div>
    );
};

export default MyFormComponent;

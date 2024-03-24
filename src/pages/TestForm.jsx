import React, { useState } from "react";
import ReusableForm from "../reusuable form/ReusuableForm";

function TestForm() {
  const handleAddUser = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("User added successfully!");
      } else {
        console.error("Error adding user:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Define input fields for the user form
  const userFormFields = [
    { type: "text", name: "name", placeholder: "Enter your name" },
    { type: "email", name: "email", placeholder: "Enter your email" },
    { type: "text", name: "email", placeholder: "Enter your age" },
    { type: "picture", name: "email", placeholder: "Enter your picture" },
  ];

  return (
    <div className="App">
      <h1>Welcome React</h1>
      {/* User form using ReusableForm */}
      <h2>User Form</h2>
      <ReusableForm onSubmit={handleAddUser} inputFields={userFormFields} />
      <br />
      {/* Product form using ReusableForm (example) */}

      {/* Define a separate submit function if needed */}
    </div>
  );
}

export default TestForm;

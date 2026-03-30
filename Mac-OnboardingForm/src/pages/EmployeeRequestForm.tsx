import { useState } from "react";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import CheckboxField from "../components/CheckboxField";

export default function EmployeeRequestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    manager: "",
    dateOfBirth: "",
    phoneNumber: "",
    emailAddress: "",
    laptop: false,
    tablet: false,
    acCard: false,
    role: "", // ✅ add this
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value, type } = e.target;
    let newValue;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      newValue = e.target.checked;
    } else {
      newValue = value;
    }
    setFormData({
      ...formData,
      [name]: newValue,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // 🚫 stops page refresh

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      console.log("Response:", data);

      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-black text-white shadow-md rounded-lg p-8">
      {/* Company Header */}
      <div className="text-center mb-6">
        <h1 className="text-orange-500 font-semibold text-lg">MacdavisNr</h1>

        <div className="bg-orange-500 text-white py-2 mt-2 rounded">
          New Employee IT Request
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First Row */}
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
            onChange={handleChange}
          />

          <InputField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>

        {/* Second Row */}

        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            options={["Engineering", "Marketing", "Design"]}
          />

          <SelectField
            label="Manager"
            name="manager"
            value={formData.manager}
            onChange={handleChange}
            options={["Manager 1", "Manager 2"]}
          />
        </div>

        {/* Phone Number and Email */}

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Phone Number"
            type="tel"
            onChange={handleChange}
          />

          <InputField
            label="Email Address"
            name="emailAddress"
            value={formData.emailAddress}
            placeholder="Email Address"
            type="email"
            onChange={handleChange}
          />
        </div>

        {/* Date of Birth */}

        <InputField
          label="Date of Birth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          type="date"
          onChange={handleChange}
        />

        <div>
          <p className="text-gray-300 mb-3 gap-2">
            please check for interested field
          </p>

          <div className="grid grid-cols-3 gap-2">
            <h3>Select your role:</h3>

            <label>
              <input
                type="radio"
                name="role"
                value="frontend"
                checked={formData.role === "frontend"}
                onChange={handleChange}
              />
              Frontend
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="backend"
                checked={formData.role === "backend"}
                onChange={handleChange}
              />
              Backend
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="fullstack"
                checked={formData.role === "fullstack"}
                onChange={handleChange}
              />
              Full Stack
            </label>
          </div>
        </div>

        {/* Equipment */}

        <div>
          <p className="text-gray-300 mb-2">
            Please select the following items for the employee
          </p>

          <div className="grid grid-cols-3 gap-2">
            <CheckboxField
              label="Laptop"
              name="laptop"
              checked={formData.laptop}
              onChange={handleChange}
            />

            <CheckboxField
              label="AC Power Cord"
              name="acCard"
              checked={formData.acCard}
              onChange={handleChange}
            />

            <CheckboxField
              label="Tablet"
              name="tablet"
              checked={formData.tablet}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

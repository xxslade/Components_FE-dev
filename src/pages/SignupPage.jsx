import React, { useState } from 'react';
import { toast } from 'react-toastify';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password } = formData;
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        toast.success("Signup Successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true
        });
      } else {
        setError(data.message || "Signup failed.");
        toast.error("Signup failed. Please try again.", {
          position: "top-right",
          autoClose: 3000
        });
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    }

    setLoading(false);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="w-full h-screen bg-[#3E0B18] flex justify-center items-center px-4">
      <div className="bg-[#5B1A29] shadow-2xl w-full max-w-md rounded-xl px-8 py-10 space-y-6 text-white">
        <h2 className="text-3xl  text-center font-cormorant">Create Your Account</h2>

        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-lg mb-1">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#3E0B18] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#3E0B18] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg mb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#3E0B18] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-[#8B3A4C] hover:bg-[#A0475B] text-white text-sm font-medium rounded-md transition duration-300"
            >
            {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>

          {error && <p className="text-red-300 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignupPage;

'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ChangeEvent } from 'react';

const BigForm= () => {
    const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    age: '',
    bio: '',
    agree: false,
    fruit: '',
    color: '',
  });

  const handleChange = (e: any) => {
    const { name, value, type, } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      // [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const queryString = Object.keys(formData)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(formData[key as keyof typeof formData])}`)
    .join('&');
  router.push(`/users/formData?${queryString}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <label className="block mb-2 font-semibold">First Name:</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2 mb-4"
        required
      />

      <label className="block mb-2 font-semibold">Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2 mb-4"
        required
      />

      <label className="block mb-2 font-semibold">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2 mb-4"
        required
      />

      <label className="block mb-2 font-semibold">Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2 mb-4"
        required
      />

      <label className="block mb-2 font-semibold">Gender:</label>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2 mb-4"
        required
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label className="block mb-2 font-semibold">Age:</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2 mb-4"
        required
      />

      <label className="block mb-2 font-semibold">Bio:</label>
      <textarea
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2 mb-4"
        required
      ></textarea>

      <label className="block mb-2 font-semibold">Agree to Terms:</label>
      <input
        type="checkbox"
        name="agree"
        checked={formData.agree}
        onChange={handleChange}
        className="mr-2"
      />
      <span className="text-sm">I agree to the terms and conditions</span>

      <label className="block mb-2 mt-4 font-semibold">Favorite Fruit:</label>
      <input
        type="radio"
        name="fruit"
        value="apple"
        checked={formData.fruit === 'apple'}
        onChange={handleChange}
        className="mr-2"
      />
      <span className="mr-4">Apple</span>
      <input
        type="radio"
        name="fruit"
        value="banana"
        checked={formData.fruit === 'banana'}
        onChange={handleChange}
        className="mr-2"
      />
      <span className="mr-4">Banana</span>
      <input
        type="radio"
        name="fruit"
        value="orange"
        checked={formData.fruit === 'orange'}
        onChange={handleChange}
        className="mr-2"
      />
      <span className="mr-4">Orange</span>

      <label className="block mb-2 mt-4 font-semibold">Favorite Color:</label>
      <select
        name="color"
        value={formData.color}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2 mb-4"
      >
        <option value="">Select Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default BigForm;

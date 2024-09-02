"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

function RegisterForm() {
  const router = useRouter();

  const [hydrated, setHydrated] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("/api/register", { username, email, password })
      .then((response) => {
        if (response.status === 201) {
          alert("Registration successful. You can now log in.");
          router.push("/login");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.message);
        } else {
          console.error(error);
          alert("Failed to register. Please try again.");
        }
      });
  }

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <div className="w-3/4 mx-auto my-10 bg-gray-300 p-10 rounded-xl">
      <h1 className="text-center text-3xl font-bold">Register</h1>

      <form onSubmit={handleSubmit} className="*:block *:w-full space-y-3 my-5">
        <input
          type="text"
          placeholder="Username"
          className="py-2 px-3 rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="py-2 px-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="py-2 px-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="bg-blue-700 text-white py-3 rounded-lg">
          Submit
        </button>
      </form>

      <p className="text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-800">
          Login Here
        </Link>
      </p>
    </div>
  );
}

export default RegisterForm;

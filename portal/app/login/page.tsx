"use client";

import Link from "next/link";
import { useState } from "react";
import { Error } from "../../components/errorMessage";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors = {
            email: "",
            password: "",
        };

        // Email validation
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email";
        }

        // Password validation
        if (!password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(
            (error) => error !== ""
        );

        if (!hasErrors) {
            console.log("Login form is valid");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Login to your account
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />

                        {errors.email && (
                            <Error message={errors.email} />
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />

                        {errors.password && (
                            <Error message={errors.password} />
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Login
                    </button>

                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-500 text-sm">
                        Don't have an account?
                    </p>

                    <Link
                        href="/register"
                        className="inline-block mt-2 text-blue-600 font-medium hover:underline"
                    >
                        Create an account
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;
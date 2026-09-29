"use client";

import Link from "next/link";
import { useState } from "react";
import { Error } from "../../components/errorMessage";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        };

        // Name validation
        if (!name.trim()) {
            newErrors.name = "Name is required";
        } else if (name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        // Email validation
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email";
        }

        // Password validation
        if (!password) {
    newErrors.password = "Password is required";
} else if (password.length < 8) {
    newErrors.password = "Password must be at least 8 characters";
} else if (!/[A-Z]/.test(password)) {
    newErrors.password = "Password must contain at least one uppercase letter";
} else if (!/[a-z]/.test(password)) {
    newErrors.password = "Password must contain at least one lowercase letter";
} else if (!/[0-9]/.test(password)) {
    newErrors.password = "Password must contain at least one number";
} else if (!/[!@#$%^&*]/.test(password)) {
    newErrors.password =
        "Password must contain at least one special character";
}

        // Confirm password validation
        if (!confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(
            (error) => error !== ""
        );

        if (!hasErrors) {
            console.log("Registration form is valid");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Create Account
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Register to start blogging
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />

                        {errors.name && (
                            <Error message={errors.name} />
                        )}
                    </div>

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

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            placeholder="Confirm your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />

                        {errors.confirmPassword && (
                            <Error message={errors.confirmPassword} />
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Register
                    </button>

                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-500 text-sm">
                        Already have an account?
                    </p>

                    <Link
                        href="/login"
                        className="inline-block mt-2 text-blue-600 font-medium hover:underline"
                    >
                        Login
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default RegisterPage;
// import Link from "next/link";

// const LoginPage = () => {
//     return (
//         <div className="login-container">
//             <h1 className="login h1">Login</h1>
//             <br />
//             <form className="login-form" action="/api/login" method="POST">
//                 <input
//                  className="login-input"
//                  type="email" 
//                  placeholder="Email" />
//                 <br />
//                 <br />
//                 <input 
//                 className="login-input"
//                 type="password" 
//                 placeholder="Password" />
//                 <br />
//                 <br />
//                 <button 
//                 className="login-button"
//                 type="submit">Login</button>
//                 <br />
//                 <h1 className="login h1">Don't have an account?</h1>
//                 <Link className="login-link" href="/register">
//                     <button className="login-button" type="button">Register</button>
//                 </Link>
                
//             </form>
//         </div>
//     );
// };

// export default LoginPage;

import Link from "next/link";

const LoginPage = () => {
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

                <form className="space-y-5">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
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
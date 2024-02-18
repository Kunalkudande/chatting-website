import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <p className="text-gray-600 mb-4 text-center">
                    Enter your information to log in
                </p>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="label">
                            <span className="text-base label-text text-white">
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full input input-bordered h-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="label">
                            <span className="text-base label-text text-white">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="text-center">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none center">
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-gray-300 mt-2 text-center">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        Signup
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;

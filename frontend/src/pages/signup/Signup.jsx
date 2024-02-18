import { useState } from "react";
import GenderCheckbox from "./Gendercheck";

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        // Add your sign up logic here
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="label">
                            <span className="text-base label-text text-gray-300">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full input input-bordered h-10"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="label">
                            <span className="text-base label-text text-gray-300">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="johndoe@gmail.com"
                            className="w-full input input-bordered h-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="label">
                            <span className="text-base label-text text-gray-300">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="label">
                            <span className="text-base label-text text-gray-300">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full input input-bordered h-10"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
					<GenderCheckbox/>

                    <div className="text-center">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="text-gray-600 mt-2 text-center">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        Log In
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;

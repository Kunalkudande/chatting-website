import { useState } from "react";
import { Link } from "react-router-dom"
import GenderCheckbox from "./Gendercheck";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [input, setInput] = useState({
        fullName : '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignup();

    const handleGender = (gender)=>{
        setInput({...input, gender})
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        await signup(input);
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
                            value={input.fullName}
                            onChange={(e) => setInput({...input, fullName: e.target.value})}
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
                            value={input.username}
                            onChange={(e) => setInput({...input, username:e.target.value})}
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
                            value={input.password}
                            onChange={(e) => setInput({...input, password: e.target.value})}
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
                            value={input.confirmPassword}
                            onChange={(e) => setInput({...input, confirmPassword: e.target.value})}
                        />
                    </div>
					<GenderCheckbox onCheckbox={handleGender} selectGender={input.gender}/>

                    <div className="text-center">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="text-gray-600 mt-2 text-center">
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-blue-500 hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;

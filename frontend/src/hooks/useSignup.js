import { useState } from "react"
import {toast} from "react-hot-toast";

const useSignup = ()=>{
    const [loading, setLoading] = useState(false);

    const signup = async ({fullName, username, password, confirmPassword, gender})=>{
        const success = handleFunction({fullName, username, password, confirmPassword, gender});

        if(!success){
            return;
        }
        setLoading(true);
        try{
            const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
			});
            const data = await res.json();  
        }
        catch(error){
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    
    return { loading, signup };
}
export default useSignup;

function handleFunction({fullName, username, password, confirmPassword, gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill all inputs");
        return false;
    }

    if(password != confirmPassword){
        toast.error("Password do not match");
        return false;
    }

    if(password.length < 6){
        toast.error("Password must be greater than 6");
        return false;
    }

    toast.success("Successfully Signup");
    return true;
}
import { useDispatch, useSelector } from "react-redux";
import { useAddRegisterUserMutation } from "../../redux/user/userApiSlice"
import { clearRegisterUser, setRegisterUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const dispatch = useDispatch();
    const { registerUser } = useSelector(state => state.user);
    const [addRegisterUser] = useAddRegisterUserMutation();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setRegisterUser({ name, value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (registerUser.username == "" || registerUser.password == "") {
            toast.warning('Please fill all the fields');
            return;
        }
        try {
            const response = await addRegisterUser(registerUser);
            localStorage.setItem("token", response.data.token)
            toast.success(response.data.message);
            dispatch(clearRegisterUser())
            navigate("/");
        } catch (error) {
            toast.error("Invalid username and password");
        }
    }

    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            <input className="border border-black p-2 rounded-md" placeholder="Enter your name" name="username" type="text" value={registerUser.username} onChange={handleChange} />
            <input className="border border-black p-2 rounded-md" placeholder="Enter your password" name="password" type="password" value={registerUser.password} onChange={handleChange} />
            <input type="submit" value="Sign Up" className="border border-black bg-black text-white hover:text-black hover:bg-white duration-300" />
        </form>
    )
}
export default Register